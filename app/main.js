import { render } from "./app.js";
import { Navbar } from "../js/Component/navbar.js";
import { Footer } from "../js/Component/footer.js";
import { HomePage } from "../js/pages/home.js";
import { AboutPage } from "../js/pages/about.js";
import { NotFoundPage } from "../js/pages/notfound.js";

// import { createPlayerCard } from "./player.js";
// import { setTitle } from "./setTitle.js";


// Simpan index card y
let selectedCardIndex = null;

const app = document.getElementById("root");

// function router() {
//   app.innerHTML = "";

//   const hash = window.location.hash || "#home";

//   app.appendChild(render(Navbar()));

//   // Tentukan isi halaman
//   if (hash === "#about") {
//     app.appendChild(render(AboutPage()));
//   } else {
//     app.appendChild(render(HomePage(handleCardClick,selectedCardIndex)));
//   }

//   app.appendChild(render(Footer()));
// }

// // Callback saat card diklik
// function handleCardClick(index) {
//   selectedCardIndex = index;
//   router(); // render ulang untuk tampilkan player
// }

// // Reset jika pindah halaman
// window.addEventListener("hashchange", () => {
//   selectedCardIndex = null;
//   router();
// });

function router() {
  app.innerHTML = "";

  const hash = window.location.hash || "#home";

  app.appendChild(render(Navbar()));

  // Tambahkan ini agar toggle & nav-link aktif bekerja
  setTimeout(() => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle?.addEventListener('click', () => {
      navbarToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll(".navbar-menu a");
    navLinks.forEach(link => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      }

      link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  });
  
  // Isi halaman
 if (hash === "#home" || hash === "") {
  app.appendChild(render(HomePage(handleCardClick, selectedCardIndex)));
} else if (hash === "#about") {
  app.appendChild(render(AboutPage()));
} else {
  app.appendChild(render(NotFoundPage()));
}


  app.appendChild(render(Footer()));
}
// Callback saat card diklik
function handleCardClick(index) {
  selectedCardIndex = index;
  router(); // render ulang untuk tampilkan player
}

// Reset jika pindah halaman
window.addEventListener("hashchange", () => {
  selectedCardIndex = null;
  router();
});

// Render awal
router();
