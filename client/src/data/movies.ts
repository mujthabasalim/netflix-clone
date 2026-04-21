import card_img1 from "../../public/cards/card1.jpg";
import card_img2 from "../../public/cards/card2.jpg";
import card_img3 from "../../public/cards/card3.jpg";
import card_img4 from "../../public/cards/card4.jpg";
import card_img5 from "../../public/cards/card5.jpg";
import card_img6 from "../../public/cards/card6.jpg";
import card_img7 from "../../public/cards/card7.jpg";
import card_img8 from "../../public/cards/card8.jpg";
import card_img9 from "../../public/cards/card9.jpg";
import card_img10 from "../../public/cards/card10.jpg";
import card_img11 from "../../public/cards/card11.jpg";
import card_img12 from "../../public/cards/card12.jpg";
import card_img13 from "../../public/cards/card13.jpg";
import card_img14 from "../../public/cards/card14.jpg";

type Card = {
  id: string;
  image: string;
  name: string;
};

type Cards = Card[];

export const movies: Cards = [
  {
    id: crypto.randomUUID(),
    image: card_img1,
    name: "Kung Fu Panda",
  },
  {
    id: crypto.randomUUID(),
    image: card_img2,
    name: "Squid Game",
  },
  {
    id: crypto.randomUUID(),
    image: card_img3,
    name: "Squid Challenge",
  },
  {
    id: crypto.randomUUID(),
    image: card_img4,
    name: "Jawan",
  },
  {
    id: crypto.randomUUID(),
    image: card_img5,
    name: "The Ghost",
  },
  {
    id: crypto.randomUUID(),
    image: card_img6,
    name: "Lucifer",
  },
  {
    id: crypto.randomUUID(),
    image: card_img7,
    name: "The Railway MEN",
  },
  {
    id: crypto.randomUUID(),
    image: card_img8,
    name: "Young Sheldon",
  },
  {
    id: crypto.randomUUID(),
    image: card_img9,
    name: "Sacred Games",
  },
  {
    id: crypto.randomUUID(),
    image: card_img10,
    name: "Adipurush",
  },
  {
    id: crypto.randomUUID(),
    image: card_img11,
    name: "Sukhee",
  },
  {
    id: crypto.randomUUID(),
    image: card_img12,
    name: "Mission Ganj",
  },
  {
    id: crypto.randomUUID(),
    image: card_img13,
    name: "Leo",
  },
  {
    id: crypto.randomUUID(),
    image: card_img14,
    name: "All of Us Are Dead",
  },
];
