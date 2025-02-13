export interface OrderItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number; // in cents
    categoryName: string;
    externalId?: string;
  };
  quantity: number;
  notes?: string;
  complements?: OrderItemComplement[];
}

export interface OrderItemComplement {
  complementId: string;
  name: string;
  price: number;
  quantity: number;
  /**
   * @deprecated
   */
  groupName: string;
  group: {
    id: string;
    name: string;
  };
}
