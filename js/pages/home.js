import { h } from "../../app/app.js";
import { createPlayerCard } from "../../app/player.js";
import { radios } from "../../data/radios.js";


export function HomePage(onCardClick, selectedCardIndex) {
  
  // Buat card dari data radios
  // const cards = radios.map((radio, i) =>
  //   h("div", {
  //       class: `card ${i === selectedCardIndex ? "active" : ""}`,
  //       onclick: () => onCardClick(i)
  //     },
  //     h("img", { src: radio.image, alt: radio.name, class: "card-image" }),
  //     h("h3", {}, radio.name)
  //   )
  // );
  const cards = [
  h("div", { class: "card multiple bg-color-yellow" },
    h("h3", {class : "text-center"}, "Daftar Radio"),
    h("div", { class: "image-grid" },
      ...radios.map((radio, i) => 
        h("img", {
          src: radio.image,
          alt: radio.name,
          class: `radio-thumb ${i === selectedCardIndex ? "active" : ""}`,
          onclick: () => onCardClick(i)
        })
      )
    )
  )
];

  const playerCard = selectedCardIndex !== null ?
    createPlayerCard(radios[selectedCardIndex]) // kirim data radio, bukan index
    :
    null;
  
  return h("div", { class: "home" },
    // h("h1", { class: "text-white" }, "Selamat Datang di Beranda"),
    playerCard, 

    h("div", { class: "card-container" }, ...cards),
    

  );
}