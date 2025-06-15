import { Home } from "./pages/home.js";
import { Radio, destroyRadioPlayer } from "./pages/radio.js";
import { About } from "./pages/about.js";
import { render } from "./core.js";

const routes = {
  home: Home,
  radio: Radio,
  about: About,
};

let currentPage = null;

export function initRouter() {
  window.addEventListener("hashchange", router);
  window.addEventListener("DOMContentLoaded", router);
}

function router() {
  const path = location.hash.replace("#", "") || "home";

  // Jika sebelumnya di radio, matikan audio
  if (currentPage === "radio") {
    destroyRadioPlayer();
  }

  const page = routes[path];
  if (page) {
    const html = page(); // string HTML
    render("app", html);
    currentPage = path;
  } else {
    render("app", "<h2>404 - Halaman tidak ditemukan</h2>");
    currentPage = null;
  }
}
