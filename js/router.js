import { render } from './core.js';
import { Home } from './pages/home.js';
import { Radio } from './pages/radio.js';
import { About } from './pages/about.js';

const routes = {
  home: Home,
  radio: Radio,
  about: About,
};

export function initRouter() {
  window.addEventListener("hashchange", router);
  window.addEventListener("DOMContentLoaded", router);
}

function router() {
  const path = location.hash.replace("#", "") || "home";
  const page = routes[path];
  if (page) {
    render("app", page());
  } else {
    render("app", "<h2>404 - Halaman tidak ditemukan</h2>");
  }
}
