import firebase from 'firebase';
import { NPS } from '..';

export interface ServiceStatistics {
  totalOrders: number;
  totalDeliveries: number;
  averageTicketPrice: number;
  averageCourierFare: number;
  averageDistance: number;
}

export interface PlatformStatistics {
  placedOrders: number;
  food: ServiceStatistics;
  p2p: ServiceStatistics;
  couriers: {
    totalVerified: number;
    totalApproved: number;
  };
  positiveReviews: number;
  negativeReviews: number;
  nps: NPS;
  createdOn?: firebase.firestore.FieldValue;
}
