export type ProductCategory = 'flowers' | 'plants' | 'bouquets' | 'gifts';
export type OrderStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface ProductVariant {
  id: string;
  name: string;
  priceAdjustment: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  imageUrl: string;
  gallery?: string[];
  featured?: boolean;
  newArrival?: boolean;
  inStock: boolean;
  variants?: ProductVariant[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  selectedVariant?: ProductVariant;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export interface Order {
  orderNumber: string; // Format: KB-YYYYMMDD-XXXX
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
}