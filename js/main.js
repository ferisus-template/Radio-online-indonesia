import './core.js';
import { initRouter } from './router.js';
// import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();
document.addEventListener("click", (e) => {
  if (e.target.id === "navbarToggle") {
    document.getElementById("navbarLinks").classList.toggle("show");
  }
});
function updateActiveLink(route) {
  document.querySelectorAll(".navbar-links a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${route}`) {
      link.classList.add("active");
    }
  });
}
import { Navbar, navbarToggleEvent } from './components/Navbar.js';

document.getElementById("navbar").innerHTML = Navbar();
navbarToggleEvent(); // Panggil agar toggle bekerja

initRouter();