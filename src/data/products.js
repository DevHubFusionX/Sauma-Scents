export const products = [
  {
    id: 1,
    name: "Midnight Oud",
    price: 8500,
    image: "/src/assets/GxX0QICWgAAkv3m.jpg",
    category: "premium",
    badge: "popular"
  },
  {
    id: 2,
    name: "Citrus Bloom",
    price: 6500,
    image: "/src/assets/GxXzdP5XYAAtO4j.jpg",
    category: "fresh",
    badge: "new"
  },
  {
    id: 3,
    name: "Rose Garden",
    price: 7000,
    image: "/src/assets/GxXzxWIXsAE7uxb.jpg",
    category: "floral"
  },
  {
    id: 4,
    name: "Vanilla Dreams",
    price: 7500,
    image: "/src/assets/GZyskK3WgAABMrN.jpg",
    category: "sweet",
    badge: "popular"
  }
];

export const combos = [
  {
    id: 1,
    name: "Signature Trio",
    products: ["Midnight Oud", "Rose Garden", "Vanilla Dreams"],
    originalPrice: 23000,
    discountPrice: 18500,
    discount: "20%",
    image: "/src/assets/GZyskK4WgAAKlZy.jpg"
  },
  {
    id: 2,
    name: "Fresh Start Pack",
    products: ["Citrus Bloom", "Rose Garden"],
    originalPrice: 13500,
    discountPrice: 11500,
    discount: "15%",
    image: "/src/assets/GxX0D0aWoAADh-u.jpg"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Amina K.",
    text: "The scents are absolutely divine! I get compliments everywhere I go.",
    rating: 5
  },
  {
    id: 2,
    name: "David O.",
    text: "Quality fragrances at amazing prices. Sauma Scents is now my go-to brand.",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima A.",
    text: "Long-lasting and beautiful packaging. Highly recommend!",
    rating: 5
  }
];