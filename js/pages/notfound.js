// ../js/pages/notfound.js
import { h } from "../../app/app.js";

export function NotFoundPage() {
  return h("div", { class: "not-found" },
    h("h1", {}, "404 - Halaman Tidak Ditemukan"),
    h("p", {}, "Maaf, halaman yang Anda cari tidak tersedia.")
  );
}
