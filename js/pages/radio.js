import { setTitle } from "../core.js";
import { radios } from "../data/radios.js";

let currentAudio = null;
let isPlaying = false;

export function Radio() {
  setTitle("Daftar Radio Fm");

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
    currentAudio.src = "";
    currentAudio.load();
  }

  currentAudio = new Audio(radio.url);
  let hasPlayed = false;

  currentAudio.addEventListener("canplay", () => {
    currentAudio.play().then(() => {
      isPlaying = true;
      hasPlayed = true;

      playerTitle.textContent = `🎧 Sedang memutar: ${radio.name}`;
      playButton.textContent = "⏸️";
      playerContainer.style.display = "block";
      document.title = `🎵 ${radio.name}`;
    }).catch(err => {
      console.warn("⚠️ Gagal memutar radio (kemungkinan autoplay diblokir):", err);
      playerTitle.textContent = `🔇 ${radio.name} sedang offline`;
      playButton.textContent = "▶️";
      playerContainer.style.display = "block";
      isPlaying = false;
    });
  });

  currentAudio.addEventListener("error", () => {
    console.warn("🔇 Stream error:", radio.url);
    playerTitle.textContent = `🔇 ${radio.name} sedang offline`;
    playButton.textContent = "▶️";
    playerContainer.style.display = "block";
    isPlaying = false;
    hasPlayed = false;
  });

  // Timeout 5 detik kalau tidak responsif
  setTimeout(() => {
    if (!hasPlayed) {
      currentAudio.pause();
      playerTitle.textContent = `🔇 ${radio.name} tidak merespon`;
      playerContainer.style.display = "block";
      playButton.textContent = "▶️";
      isPlaying = false;
    }
  }, 5000);
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
