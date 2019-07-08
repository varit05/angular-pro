export interface Product {
  id: number;
  price: number;
  name: string;
}

export interface Item {
  productId: number;
  quantity: number;
}
