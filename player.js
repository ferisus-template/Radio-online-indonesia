const radios = [
  { name: "Mumpuni FM", url: "https://b.alhastream.com:5006/radio" },
  { name: "Sip FM", url: "https://a3.alhastream.com:1275/sipfm" },
  { name: "ELEGAN RADIO, TUBA BARAT", url: "https://a3.alhastream.com:1265/eleganradio" },
  { name: "UTAMA FM, LAMPUNG TENGAH", url: "https://c1.alhastream.com:3230/suwarautamafm" },
  { name: "DIVA RADIO, LAMPUNG TIMUR", url: "https://a3.alhastream.com:1285/divaradio" },
  { name: "BRILIAN RADIO, BANDAR LAMPUNG", url: "https://b.alhastream.com:5009/radio" },
  { name: "SLENDRO FM, BANDAR JAYA", url: "https://asv.alhastream.com:1290/slendrofm" },
  { name: "Prambors FM", url: "https://s1.cloudmu.id/listen/prambors_makassar/radio.mp3" }
];

const radioContainer = document.getElementById("radioContainer");
const playerContainer = document.getElementById("playerContainer");

let currentAudio = null;

radios.forEach((radio) => {
  const nameDiv = document.createElement("div");
  nameDiv.className = "radio-name";
  nameDiv.textContent = radio.name;

  nameDiv.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
    }

    playerContainer.innerHTML = ""; // Bersihkan sebelumnya

    const title = document.createElement("div");
    title.textContent = `▶️ Sedang Memutar: ${radio.name}`;
    title.style.fontWeight = "bold";
    title.style.marginBottom = "10px";

    const audio = new Audio(radio.url);
    audio.controls = true;
    audio.autoplay = true;

    playerContainer.appendChild(title);
    playerContainer.appendChild(audio);
    playerContainer.style.display = "block";

    currentAudio = audio;
  });

  radioContainer.appendChild(nameDiv);
});
