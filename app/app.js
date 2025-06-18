 export function h(tag, props = {}, ...children) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on") && typeof value === "function") {
      element.addEventListener(key.substring(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  }
for (const child of children) {
   if (child == null) continue; // ✅ Lewati null & undefined

   if (typeof child === "string" || typeof child === "number") {
     element.appendChild(document.createTextNode(child));
   } else if (child instanceof Node) {
     element.appendChild(child);
   }
   }
  return element;
}

export function render(vdom) {
  return vdom;
}
