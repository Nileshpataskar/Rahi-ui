export interface Product {
  id: string;
  code: string;
  title: string;
  description: string;
  specifications?: Record<string, string>;
  category: string;
  image: string;
  carouselImages?: string[];
}

export interface ModernProductLayoutProps {
  products: Product[];
  selectedProduct?: Product;
  heroTitle?: string;
  heroDescription?: string;
  carouselImages?: string[];
  features?: string[];
  benefits?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}