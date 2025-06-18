import { h } from "../../app/app.js";

// export function Navbar() {
//   return h("nav", { class: "navbar" },
//     h("a", { href: "#home" }, "Beranda"),
//     h("a", { href: "#about" }, "Tentang")
//   );

  export function Navbar() {
    return h("nav", { class: "nav" },  // ← gunakan class "nav" sesuai CSS
      h("div", { class: "navbar-container" }, 
        h("a", { class: "navbar-logo", href: "#" }, "FeriRadio"),
        h("button", { class: "navbar-toggle" },
          h("span", { class: "bar" }),
          h("span", { class: "bar" }),
          h("span", { class: "bar" })
        ),
        h("ul", { class: "navbar-menu" },
          h("li", {}, h("a", { href: "#home",  }, "Home")),
           h("li", {}, h("a", { href: "#radio" }, "Radio")),
          h("li", {}, h("a", { href: "#about" }, "About"))
        )
      )
    );
}
