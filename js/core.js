export function render(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
  else console.error(`❌ Element with id="${id}" not found`);
}

export function setTitle(title) {
  document.title = title;
}
