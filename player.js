const radios = [
  {
    name: "Mumpuni FM",
    url: "https://b.alhastream.com:5006/radio"
  },
  {
    name: "Sip FM",
    url: "https://a3.alhastream.com:1275/sipfm"
  },
  {
    name: "ELEGAN RADIO, TUBA BARAT",
    url: "https://a3.alhastream.com:1265/eleganradio"
  },
  {
    name: "UTAMA FM, LAMPUNG TENGAH",
    url: "https://c1.alhastream.com:3230/suwarautamafm"
  },
    {
    name: "DIVA RADIO, LAMPUNG TIMUR",
    url: "https://a3.alhastream.com:1285/divaradio"
  },
   {
    name: "BRILIAN RADIO, BANDAR LAMPUNG",
    url: "https://b.alhastream.com:5009/radio"
  },
    {
    name: "SLENDRO FM, BANDAR JAYA",
    url: "https://asv.alhastream.com:1290/slendrofm"
  }
];

const container = document.getElementById("radioContainer");

radios.forEach((radio) => {
  const card = document.createElement("div");
  card.className = "radio-card";

  const name = document.createElement("div");
  name.className = "radio-name";
  name.textContent = radio.name;

  // Live bar dibuat tapi hidden default
  const liveBar = document.createElement("div");
  liveBar.className = "live-bar";
  liveBar.textContent = "🔴 LIVE";
  liveBar.style.display = "none"; // sembunyikan awalnya

  const button = document.createElement("button");
  button.className = "play-btn";
  button.innerHTML = "▶️";

  const status = document.createElement("div");
  status.className = "status";
  status.textContent = "Belum diputar";

  const audio = new Audio(radio.url);
  audio.preload = "none";
  let isPlaying = false;

  button.addEventListener("click", () => {
    // pause semua audio lain & sembunyikan live bar mereka
    document.querySelectorAll("audio").forEach(a => a.pause());
    document.querySelectorAll(".play-btn").forEach(b => b.innerHTML = "▶️");
    document.querySelectorAll(".status").forEach(s => s.textContent = "Dijeda");
    document.querySelectorAll(".live-bar").forEach(l => l.style.display = "none");

    if (!isPlaying) {
      audio.play().then(() => {
        button.innerHTML = "⏸️";
        status.textContent = "Sedang diputar...";
        liveBar.style.display = "block"; // tampilkan live bar saat diputar
        isPlaying = true;
      }).catch(err => {
        status.textContent = "Gagal memutar radio.";
        console.error(err);
        liveBar.style.display = "none"; // pastikan live bar tersembunyi saat error
      });
    } else {
      audio.pause();
      button.innerHTML = "▶️";
      status.textContent = "Dijeda";
      liveBar.style.display = "none"; // sembunyikan live bar saat dijeda
      isPlaying = false;
    }
  });

  card.appendChild(name);
  card.appendChild(liveBar);
  card.appendChild(button);
  card.appendChild(status);
  card.appendChild(audio);

  container.appendChild(card);
});
