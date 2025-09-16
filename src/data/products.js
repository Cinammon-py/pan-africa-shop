export const products = [
  {
    id: 1,
    name: "Nido Milk Powder",
    price: 52,
    oldPrice: 800000,
    image: "/assets/images/Products/Nido.jpeg",
    badge: "-30%",
    description: "Premium instant milk powder from Africa",
  },
  {
    id: 2,
    name: "Coconut Milk",
    price: 43.00,
    oldPrice: 700000,
    image: "/assets/images/Products/coconutmilk.jpeg",
    badge: "-50%",
    description: "Pure coconut milk from East African coconuts",
  },
  {
    id: 3,
    name: "Kinazi",
    price: 22,
    image: "/assets/images/Products/kinazi.jpeg",
    badge: "New",
    description: "Traditional cassava flour for authentic dishes",
  },
  {
    id: 4, 
    name: "Movit Jerry",
    price: 21,
    oldPrice: 800000,
    image: "/assets/images/Products/movitjelly.jpeg",
    description: "Natural hair treatment with African botanicals",
  }
];

export const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};