export interface OrderItem {
  product: {
    name: string;
    price: number; // in cents
    id?: string;
    externalId?: string;
  };
  quantity: number;
  notes?: string;
  complements?: OrderItemComplement[];
}

export interface OrderItemComplement {
  complementId: string;
  price: number;
}
