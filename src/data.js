import tent from "./images/tent.png";
import tent2 from "./images/tent2.png";
import palnik from "./images/palnik.png";
import plecak from "./images/plecak.png";
import garnki from "./images/garnki.png";
import lodowka from "./images/lodowka.png";
import jezioro from "./images/pobrane.jpg";
import nature from "./images/nature.jpg";
import nature2 from "./images/nature2.jpg";
import nature3 from "./images/nature3.jpg";
import nature4 from "./images/nature4.jpg";
import nature5 from "./images/nature5.jpg";
import nature6 from "./images/nature6.jpg";
import kwiat from "./images/flower.jpg";
import las from "./images/forrest.jpg";

export const items = [
  {
    img: jezioro,
    secondImg: nature,
    title: "Tańszy namiot",
    desc: "Kompaktowy, łatwy w montażu, przewiewny.",
    image: tent,
  },
  {
    img: nature2,
    secondImg: nature3,
    title: "Droższy namiot",
    desc: "Lekki, wytrzymały, wodoodporny.",
    image: tent2,
  },
  {
    img: nature4,
    secondImg: nature5,
    title: "Palnik gazowy",
    desc: "Kompaktowy, przenośny palnik do gotowania na świeżym powietrzu.",
    image: palnik,
  },
  {
    img: nature6,
    secondImg: kwiat,
    title: "Lodówka turystyczna",
    desc: "Przenośna, chłodzi i zamraża, energooszczędna. Kup że se. Test wielkośći tekstu dla wyruwnania szerokośći komponentu",
    image: lodowka,
  },
  {
    img: las,
    secondImg: nature,
    title: "Garnki turystyczne",
    desc: "Kompaktowe, lekkie, wytrzymałe.",
    image: garnki,
  },
  {
    img: nature3,
    secondImg: nature6,
    title: "Plecak turystyczny",
    desc: "Przestronny, ergonomiczny, wygodny.",
    image: plecak,
  },
];