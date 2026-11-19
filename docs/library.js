// Shows the real components (library.json, captured from the preview) with the app's own CSS.
// Values come from tokens.json; the palettes as edited in the colors section above, and unapplied studio edits in
// this browser, are laid over them.
const box = document.querySelector("#library");
const note = document.querySelector("#library-note");
// The page itself too, for the drafts (신규 컴포넌트 · 검토), which take the same tokens.
const hosts = [document.documentElement, ...document.querySelectorAll(".ds-project-modal")];
const cells = [];
let tokens = {};
const COMPONENT = /^--(button|chip|bubble|sheet|dialog|toggle|navigation|input|voice|icon-button|list-row|option-row|radio-chip|badge|callout|entry-button)-/;
const STATUS = { confirmed: "확정", proposal: "제안" };
const el = (tag, props = {}, ...kids) => {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...kids);
  return node;
};
function readEdits() {
  try {
    return JSON.parse(localStorage.getItem("studio-edits")) ?? {};
  } catch {
    return {};
  }
}
// app.js's palette editors, live: main and sub as they are now (with the H shift), gray as #neutral-code shows it,
// and the page background's middle stop and stop positions (its top and bottom are main/100 and gray/50).
// Kept in this browser too (gg-palette-live), so the studio's preview follows them.
let lastPalette = "";
function palette() {
  try {
    const values = {};
    for (const name of ["main", "sub"]) for (const n of brandEditors[name].current()) values[`--${name}-${n.step}`] = hsvHex(n.h, n.s, n.b);
    for (const n of JSON.parse(document.querySelector("#neutral-code").textContent).scale) values[`--gray-${n.step}`] = n.hex;
    const [top, middle, bottom] = [...document.querySelectorAll("[data-bg-position]")].map((n) => n.value);
    values["--bg-page-middle"] = document.querySelector('[data-bg-color="1"]').value;
    values["--bg-page-gradient"] = `linear-gradient(to bottom, var(--bg-page-top) ${top}%, var(--bg-page-middle) ${middle}%, var(--bg-page-bottom) ${bottom}%)`;
    const json = JSON.stringify(values);
    if (json !== lastPalette) localStorage.setItem("gg-palette-live", (lastPalette = json));
    return values;
  } catch {
    return {};
  }
}
const finalValue = (value, all, depth = 0) => (value ?? "").replace(/var\((--[\w-]+)\)/g, (_, name) => (depth > 8 ? "" : finalValue(all[name], all, depth + 1)));
function paint() {
  const edits = readEdits();
  const all = { ...tokens, ...palette(), ...edits };
  for (const host of hosts) for (const [name, value] of Object.entries(all)) host.style.setProperty(name, value);
  for (const { cell, name } of cells) cell.textContent = finalValue(all[name], all);
  const count = Object.keys(edits).length;
  note.textContent = count ? `이 브라우저의 스튜디오에서 아직 적용하지 않은 변경 ${count}개를 함께 보여 주고 있어요.` : "";
}
function tokenTable(names) {
  const head = el("tr", {}, el("td", { textContent: "토큰" }), el("td", { textContent: "현재값" }));
  const rows = names.map((name) => {
    const cell = el("td");
    cells.push({ cell, name });
    return el("tr", {}, el("td", { textContent: name.slice(2) }), cell);
  });
  return el("div", { className: "table-scroll" }, el("table", {}, head, ...rows));
}
const ITEMS = {};
// One part of another state's markup, to swap into the live sample.
function partOf(item, label, selector) {
  const html = item.states.find((s) => s.label === label)?.html;
  const part = html && el("template", { innerHTML: html }).content.querySelector(selector);
  part?.classList.remove("lib-focus");
  return part ?? null;
}
// The live sample behaves as the app does where the state shows on the component itself.
function liveBehaviour(items, inner) {
  const has = (id) => items.some((one) => one?.id === id);
  // Switches, a single choice in a list, radio chips.
  inner.addEventListener("click", (event) => {
    const target = event.target.closest('[role="switch"], .language-options button');
    if (target?.matches('[role="switch"]')) target.setAttribute("aria-checked", String(target.getAttribute("aria-checked") !== "true"));
    else if (target) for (const b of target.parentElement.querySelectorAll("button")) b.setAttribute("aria-pressed", String(b === target));
  });
  inner.addEventListener("change", (event) => {
    if (event.target.type !== "radio") return;
    for (const r of inner.querySelectorAll(`input[name="${event.target.name}"]`)) r.closest("label")?.classList.toggle("selected", r.checked);
  });
  // Answer rating (AnswerRating.tsx): 👍 thanks at once, 👎 opens the reasons in a bottom sheet (가은 11/04); a reason
  // enables sending, ✕ goes back.
  const thanks = () => el("p", { className: "rating-thanks", role: "status", textContent: "의견 감사합니다." });
  inner.addEventListener("click", (event) => {
    const up = event.target.closest('.rating-button[aria-label="도움이 됐어요"]');
    const down = event.target.closest('.rating-button[aria-label="도움이 안 됐어요"]');
    const sheet = event.target.closest("dialog:has(.rating-form)");
    if (up) up.closest(".rating-row").replaceWith(thanks());
    if (down) {
      const row = down.closest(".rating-row");
      const opened = partOf(ITEMS["rating-form"], "기본", "dialog");
      opened.row = row;
      row.replaceWith(opened);
    }
    if (sheet && event.target.closest(".panel-heading .icon-button")) {
      const form = sheet.querySelector(".rating-form");
      if (sheet.row) sheet.replaceWith(sheet.row);
      else form.reset(), form.querySelector('[type="submit"]').disabled = true;
    }
    if (sheet && event.target.closest('.rating-form [type="submit"]:not(:disabled)')) sheet.replaceWith(thanks());
  });
  inner.addEventListener("change", (event) => {
    const form = event.target.closest(".rating-form");
    // More than one reason may be chosen (가은 11/03); sending waits for at least one.
    if (form && event.target.name === "reason") form.querySelector('[type="submit"]').disabled = !form.querySelector('input[name="reason"]:checked');
  });
  // Feedback (FeedbackSheet.tsx): two characters enable sending; sent, it thanks and closes back to the form.
  inner.addEventListener("input", (event) => {
    const sheet = event.target.closest(".feedback-sheet");
    if (!sheet || !event.target.matches("textarea")) return;
    const count = sheet.querySelector(".feedback-text small");
    if (count) count.textContent = `${event.target.value.length.toLocaleString()} / ${Number(event.target.maxLength).toLocaleString()}`;
    sheet.querySelector('[type="submit"]').disabled = event.target.value.trim().length < 2;
  });
  inner.addEventListener("click", (event) => {
    const sheet = event.target.closest(".feedback-sheet");
    if (sheet && event.target.closest('[type="submit"]:not(:disabled)')) {
      const form = sheet.cloneNode(true);
      const done = el("div", { className: "feedback-sheet", role: "status" },
        el("p", { className: "feedback-done", textContent: "보내 주셔서 고마워요. 담당팀이 확인할게요." }),
        el("p", { textContent: "접수번호 " }, el("strong", { className: "feedback-receipt", textContent: "예시-0000" })),
        el("button", { className: "primary full-width", textContent: "닫기" }));
      done.lastChild.addEventListener("click", () => {
        const box = form.querySelector("textarea");
        box.value = "";
        const count = form.querySelector(".feedback-text small");
        if (count) count.textContent = `0 / ${Number(box.maxLength).toLocaleString()}`;
        form.querySelector('[type="submit"]').disabled = true;
        done.replaceWith(form);
      });
      sheet.replaceWith(done);
    }
  });
  // Sheets and dialogs close; the sample offers to open them again.
  if (has("bottom-sheet") || has("dialog")) {
    inner.addEventListener("click", (event) => {
      if (!event.target.closest('dialog .icon-button[aria-label*="닫기"], dialog .modal-actions button, dialog footer button, dialog .secondary, dialog .primary')) return;
      const kept = [...inner.childNodes];
      const again = el("button", { type: "button", textContent: "다시 열기" });
      again.style.cssText = "margin:24px auto;padding:8px 16px;border:1px solid var(--stroke-subtle);border-radius:var(--radius-full);background:var(--bg-surface);color:var(--fg-neutral);font:inherit";
      again.addEventListener("click", () => inner.replaceChildren(...kept));
      inner.replaceChildren(again);
    });
  }
  if (has("text-input")) {
    const item = ITEMS["text-input"];
    // Typing turns the round button into send; sending clears the box and takes its focus, and while 반달이 writes
    // the round button is ■, which stops the answer (가은 11/03). Here the made-up answer ends after 4 seconds.
    const swap = (from, to) => inner.querySelector(from)?.replaceWith(to.cloneNode(true));
    const send = partOf(item, "입력 중", ".send-button");
    const toVoice = partOf(item, "기본", ".mode-switch");
    const stop = partOf(item, "답변 중", ".answer-stop");
    let answering = 0;
    const rest = () => (answering ? stop : toVoice);
    const answered = () => {
      clearTimeout(answering);
      answering = 0;
      swap(".answer-stop", toVoice);
    };
    inner.addEventListener("input", (event) => {
      const ready = event.target.value.trim() !== "";
      inner.querySelector(".home-ask")?.classList.toggle("sending", ready);
      if (ready) swap(".mode-switch, .answer-stop", send);
      else swap(".send-button", rest());
    });
    const submit = () => {
      const input = inner.querySelector(".home-ask input");
      if (!input?.value.trim()) return;
      input.value = "";
      input.blur();
      inner.querySelector(".home-ask").classList.remove("sending");
      clearTimeout(answering);
      answering = setTimeout(answered, 4000);
      swap(".send-button", stop);
    };
    inner.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.isComposing && event.target.matches(".home-ask input")) submit();
    });
    inner.addEventListener("click", (event) => {
      if (event.target.closest(".answer-stop")) answered();
      else if (event.target.closest(".send-button")) submit();
    });
  }
  if (has("voice-controls")) {
    const item = ITEMS["voice-controls"];
    // The microphone: off ↔ on, the outline following a made-up voice while on; the speaker on ↔ off.
    let timer = 0;
    inner.addEventListener("click", (event) => {
      const mic = event.target.closest(".mic-button");
      const sound = event.target.closest(".sound-toggle");
      if (mic) {
        const on = mic.classList.contains("off");
        const next = partOf(item, on ? "마이크 켜짐" : "마이크 꺼짐", ".mic-button");
        clearInterval(timer);
        mic.replaceWith(next);
        if (on) {
          let t = 0;
          timer = setInterval(() => {
            t += 0.35;
            next.style.setProperty("--mic-level", Math.max(0, Math.min(1, 0.5 + 0.45 * Math.sin(t) * Math.sin(t * 0.37 + 1))).toFixed(2));
          }, 90);
        }
      }
      if (sound) sound.replaceWith(partOf(item, sound.getAttribute("aria-pressed") === "true" ? "소리 꺼짐" : "마이크 꺼짐", ".sound-toggle"));
    });
  }
}
// The live sample takes hover, press, focus and the states above; the states are still pictures (inert).
function stage({ label, html, width }, live = false, item = null) {
  const host = el("div", { className: live ? "lib-host lib-live" : "lib-host lib-still" });
  const root = host.attachShadow({ mode: "open" });
  root.append(el("link", { rel: "stylesheet", href: "preview/assets/library.css" }));
  const inner = el("div", { className: "lib-stage", innerHTML: html });
  inner.style.width = `${width}px`;
  inner.inert = !live;
  root.append(inner);
  // Links and forms go nowhere here; buttons, switches and radios still work.
  root.addEventListener("click", (event) => event.target.closest("a") && event.preventDefault(), true);
  root.addEventListener("submit", (event) => event.preventDefault(), true);
  if (live) liveBehaviour([item], inner);
  hosts.push(host);
  return el("figure", { className: "lib-state" }, el("figcaption", { textContent: label }), host);
}
// A whole screen (library.json screens), 393×660 like the page background preview; it works as the live samples do.
function screenView({ label, html, scrim }) {
  const host = el("div", { className: "lib-screen-host" });
  const root = host.attachShadow({ mode: "open" });
  root.append(el("link", { rel: "stylesheet", href: "preview/assets/library-screens.css" }));
  // variant-default: the class the preview puts on <html>, for the default screen's own rules.
  const inner = el("div", { className: "lib-stage lib-screen variant-default", innerHTML: html });
  inner.style.cssText = "width:393px;height:660px;--lib-vh:6.6px";
  root.append(inner);
  root.addEventListener("click", (event) => event.target.closest("a") && event.preventDefault(), true);
  root.addEventListener("submit", (event) => event.preventDefault(), true);
  liveBehaviour([ITEMS["text-input"], ITEMS["voice-controls"]], inner);
  const caption = el("figcaption", { textContent: label });
  const sheet = inner.querySelector("dialog[open]");
  if (sheet) {
    // The sheet's backdrop as the app paints it; ✕ closes it and the caption opens it again.
    // Out of the screen's stacking so it sits over the backdrop, still under .v7-shell for its rules; at the bottom as in
    // the app (a modal sheet), which a dialog opened here is not.
    const back = el("div", { className: "lib-scrim" });
    back.style.background = scrim?.background ?? "";
    back.style.backdropFilter = scrim?.filter ?? "";
    const holder = el("div", { className: "v7-shell" });
    holder.style.display = "contents";
    holder.append(sheet);
    // overflow: what a modal dialog gets from the browser, so its heading keeps inside the rounded corners.
    sheet.style.cssText += ";position:absolute;inset:auto 0 0;margin:0 auto;z-index:21;overflow:auto";
    inner.append(back, holder);
    const reopen = el("button", { type: "button", className: "lib-screen-reopen", textContent: "시트 다시 열기", hidden: true });
    reopen.addEventListener("click", () => {
      holder.before(back);
      sheet.setAttribute("open", "");
      reopen.hidden = true;
    });
    inner.addEventListener("click", (event) => {
      if (!event.target.closest('dialog .icon-button[aria-label*="닫기"]')) return;
      sheet.removeAttribute("open");
      back.remove();
      reopen.hidden = false;
    });
    caption.append(reopen);
  }
  hosts.push(host);
  return el("figure", { className: "lib-screen-frame" }, caption, host);
}
function itemView(item) {
  const own = item.tokens.filter((name) => COMPONENT.test(name));
  const rest = item.tokens.filter((name) => !COMPONENT.test(name));
  const title = el("h4", { textContent: item.name }, el("span", { className: "lib-status", textContent: STATUS[item.status] }));
  const view = el("div", { className: "lib-item", id: `lib-${item.id}` }, title, el("p", { textContent: item.note }));
  const sample = item.states.find((s) => s.label === "기본") ?? item.states.find((s) => !/\sdisabled[\s=>]/.test(s.html)) ?? item.states[0];
  const sampleTemplate = document.createElement("template");
  sampleTemplate.innerHTML = sample.html;
  const hasInteraction = sampleTemplate.content.querySelector(
    'button:not(:disabled), input:not(:disabled):not([type="hidden"]), textarea:not(:disabled), select:not(:disabled), a[href], summary, [role="button"], [role="switch"], [role="radio"], [role="checkbox"]'
  );
  if (hasInteraction) {
    view.append(el("div", { className: "lib-states" }, stage({ ...sample, label: "직접 해 보기" }, true, item)));
  }
  view.append(el("p", { className: "lib-states-label", textContent: "상태별 모습 · 고정" }), el("div", { className: "lib-states" }, ...item.states.map((s) => stage(s))));
  if (item.studio) view.append(el("a", { className: "lib-go", href: `studio.html?go=${encodeURIComponent(item.studio)}`, textContent: "스튜디오에서 수정 ↗" }));
  if (own.length) view.append(el("details", { className: "lib-more" }, el("summary", { textContent: `컴포넌트 토큰 ${own.length}개` }), tokenTable(own)));
  if (rest.length) view.append(el("details", { className: "lib-more" }, el("summary", { textContent: `역할·기본 토큰 ${rest.length}개` }), tokenTable(rest)));
  return view;
}
Promise.all([fetch(`tokens.json?t=${Date.now()}`).then((r) => r.json()), fetch("library.json").then((r) => r.json())]).then(([values, { groups, screens = [] }]) => {
  tokens = values;
  for (const group of groups) for (const one of group.items) ITEMS[one.id] = one;
  if (screens.length)
    box.append(
      el("div", { className: "bg-studio-title", id: "component-preview" }, el("span", { textContent: "COMPONENT PREVIEW" }), el("h4", { textContent: "전체 컴포넌트 미리보기" })),
      el("p", { className: "micro", textContent: "실사용 컴포넌트를 앱 화면에 놓인 그대로 봅니다. 값은 아래 컴포넌트와 같이 tokens.json, 컬러 섹션, 스튜디오의 미적용 변경을 따르고, 입력·마이크·평가·시트 닫기는 직접 해 볼 수 있습니다. 디자인 스튜디오와는 별개의 미리보기입니다." }),
      el("div", { className: "lib-screens" }, ...screens.map(screenView)),
    );
  // The page background study (colors section) shows the design system's own avatar screen, not a drawing: its bars and
  // gradient follow the Top, Middle and Bottom set there.
  const study = document.querySelector(".bg-page-preview");
  const avatar = screens.find((s) => s.label === "음성 대화");
  if (study && avatar) study.replaceChildren(screenView(avatar).querySelector(".lib-screen-host"));
  for (const group of groups) box.append(el("h3", { textContent: group.name }), ...group.items.map(itemView));
  paint();
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
});
const colors = document.querySelector("#colors");
if (colors) new MutationObserver(paint).observe(colors, { subtree: true, childList: true, characterData: true, attributes: true });
addEventListener("storage", (event) => {
  if (event.key === "studio-edits") paint();
});
