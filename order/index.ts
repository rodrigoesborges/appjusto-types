import {
  OrderDispatchingTimestamps,
  OrderStatusTimestamps,
  OutsourceAccountType,
} from '..';
import { Timestamp } from '../external/firebase';

import { PayableWith } from '../payment/index';
import { IuguInvoiceStatus } from '../payment/iugu';
import { Fee } from '../platform/fees';
import { OrderConsumer } from './consumer';
import { OrderCourier } from './courier';
import { DispatchingState, DispatchingStatus } from './dispatching';
import { Fare } from './fare';
import { OrderFlag } from './flags';
import { OrderItem } from './item';
import { Place } from './place';
import { OrderStatus } from './status';
import { OrderTag } from './tags';

export type OrderType = 'p2p' | 'food';

export interface OrderRoute {
  distance?: number; // in meters
  duration?: number; // in seconds
  polyline?: string;
  issue: string | null;
}

export interface OrderArrivals {
  origin?: {
    estimate?: Timestamp | null;
    arrival?: Timestamp | null;
  };
  destination?: {
    initialEstimate?: Timestamp | null;
    estimate?: Timestamp | null;
    arrival?: Timestamp | null;
    arrivalLimit?: Timestamp | null;
  };
}
export interface Order {
  type: OrderType;
  status: OrderStatus;
  consumer: OrderConsumer;
  code?: string;
  // payment & fulfillment
  fare?: Fare;
  paymentMethod?: PayableWith;
  chargeStrategy: ChargeStrategy;
  fulfillment?: Fulfillment;
  scheduledTo?: Timestamp | null;
  confirmedScheduledTo?: Timestamp | null;
  // products
  business?: OrderBusiness | null;
  items?: OrderItem[];
  cookingTime?: number | null; // in seconds
  // places & route
  origin?: Place;
  destination?: Place | null;
  route?: OrderRoute | null;
  // estimates
  arrivals?: OrderArrivals;
  // delivery
  courier?: OrderCourier | null;
  dispatchingStatus: DispatchingStatus;
  dispatchingState: DispatchingState | null;
  dispatchingTimestamps: OrderDispatchingTimestamps;
  outsourcedBy?: OutsourceAccountType;
  tip?: {
    value: number; // in cents;
    paid?: number;
    /** @deprecated */
    processingFee?: number; // in cents
    processing?: {
      fee: Fee;
      value: number;
    };
    status?: IuguInvoiceStatus;
  };
  // etc
  additionalInfo?: string | null;
  staff?: OrderStaff | null;
  issue?: string | null;
  flags?: OrderFlag[];
  tags?: OrderTag[];
  // metadata
  timestamps: OrderStatusTimestamps;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}

export type Fulfillment = 'delivery' | 'take-away' | 'dine-in';
export type ChargeStrategy = 'single-invoice' | 'separated-invoices';

export interface OrderBusiness {
  id: string;
  name: string;
  cusine: string;
}

export interface OrderStaff {
  id: string;
  name?: string | null;
  email: string;
}
