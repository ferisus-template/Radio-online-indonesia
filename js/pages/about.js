import { h } from "../../app/app.js";
export function AboutPage() {
  return h("div", {}, 
    h("h1", {}, "halaman about"),
    h("p", {}, "Aplikasi ini dibuat menggunakan Virtual DOM buatan sendiri.")
  );
}
