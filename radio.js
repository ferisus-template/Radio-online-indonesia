const radios = [
  {
    name: "Mumpuni FM",
    url: "https://b.alhastream.com:5006/radio",
    image: "https://cdn-icons-png.flaticon.com/512/727/727240.png"
  },
  {
    name: "Sip FM",
    url: "https://a3.alhastream.com:1275/sipfm",
    image: "https://cdn-icons-png.flaticon.com/512/727/727245.png"
  },
  {
    name: "Prambors FM",
    url: "https://s1.cloudmu.id/listen/prambors_makassar/radio.mp3",
    image: "https://cdn-icons-png.flaticon.com/512/727/727239.png"
  }
  // Tambahkan radio lainnya sesuai kebutuhan
];

const playerContainer = document.getElementById("playerContainer");
const playerTitle = document.getElementById("playerTitle");
const playButton = document.getElementById("playButton");
const radioContainer = document.getElementById("radioContainer");

let currentAudio = new Audio();
let isPlaying = false;

radios.forEach((radio) => {
  const iconDiv = document.createElement("div");
  iconDiv.className = "radio-icon";

  const img = document.createElement("img");
  img.src = radio.image || "https://cdn-icons-png.flaticon.com/512/727/727239.png";
  iconDiv.appendChild(img);

  iconDiv.addEventListener("click", () => {
    currentAudio.pause();
    currentAudio = new Audio(radio.url);
    currentAudio.play();

    isPlaying = true;
    playerTitle.textContent = `🎧 Memutar: ${radio.name}`;
    playButton.textContent = "⏸️";
    playerContainer.style.display = "block";
    document.title = `🎵 Sedang memutar: ${radio.name}`;

  });

  radioContainer.appendChild(iconDiv);
});

playButton.addEventListener("click", () => {
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
