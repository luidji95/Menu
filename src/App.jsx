import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ItemCard from "./ItemCard";

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "/img/foodiesfeed.com_bowl-of-ice-cream-with-chocolate.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    title: "diner double",
    category: "Lunch",
    price: 13.99,
    img: "/img/burger.jfif",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "Shakes",
    price: 6.99,
    img: "/img/dorucak.jfif",
    desc: `kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "Breakfast",
    price: 20.99,
    img: "/img/palacinka.jfif",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Lunch",
    price: 22.99,
    img: "/img/salatica.jfif",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Shakes",
    price: 18.99,
    img: "/img/spagete.jfif",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Breakfast",
    price: 8.99,
    img: "/img/tzimmes.webp",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  },
  {
    id: 8,
    title: "american classic",
    category: "Lunch",
    price: 12.99,
    img: "/images/foodiesfeed.com_hot-chocolate.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Shakes",
    price: 16.99,
    img: "/img/foodiesfeed.com_bowl-of-ice-cream-with-chocolate.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productMenu] = useState(menu);

  function changeCategory(category) {
    setSelectedCategory(category);
  }

  const filteredMenu =
    selectedCategory === "All"
      ? productMenu
      : productMenu.filter((item) => item.category === selectedCategory);

  const categories = [
    "All",
    ...new Set(productMenu.map((item) => item.category)),
  ];

  return (
    <div className="main">
      <header className="header">
        <h2 className="OurMenu">Our Menu</h2>
        <div className="singleLine"></div>
        <div className="food-category">
          {categories.map((category) => (
            <button
              key={category}
              className="foodcat"
              onClick={() => changeCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </header>
      <div className="content">
        {filteredMenu.map((item) => (
          <ItemCard
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
