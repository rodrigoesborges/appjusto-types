import firebase from 'firebase';
import { WithId } from '../platform';

export type OrderRejectionType = 'refuse' | 'cancel';

export type IssueType =
  | 'courier-refuse'
  | 'courier-cancel'
  | 'courier-delivery-problem'
  | 'consumer-cancel'
  | 'consumer-delivery-problem'
  | 'restaurant-cancel'
  | 'no-code-delivery';

export interface Issue {
  type: IssueType;
  title: string;
}

export interface OrderIssue {
  issue: WithId<Issue>;
  comment?: string;
  createdOn?: firebase.firestore.FieldValue;
}

export interface OrderRejection extends OrderIssue {
  courierId: string;
}
