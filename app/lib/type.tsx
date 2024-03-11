export type Product = {
    slug?: string;
    brand: string;
    name: string;
    image: string;
    description: string;
    price: string;
    rate: string;
    discount: string;
    sticker?: string;
    onClick?: () => void;
  }