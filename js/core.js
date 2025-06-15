export function render(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
