interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

type NavigationParamList = {
  Home: undefined;
  ProductDetail: { productId: string };
  Cart: undefined;
  Profile: undefined;
  Orders: undefined;
};

export type { User, AuthState, Product, CartItem, Order, ApiResponse, NavigationParamList };