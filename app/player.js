import { h } from "./app.js";
import { globalAudio } from "./audio.js";

const ICON_PLAY = "fas fa-play fa-2x";
const ICON_PAUSE = "fas fa-pause fa-2x";

let isPlaying = false;

export function createPlayerCard(radio) {
  const statusText = h("p", { class: "status" }, "Checking...");

  // Buat ikon secara modular
  const icon = h("i", { class: ICON_PLAY });

  const button = h("button", {
    class: "player-btn",
    onclick: () => {
      if (isPlaying) {
        globalAudio.pause();
        isPlaying = false;
        icon.className = ICON_PLAY;
      } else {
        globalAudio.play();
        isPlaying = true;
        icon.className = ICON_PAUSE;
      }
    }
  }, icon);

  // Ganti stream jika beda URL
  if (globalAudio.src !== radio.url) {
    globalAudio.pause();
    globalAudio.src = radio.url;
    globalAudio.load();
    isPlaying = false;
    icon.className = ICON_PLAY;
    statusText.textContent = "Checking...";

    globalAudio.oncanplay = () => {
      statusText.textContent = "🟢 Live";
      globalAudio.play();
      isPlaying = true;
      icon.className = ICON_PAUSE;
    };

    globalAudio.onerror = () => {
      statusText.textContent = "🔴 Offline";
      button.disabled = true;
    };
  }

  return h("div", { class: "player-card" },
    h("img", { src: radio.image, alt: radio.name, class: "player-image" }),
    h("div", { class: "player-info" },
      statusText, 

      h("p", {}, radio.name),
    ),
    button
  );
}
