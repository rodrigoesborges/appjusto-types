import { Timestamp } from '../../external/firebase';
import { Place } from '../../order/place';

export interface BusinessRecommendation {
  recommendedBusiness: Place;
  consumerId: string | null;
  instagram: string | null;
  phone: string | null;
  owner: string | null;
  createdOn: Timestamp;
}
