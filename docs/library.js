// Shows the real components (library.json, captured from the preview) with the app's own CSS.
// Values come from tokens.json; unapplied studio edits in this browser are laid over them.
const box = document.querySelector("#library");
const note = document.querySelector("#library-note");
const hosts = [...document.querySelectorAll(".ds-project-modal")];
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
const finalValue = (value, all, depth = 0) => (value ?? "").replace(/var\((--[\w-]+)\)/g, (_, name) => (depth > 8 ? "" : finalValue(all[name], all, depth + 1)));
function paint() {
  const edits = readEdits();
  const all = { ...tokens, ...edits };
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
function stage({ label, html, width }) {
  const host = el("div", { className: "lib-host" });
  const root = host.attachShadow({ mode: "open" });
  root.append(el("link", { rel: "stylesheet", href: "preview/assets/library.css" }));
  const inner = el("div", { className: "lib-stage", innerHTML: html });
  inner.style.width = `${width}px`;
  root.append(inner);
  for (const type of ["click", "submit"]) root.addEventListener(type, (event) => event.preventDefault(), true);
  hosts.push(host);
  return el("figure", { className: "lib-state" }, el("figcaption", { textContent: label }), host);
}
function itemView(item) {
  const own = item.tokens.filter((name) => COMPONENT.test(name));
  const rest = item.tokens.filter((name) => !COMPONENT.test(name));
  const title = el("h4", { textContent: item.name }, el("span", { className: "lib-status", textContent: STATUS[item.status] }));
  const view = el("div", { className: "lib-item", id: `lib-${item.id}` }, title, el("p", { textContent: item.note }));
  view.append(el("div", { className: "lib-states" }, ...item.states.map(stage)));
  if (item.studio) view.append(el("a", { className: "lib-go", href: `studio.html?go=${encodeURIComponent(item.studio)}`, textContent: "스튜디오에서 수정 ↗" }));
  if (own.length) view.append(el("details", { className: "lib-more" }, el("summary", { textContent: `컴포넌트 토큰 ${own.length}개` }), tokenTable(own)));
  if (rest.length) view.append(el("details", { className: "lib-more" }, el("summary", { textContent: `역할·기본 토큰 ${rest.length}개` }), tokenTable(rest)));
  return view;
}
Promise.all([fetch(`tokens.json?t=${Date.now()}`).then((r) => r.json()), fetch("library.json").then((r) => r.json())]).then(([values, { groups }]) => {
  tokens = values;
  for (const group of groups) box.append(el("h3", { textContent: group.name }), ...group.items.map(itemView));
  paint();
  if (location.hash.startsWith("#lib-")) document.querySelector(location.hash)?.scrollIntoView();
});
addEventListener("storage", (event) => {
  if (event.key === "studio-edits") paint();
});
