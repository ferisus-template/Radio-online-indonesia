export function Navbar() {
  return `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">🎵 FeriRadio</div>
        <button class="navbar-toggle" id="navbarToggle">☰</button>
        <ul class="navbar-links" id="navbarLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#radio">Radio</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  `;
}

// tambahkan event listener toggle setelah elemen dipasang ke DOM
export function navbarToggleEvent() {
  const toggleBtn = document.getElementById("navbarToggle");
  const navLinks = document.getElementById("navbarLinks");

  toggleBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
