import { setTitle } from "../core.js";
import { radios } from "../data/radios.js";

let currentAudio = null;
let isPlaying = false;

export function Radio() {
  setTitle("Radio Player - MyFramework");

  // Kembalikan HTML string
  const html = `

    <div class="full-center">
  <h1>Daftar Radio</h1>
</div>

      <div id="playerContainer" style="display: none; margin-top: 20px;">
      <div id="playerTitle">🎧 Tidak ada radio yang diputar</div>
      <button id="playButton">▶️</button>
    </div>
    <div id="radioContainer" class="radio-grid"></div>
  
  `;

  // Tunggu sampai render selesai, lalu inisialisasi player
  setTimeout(setupPlayer, 0);

  return html;
}

function setupPlayer() {
  const radioContainer = document.getElementById("radioContainer");
  const playerTitle = document.getElementById("playerTitle");
  const playButton = document.getElementById("playButton");
  const playerContainer = document.getElementById("playerContainer");

  if (!radioContainer || !playerTitle || !playButton || !playerContainer) return;

  radioContainer.innerHTML = ""; // clear sebelumnya jika ada

  radios.forEach((radio) => {
    const iconDiv = document.createElement("div");
    iconDiv.className = "radio-icon";
    iconDiv.style.cursor = "pointer";

    const img = document.createElement("img");
    img.src = radio.image;
    img.alt = radio.name;
    img.style.width = "100px";
    img.style.borderRadius = "12px";

    iconDiv.appendChild(img);

    iconDiv.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = ""; // penting untuk menghentikan total
    currentAudio.load();   // reset state audio
  }

  currentAudio = new Audio(radio.url);

  currentAudio.addEventListener("canplay", () => {
    currentAudio.play().catch(err => {
      console.error("Gagal memutar radio:", err);
    });

    isPlaying = true;
    playerTitle.textContent = `🎧 Memutar: ${radio.name}`;
    playButton.textContent = "⏸️";
    playerContainer.style.display = "block";
    document.title = `🎵 ${radio.name}`;
  });

  currentAudio.addEventListener("error", () => {
    console.error("Gagal memuat stream:", radio.url);
    playerTitle.textContent = `🚫 Gagal memuat: ${radio.name}`;
    playerContainer.style.display = "block";
  });
});


    radioContainer.appendChild(iconDiv);
  });

  playButton.addEventListener("click", () => {
    if (!currentAudio) return;
    if (isPlaying) {
      currentAudio.pause();
      playButton.textContent = "▶️";
      isPlaying = false;
    } else {
      currentAudio.play();
      playButton.textContent = "⏸️";
      isPlaying = true;
    }
  });
}

// Fungsi cleanup saat keluar dari halaman
export function destroyRadioPlayer() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
  }
}
