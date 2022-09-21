import { FieldValue, GeoPoint } from 'firebase/firestore';
import { OrderArrivals, OrderType } from '.';
import {
  FareDetails,
  OrderDispatchingTimestamps,
  OrderStatus,
  OrderStatusTimestamps,
} from '..';

export interface OrderWarehouse {
  code: string;
  type: OrderType;
  status: OrderStatus;
  consumer: {
    id: string;
  };
  courier: {
    id: string | null;
    distanceToOrigin: number | null;
    phone: string | null;
    name: string | null;
  } | null;
  business: {
    id: string;
    document: string;
  } | null;
  fleet: {
    id: string;
  };
  fare: {
    business: FareDetails | null;
    courier: FareDetails | null;
    platform: FareDetails | null;
    total: number;
  } | null;
  route: {
    origin: GeoPoint;
    destination: GeoPoint;
    distance: number;
  } | null;
  cookingTime: number | null;
  tip: number | null;
  arrivals: OrderArrivals;
  issue: string | null;
  timestamps: OrderStatusTimestamps;
  dispatchingTimestamps: OrderDispatchingTimestamps;
  scheduledTo: FieldValue | null;
}

export interface OrderItemWarehouse {
  orderId: string;
  product: {
    id: string;
    name: string;
    price: number; // in cents
    categoryName: string;
  };
  quantity: number;
  notes: string | null;
  complements: string | null;
}
