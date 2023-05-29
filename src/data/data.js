import heroimg from "../assets/img/hero.png";
import hightlightimg from "../assets/img/hightlightimg.png";
import sneakershoe from "../assets/img/sneaker.png";
// Video
import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";
// Sale
import psale1 from "../assets/img/nike-air-red.png";
import psale2 from "../assets/img/nike-adapt-bb.png";
import psale3 from "../assets/img/nike-adapt-bb-smart.png";
// Product
import product1 from "../assets/img/product1.png";
import product2 from "../assets/img/product2.png";
import product3 from "../assets/img/product3.png";
import product4 from "../assets/img/product4.png";
import product5 from "../assets/img/product5.png";
import product6 from "../assets/img/product6.png";
import product7 from "../assets/img/product7.png";
import product8 from "../assets/img/product8.png";
import product9 from "../assets/img/product9.png";
import product10 from "../assets/img/product10.png";
import product11 from "../assets/img/product11.png";
import product12 from "../assets/img/product12.png";
// Icon
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import youtube from "../assets/img/youtube.svg";
import messenger from "../assets/img/messenger.svg";


const heroSection = {
  title: "Porter Nike électrique",
  subtitle: "Sneakers 2.0",
  img: heroimg,
  btnText: "Voir le produit",
  videos: [
    { imgSrc: vcover1, clip: clip },
    { imgSrc: vcover2, clip: clip },
    { imgSrc: vcover3, clip: clip },
  ],
  socialLinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};


const popularSales = {
  title: "Les plus populaires",
  items: [
    {
      id: "0p0x1",
      title: "Nike BB 2.0",
      text: "Chaussure de course",
      rating: "4.9",
      btn: "Acheter",
      img: psale2,
      price: "199",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "Chaussure de course",
      rating: "4.5",
      btn: "Acheter",
      img: psale1,
      price: "99",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Intelligente Nike 2.0",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: psale3,
      price: "149",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};


const highlight = {
  heading: "Point forts",
  title: "NIKE AIR avec des choix illimités",
  text: "Notre objectif est de faire avancer le monde. Nous agissons en construisant une communauté, en protégeant notre planète et en améliorant l'accès au sport.",
  btn: "Voir plus",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};


const sneaker = {
  heading: "Prochainement",
  title: "NIKE SNEAKERS AIR",
  text: "Les chaussures Nike Sneakers Air, la basket qui donne une nouvelle tournure à ce que vous connaissez de mieux. Des superpositions cousues durablement, des finitions propres et la quantité parfaite de flash pour vous faire briller.",
  btn: "Voir plus",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};


const products = {
  title: "Tous nos produits",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike BB Rose",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "Chaussure de course",
      rating: "5",
      btn: "Acheter",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Meilleures histoires",
  news: [
    {
      title: "Jayson Tatum",
      text: "Modèle signé de Jordan Brands au cours des dernières années, Jayson Tatum lancera l'Air Jordan 37 cette saison avant d'atteindre potentiellement sa première sneaker signé avec Jumpman, dont il aurait récemment été en préparation sur son Twitter.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 mins",
      by: "John Deuf",
      btn: "En savoir plus"
    },
    {
      title: "Nike Zoom Freak 4",
      text: "Arrivant au bon moment pour l'automne, cette prochaine version du Zoom Freak 4. L'orange et le marron, deux incontournables de la saison, s'invitent sur toute la tige, habillant les parties non baignées de nuances de gris.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Beth Rave",
      btn: "En savoir plus"
    },
    {
      title: "Nike Air Max Plus",
      text: "La Nike Air Max Plus a connu la révélation de plusieurs coloris ces derniers mois. Et alors que nous entamons officiellement la saison d'automne, un ensemble supplémentaire a été ajouté au calendrier, y compris ce nouveau coloris gris et orange.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Beth Rave",
      btn: "En savoir plus"
    },
    {
      title: "Air Jordan Retro High",
      text: "Air Jordan Retro High, avec le blocage de couleur populaire et sa saveur originale de jaune. Le coloris a été révélé par le musicien Zach Myers, près de quatre ans plus tard, les fanatiques de Jordan obtiendront enfin leur chance.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Mois",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "John Atan",
      btn: "En savoir plus"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "Le coloris de la basket Bred de Zoom GT Cut 2 sera le premier à sortir ce vendredi, tandis que le coloris Sabrina Ionescus est prévu pour une date de sortie le 13 Octobre. En attendant, profitez des images officielles des deux coloris ci-dessous.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Mois",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "John Deuf",
      btn: "En savoir plus"
    },
    {
      title: "Puma annonce Breanna",
      text: "Pour la première fois depuis plus d'une décennie, une silhouette de basket est créée pour l'une des stars les plus brillantes de la NBA, la médaillée d'or olympique et la superstar de Seattle Storm, Breanna Stewart. Elle sera disponible ce vendredi.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Jours",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "John Deuf",
      btn: "En savoir plus"
    },
    {
      title: "Nike Air Force Orange",
      text: "Des bascules en dentelle aux métamorphoses inspirées de la Nike Air Force, elle a apporté un certain nombre de modifications uniques. Ici cependant, la marque descend de quelques crans, optant pour un coloris simple et basé principalement de Orange.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Jours",
      like: "4/5",
      by: "Perce Val",
      btn: "En savoir plus"
    },
    {
      title: "Hello Kitty",
      text: "Le monde de Sanrio est vaste et regorge de nombreux personnages emblématiques. Peu de membres de la famille, cependant, rivalisent avec l'immense influence de Hello Kitty, qui a joué la mascotte pour tout, des produits Pringles aux collaborations de baskets.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Jours",
      like: "4/5",
      by: "Perce Val",
      btn: "En savoir plus"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "L'esthétique nocturne vue ici est appliquée aux panneaux en cuir noir dégringolé de la tige et à la construction en maille perforée de la langue, tandis que la garniture et les parties de l'avant-pied offrent une intrigue supplémentaire à la palette assombrie.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Jours",
      like: "4/5",
      by: "Perce Val",
      btn: "En savoir plus"
    },
  ],
};


const footer = {
  titles: [ {title: "A propos"},{title: "Obtenir de l'aide"},{title: "Entreprise"} ],
  links: [
    [
      {link: "Nouvelles"},
      {link: "Carrières"},
      {link: "Investisseurs"},
      {link: "Notre but"},
      {link: "Durabilité"},
    ],
    [
      {link: "Statut de la commande"},
      {link: "Expédition & Livraison"},
      {link: "Options de paiment"},
      {link: "Solde de la carte-cadeau"},
      {link: "Contactez-nous"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Cartes cadeaux"},
      {link: "Promotions"},
      {link: "Trouver un magasin"},
      {link: "S'inscrire"},
      {link: "Journal Nike"},
      {link: "Envoyez vos commentaires"},
    ],
  ]
};

export { heroSection, footer, story, sneaker, highlight, products, popularSales };