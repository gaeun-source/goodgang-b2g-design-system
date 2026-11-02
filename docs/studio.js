// 디자인 스튜디오: 토큰을 화면에서 고르고 고치고, 적용하면 저장소의 tokens.json에 커밋한다.
const REPO = "gaeun-source/goodgang-b2g-design-system";
const FILE = "docs/tokens.json";
const SCALE = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64];
const $ = (selector) => document.querySelector(selector);
const frame = $("#frame");
const el = (tag, props = {}, ...children) => {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
};
const toast = (text) => {
  $("#toast").textContent = text;
  $("#toast").classList.add("show");
  setTimeout(() => $("#toast").classList.remove("show"), 2600);
};
const load = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // 저장이 막힌 브라우저에서도 화면은 동작한다.
  }
};

// 체크리스트 상태. 프레임이 먼저 말을 걸 수 있어 파일 앞쪽에 둔다.
let items = [];
const checked = new Set(load("offscale-checked", []));
let present = new Set();
let marking = false;
let focused = null;
let openRow = null;
const sendMarks = () => send({ kind: "offscale", items: items.map(({ id, value, probe, group }) => ({ id, value, probe, group })), on: marking, focused });

let variant = "default";
let page = "entry";
let modeOn = false;
let defs = {};
let uses = {};
let pick = null;
const edits = load("studio-edits", {});
const send = (message) => frame.contentWindow?.postMessage(message, location.origin);

function refresh() {
  save("studio-edits", edits);
  if (!$("#tab-all").hidden) renderTokens();
  if (!$("#tab-offscale").hidden && items.length) renderList();
  const count = Object.keys(edits).length;
  $("#edit-count").textContent = count ? `변경 ${count}개` : "변경 없음";
  $("#apply").disabled = $("#reset-all").disabled = $("#export").disabled = !count;
  send({ kind: "token-apply", edits });
}
function setToken(name, value) {
  if (value === defs[name]) delete edits[name];
  else edits[name] = value;
  refresh();
}
let pending = null;
function openFrame(modal = null) {
  const query = new URLSearchParams({ variant });
  if (variant === "default" && page !== "entry") query.set("page", page);
  if (modal) query.set("modal", modal);
  frame.src = `preview/index.html?${query}`;
  pick = null;
  tree = { nodes: [], selected: -1 };
  renderLayers();
  renderPick();
}

const PROP = { width: "너비", height: "높이", "min-width": "최소 너비", "min-height": "최소 높이", "max-width": "최대 너비", padding: "안쪽 여백", "padding-top": "위 안쪽 여백", "padding-right": "오른쪽 안쪽 여백", "padding-bottom": "아래 안쪽 여백", "padding-left": "왼쪽 안쪽 여백", margin: "바깥 여백", "margin-top": "위 바깥 여백", "margin-right": "오른쪽 바깥 여백", "margin-bottom": "아래 바깥 여백", "margin-left": "왼쪽 바깥 여백", gap: "간격", top: "위 위치", right: "오른쪽 위치", bottom: "아래 위치", left: "왼쪽 위치", "font-size": "글자 크기", "line-height": "행간", "font-weight": "굵기", "letter-spacing": "자간", color: "글자색", background: "배경", "background-color": "배경색", border: "선", "border-color": "선 색", "border-radius": "반경" };
const GROUPS = [["크기", /width|height/], ["여백", /padding|margin|gap|^top|^right|^bottom|^left/], ["글자", /font|line-height|letter/], ["색", /^color|background/], ["선과 반경", /border/]];
const familyOf = (name) => (/^--(gray|main|white)/.test(name) ? /^--(gray|main|white)/ : new RegExp(`^${name.replace(/-[^-]+$/, "")}-`));
const isColor = (value) => /^#[0-9a-f]{3,8}$/i.test(value);
// 값을 직접 쓰거나 다른 토큰으로 교체한다. 교체는 이 토큰을 쓰는 모든 곳이 그 토큰을 따르게 한다.
function tokenOptions(name, ref) {
  const family = familyOf(ref ?? name);
  const follows = (candidate) => {
    for (let at = candidate, guard = 0; at && guard < 8; guard += 1) {
      if (at === name) return true;
      at = (edits[at] ?? defs[at] ?? "").match(/^var\((--[\w-]+)\)$/)?.[1];
    }
    return false;
  };
  return Object.keys(defs)
    .filter((n) => family.test(n) && !follows(n))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}
function editor(step) {
  const current = edits[step.name] ?? step.value;
  const ref = current.match(/^var\((--[\w-]+)\)$/)?.[1];
  const select = el("select", { ariaLabel: `${step.name} 토큰 교체` });
  select.append(el("option", { value: "", textContent: ref ? "직접 입력" : "토큰으로 교체…", selected: !ref }));
  for (const name of tokenOptions(step.name, ref)) select.append(el("option", { value: `var(${name})`, textContent: name.replace(/^--/, ""), selected: name === ref }));
  select.onchange = () => {
    if (select.value) setToken(step.name, select.value);
    else setToken(step.name, literalOf(step.name));
    renderAgain();
  };
  if (ref) return select;
  const input = el("input", { value: current, ariaLabel: step.name });
  input.onchange = () => setToken(step.name, input.value.trim());
  const box = el("div", { className: "value-field" });
  if (isColor(current)) {
    const swatch = el("input", { type: "color", value: current.slice(0, 7), ariaLabel: `${step.name} 색 선택` });
    swatch.oninput = () => {
      input.value = swatch.value;
      setToken(step.name, swatch.value);
    };
    box.append(swatch);
  }
  box.append(input, select);
  return box;
}
const literalOf = (name) => {
  const seen = new Set();
  let value = defs[name];
  for (let at = name; /^var\(/.test(value) && !seen.has(at); ) {
    seen.add(at);
    at = value.match(/^var\((--[\w-]+)\)$/)?.[1];
    value = defs[at] ?? "0";
  }
  return value;
};
const renderAgain = () => {
  if (!$("#tab-all").hidden) renderTokens();
};
function stepRow(step) {
  const edited = step.name in edits;
  const row = el("div", { className: `step${edited ? " edited" : ""}` });
  const name = el("div", { className: "step-name", textContent: step.name.replace(/^--/, "") });
  const count = uses[step.name] ?? 0;
  const spread = el("button", { type: "button", className: "step-uses", textContent: `${tierOf(step.name)} · ${count > 1 ? `고치면 ${count}곳이 함께 바뀌어요` : "1곳에서 사용"} ›` });
  spread.onclick = () => {
    usageRow = row;
    send({ kind: "token-usage", name: step.name });
  };
  name.append(spread);
  const reset = el("button", { className: "step-reset", type: "button", textContent: edited ? "↺" : "", title: "원래 값으로", disabled: !edited });
  reset.onclick = () => {
    delete edits[step.name];
    refresh();
  };
  row.append(name, editor(step), reset);
  const px = (edits[step.name] ?? step.value).match(/^(\d*\.?\d+)px$/);
  if (/^--space-/.test(step.name) && px && !SCALE.includes(Number(px[1]))) row.append(el("div", { className: "warn", textContent: "간격 스케일에 없는 값이에요" }));
  return row;
}
// 전체 토큰: 단계별로 묶어 보고, 찾고, 바로 고친다.
const FAMILY = [["색 팔레트", /^--(gray|main|white)/], ["간격", /^--space-/], ["크기", /^--size-/], ["반경", /^--radius-/], ["글자 크기", /^--font-size-/], ["행간", /^--font-line-/], ["굵기·자간", /^--font-(weight|tracking)/], ["선 두께", /^--stroke-width-/], ["배경", /^--bg-/], ["글자색", /^--fg-/], ["선 색", /^--stroke-/], ["글자 스타일", /^--text-/], ["배치", /^--layout-/], ["버튼", /^--button-/], ["추천 칩", /^--chip-/], ["말풍선", /^--bubble-/], ["바텀시트", /^--sheet-/], ["다이얼로그", /^--dialog-/], ["토글", /^--toggle-/], ["상단바", /^--navigation-/]];
function renderTokens() {
  const box = $("#token-list");
  const query = $("#token-search").value.trim().toLowerCase();
  const onlyUnused = $("#token-unused").checked;
  const names = Object.keys(defs).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  box.replaceChildren();
  let shown = 0;
  const placed = new Set();
  for (const tier of ["기본값", "역할", "컴포넌트"]) {
    const inTier = names.filter((name) => tierOf(name) === tier);
    const head = el("div", { className: "tier-title", textContent: tier });
    let any = false;
    for (const [title, test] of [...FAMILY, ["기타", /./]]) {
      const rows = inTier.filter((name) => test.test(name) && !placed.has(name));
      rows.forEach((name) => placed.add(name));
      const match = rows.filter((name) => {
        const count = uses[name] ?? 0;
        if (onlyUnused && count) return false;
        return !query || name.includes(query) || (edits[name] ?? defs[name]).toLowerCase().includes(query);
      });
      if (!match.length) continue;
      if (!any) box.append(head);
      any = true;
      box.append(el("div", { className: "pick-group", textContent: `${title} · ${match.length}` }));
      for (const name of match) {
        shown += 1;
        const row = stepRow({ name, value: edits[name] ?? defs[name] });
        row.onmouseenter = () => send({ kind: "token-show", name });
        row.onmouseleave = () => send({ kind: "token-show", name: null });
        box.append(row);
      }
    }
  }
  $("#token-summary").textContent = `토큰 ${shown}개. 줄에 마우스를 올리면 이 화면에서 쓰는 곳이 초록색으로 보여요.`;
}
$("#token-search").oninput = renderTokens;
$("#token-unused").onchange = renderTokens;
// 「N곳」을 누르면 쓰이는 곳 목록이 열리고, 항목을 누르면 그 화면으로 가서 요소를 고른다.
let usageRow = null;
let places = {};
fetch("preview-usage.json").then((r) => r.json()).then((map) => (places = map)).catch(() => {});
function goTo(selector) {
  const at = places[selector];
  if (!modeOn) setMode(true);
  if (at.page !== page || at.modal) {
    page = at.page;
    document.querySelectorAll("[data-page]").forEach((other) => other.setAttribute("aria-pressed", other.dataset.page === page));
    pending = selector;
    openFrame(at.modal);
  } else send({ kind: "select-selector", selector });
}
function renderUsage({ name, tokens, places: rows }) {
  document.querySelectorAll(".usage-list").forEach((list) => list.remove());
  if (!usageRow?.isConnected) return;
  const list = el("div", { className: "usage-list" });
  const known = rows.filter((row) => places[row.selector]?.page);
  const unseen = rows.filter((row) => !places[row.selector]?.page);
  for (const token of tokens) {
    const item = el("button", { type: "button", className: "usage-item", textContent: `토큰 · ${token.replace(/^--/, "")}` });
    item.onclick = () => {
      document.querySelector('[data-tab="all"]').click();
      $("#token-search").value = token.replace(/^--/, "");
      renderTokens();
    };
    list.append(item);
  }
  for (const row of known) {
    const at = places[row.selector];
    const item = el("button", { type: "button", className: "usage-item" }, el("b", { textContent: at.label }), el("small", { textContent: `${PROP[row.prop] ?? row.prop} · ${at.where}` }));
    item.onclick = () => goTo(row.selector);
    list.append(item);
  }
  if (unseen.length) list.append(el("p", { className: "usage-note", textContent: `지금 화면 구성에서 보이지 않는 곳 ${unseen.length}개: 다른 규칙에 덮였거나 특정 상태에서만 나와요.` }));
  if (!tokens.length && !rows.length) list.append(el("p", { className: "usage-note", textContent: "쓰는 곳을 찾지 못했어요." }));
  usageRow.append(list);
}
const tierOf = (name) => (/^--(gray|main|white|space|size|radius|font-|stroke-width)/.test(name) ? "기본값" : /^--(button|chip|bubble|sheet|dialog|toggle|navigation|input)/.test(name) ? "컴포넌트" : "역할");
function renderPick() {
  const box = $("#pick");
  box.replaceChildren();
  if (!pick) return;
  box.append(el("div", { className: "pick-title", textContent: pick.label }), el("div", { className: "pick-size", textContent: `실제 크기 ${pick.width} × ${pick.height}` }));
  if (pick.hasParent) {
    const up = el("button", { type: "button", className: "pick-up", textContent: "↑ 감싸는 요소 선택" });
    up.onclick = () => send({ kind: "token-parent" });
    box.append(up);
  }
  if (!pick.rows.length) box.append(el("p", { className: "studio-note", textContent: "이 요소에는 연결된 토큰이 없어요. 「감싸는 요소 선택」을 눌러 보세요." }));
  for (const [title, test] of GROUPS) {
    const rows = pick.rows.filter((row) => test.test(row.prop));
    if (!rows.length) continue;
    box.append(el("div", { className: "pick-group", textContent: title }));
    // 같은 토큰을 쓰는 속성은 한 줄로: 너비·높이가 같은 size-44면 한 번만 보여 준다.
    const merged = new Map();
    for (const row of rows) {
      const key = row.tokens.map((token) => token.name).join();
      const held = merged.get(key);
      if (held) {
        held.names.push(PROP[row.prop] ?? row.prop);
        held.props.push(row.prop);
      }
      else merged.set(key, { ...row, names: [PROP[row.prop] ?? row.prop], props: [row.prop] });
    }
    for (const row of merged.values()) {
      const item = el("div", { className: "pick-row" }, el("div", { className: "pick-prop", textContent: row.names.join(" · ") }));
      item.firstChild.append(el("span", { textContent: row.computed }));
      item.onmouseenter = () => send({ kind: "area-show", props: row.props });
      item.onmouseleave = () => send({ kind: "area-show", props: null });
      for (const token of row.tokens) for (const step of token.steps) item.append(stepRow(step));
      box.append(item);
    }
  }
}

// 레이어: 화면 구조. 고르면 토큰 편집이 켜지고, 화면에서 고른 요소는 여기서 펼쳐진다.
let tree = { nodes: [], selected: -1 };
const collapsed = new Set(load("studio-collapsed", []));
function setMode(next) {
  modeOn = next;
  $("#mode").setAttribute("aria-pressed", modeOn);
  $("#mode").textContent = modeOn ? "토큰 편집 끄기" : "토큰 편집 켜기";
  send({ kind: "token-mode", on: modeOn });
}
function renderLayers() {
  const box = $("#layers");
  const top = box.scrollTop;
  const byId = new Map(tree.nodes.map((node) => [node.id, node]));
  const parents = new Set(tree.nodes.map((node) => node.parent));
  // 고른 요소가 보이도록 조상을 펼친다.
  for (let at = byId.get(tree.selected); at; at = byId.get(at.parent)) if (at.id !== tree.selected) collapsed.delete(at.path);
  const hidden = (node) => {
    for (let at = byId.get(node.parent); at; at = byId.get(at.parent)) if (collapsed.has(at.path)) return true;
    return false;
  };
  box.replaceChildren();
  let current = null;
  for (const node of tree.nodes) {
    if (hidden(node)) continue;
    const row = el("div", { className: `layer${node.id === tree.selected ? " selected" : ""}`, role: "treeitem" });
    row.style.paddingLeft = `${node.depth * 12 + 4}px`;
    const caret = el("button", { type: "button", className: "layer-caret", textContent: parents.has(node.id) ? (collapsed.has(node.path) ? "▸" : "▾") : "", ariaLabel: "펼치기" });
    caret.onclick = (event) => {
      event.stopPropagation();
      if (!parents.has(node.id)) return;
      collapsed.has(node.path) ? collapsed.delete(node.path) : collapsed.add(node.path);
      save("studio-collapsed", [...collapsed]);
      renderLayers();
    };
    row.append(caret, el("span", { textContent: node.name }));
    row.onclick = () => {
      if (!modeOn) setMode(true);
      send({ kind: "layer-select", id: node.id });
    };
    row.onmouseenter = () => {
      if (!modeOn) setMode(true);
      send({ kind: "layer-hover", id: node.id });
    };
    row.onmouseleave = () => send({ kind: "layer-hover", id: null });
    box.append(row);
    if (node.id === tree.selected) current = row;
  }
  box.scrollTop = top;
  current?.scrollIntoView({ block: "nearest" });
}

addEventListener("message", (event) => {
  if (event.origin !== location.origin) return;
  const data = event.data;
  if (data?.kind === "token-ready") {
    ({ defs, uses } = data);
    refresh();
    send({ kind: "token-mode", on: modeOn });
    if (pending) {
      send({ kind: "select-selector", selector: pending });
      pending = null;
    }
  }
  if (data?.kind === "token-usage") renderUsage(data);
  if (data?.kind === "select-missed") toast("지금 화면에서 찾지 못했어요");
  if (data?.kind === "token-pick") {
    pick = data;
    renderPick();
  }
  if (data?.kind === "token-tree") {
    tree = data;
    renderLayers();
  }
  if (data?.kind === "offscale-present") setPresent(data.ids);
});

$("#mode").onclick = () => setMode(!modeOn);
document.querySelectorAll("[data-tab]").forEach((tab) => {
  tab.onclick = () => {
    document.querySelectorAll("[data-tab]").forEach((other) => other.setAttribute("aria-selected", other === tab));
    $("#tab-tokens").hidden = tab.dataset.tab !== "tokens";
    $("#tab-all").hidden = tab.dataset.tab !== "all";
    $("#tab-offscale").hidden = tab.dataset.tab !== "offscale";
    if (tab.dataset.tab === "all") renderTokens();
  };
});
document.querySelectorAll("[data-variant]").forEach((button) => {
  button.onclick = () => {
    variant = button.dataset.variant;
    document.querySelectorAll("[data-variant]").forEach((other) => other.setAttribute("aria-pressed", other === button));
    document.querySelectorAll("[data-page], #mode, #offscale-toggle").forEach((control) => (control.disabled = variant !== "default"));
    openFrame();
  };
});
document.querySelectorAll("[data-page]").forEach((button) => {
  button.onclick = () => {
    page = button.dataset.page;
    document.querySelectorAll("[data-page]").forEach((other) => other.setAttribute("aria-pressed", other === button));
    openFrame();
  };
});
$("#reset-all").onclick = () => {
  for (const name of Object.keys(edits)) delete edits[name];
  refresh();
};
$("#export").onclick = async () => {
  await navigator.clipboard?.writeText(JSON.stringify(edits, null, 2));
  toast("변경 내용을 복사했어요");
};

// 적용: GitHub에 tokens.json을 커밋한다. 토큰은 이 브라우저의 localStorage에만 둔다.
const dialog = $("#apply-dialog");
$("#apply").onclick = () => {
  $("#apply-list").replaceChildren(...Object.entries(edits).map(([name, value]) => el("li", { textContent: `${name.replace(/^--/, "")}: ${defs[name]} → ${value}` })));
  $("#apply-error").textContent = "";
  $("#token-field").hidden = Boolean(localStorage.getItem("studio-github"));
  dialog.showModal();
};
$("#apply-cancel").onclick = () => dialog.close();
const encode = (text) => btoa(String.fromCharCode(...new TextEncoder().encode(text)));
const decode = (base64) => new TextDecoder().decode(Uint8Array.from(atob(base64.replace(/\s/g, "")), (c) => c.charCodeAt(0)));
async function commit(github) {
  const headers = { Authorization: `Bearer ${github}`, Accept: "application/vnd.github+json" };
  const url = `https://api.github.com/repos/${REPO}/contents/${FILE}`;
  const current = await fetch(`${url}?ref=main`, { headers });
  if (!current.ok) throw new Error(current.status === 401 ? "토큰이 올바르지 않아요." : `저장소를 읽지 못했어요 (${current.status}).`);
  const file = await current.json();
  const merged = { ...JSON.parse(decode(file.content)), ...edits };
  const count = Object.keys(edits).length;
  const written = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify({ message: `스튜디오: 토큰 ${count}개 적용`, content: encode(`${JSON.stringify(merged, null, 2)}\n`), sha: file.sha, branch: "main" }),
  });
  if (!written.ok) throw new Error(written.status === 403 || written.status === 404 ? "이 토큰에 쓰기 권한이 없어요." : `적용하지 못했어요 (${written.status}).`);
}
$("#apply-form").onsubmit = async (event) => {
  event.preventDefault();
  const github = localStorage.getItem("studio-github") || $("#github-token").value.trim();
  if (!github) {
    $("#apply-error").textContent = "GitHub 토큰을 입력해 주세요.";
    return;
  }
  $("#apply-confirm").disabled = true;
  try {
    await commit(github);
    localStorage.setItem("studio-github", github);
    Object.assign(defs, edits);
    send({ kind: "token-committed", edits: { ...edits } });
    for (const name of Object.keys(edits)) delete edits[name];
    refresh();
    dialog.close();
    toast("적용했어요. 사이트 반영까지 1~2분 걸려요");
  } catch (error) {
    localStorage.removeItem("studio-github");
    $("#token-field").hidden = false;
    $("#apply-error").textContent = error.message;
  }
  $("#apply-confirm").disabled = false;
};

// 스케일 밖 간격 체크리스트: 줄을 누르면 그 컴포넌트로 가고, 그 자리에서 값을 고친다.
const TITLES = [["visible", "화면에 보이는 값"], ["focus", "키보드 포커스 때만 보이는 값"], ["hidden", "지금은 안 보이는 값 (로딩 중이거나 다른 규칙에 덮임)"]];
function renderList() {
  const list = $("#offscale-list");
  list.replaceChildren();
  for (const [group, title] of TITLES) {
    const rows = items.filter((item) => item.group === group);
    list.append(el("div", { className: "offscale-group", textContent: `${title} · ${rows.length}` }));
    for (const item of rows) {
      const box = el("input", { type: "checkbox", checked: checked.has(item.id), ariaLabel: "확인함" });
      box.onclick = (event) => event.stopPropagation();
      box.onchange = () => {
        box.checked ? checked.add(item.id) : checked.delete(item.id);
        save("offscale-checked", [...checked]);
        renderList();
      };
      const where = item.screens.join(", ") || (group === "focus" ? "키보드로 이동할 때" : "표시되지 않음");
      const text = el("span", {}, el("b", { textContent: item.label }), el("small", { textContent: `${item.prop} · ${where}${group === "visible" && !present.has(item.id) ? " · 이 화면에 없음" : ""}` }), el("small", { textContent: `제안: ${item.lower} 또는 ${item.upper}` }));
      const open = openRow === item.id;
      const row = el("div", { className: `offscale-row${checked.has(item.id) ? " checked" : ""}${open ? " open" : ""}`, role: "button", tabIndex: 0 }, box, text, el("em", { textContent: `${item.value}px` }));
      const go = () => {
        openRow = open ? null : item.id;
        renderList();
        if (open) return;
        if (places[item.selector]?.page) goTo(item.selector);
        else toast("지금 화면 구성에서는 보이지 않는 값이에요. 값은 여기서 고칠 수 있어요");
      };
      row.onclick = go;
      row.onkeydown = (event) => {
        if (event.target === row && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          go();
        }
      };
      row.onmouseenter = () => ((focused = item.id), sendMarks());
      row.onmouseleave = () => ((focused = null), sendMarks());
      list.append(row);
      if (open && defs[item.token] !== undefined) {
        const edit = el("div", { className: "offscale-edit" }, stepRow({ name: item.token, value: edits[item.token] ?? defs[item.token] }));
        edit.onclick = (event) => event.stopPropagation();
        list.append(edit);
      }
    }
  }
  $("#offscale-count").textContent = `${items.filter((item) => checked.has(item.id)).length}/${items.length}`;
}
function setPresent(ids) {
  const next = new Set(ids);
  if ([...next].join() === [...present].join()) return;
  present = next;
  renderList();
}
$("#offscale-toggle").onclick = () => {
  marking = !marking;
  $("#offscale-toggle").setAttribute("aria-pressed", marking);
  sendMarks();
};
frame.addEventListener("load", () => setTimeout(sendMarks, 600));
fetch("preview-offscale.json").then((r) => r.json()).then((list) => {
  items = list;
  renderList();
});
setInterval(sendMarks, 2000);
refresh();
