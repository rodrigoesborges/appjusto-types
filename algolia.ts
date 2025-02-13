import { BusinessSchedule } from '.';
import {
  BusinessAddress,
  BusinessStatistics,
  BusinessStatus,
  PreparationMode,
} from './business';
import { Timestamp } from './external/firebase';
import { ProductStatistics } from './menu/product';
import { LatLng2 } from './platform';

export interface AlgoliaConfig {
  appId: string;
  apiKey: string;
}
export interface BusinessAlgolia {
  objectID: string;
  _geoloc: LatLng2 | null;
  enabled: boolean;
  name?: string;
  code?: string;
  cnpj?: string;
  managerEmail?: string;
  situation: string;
  onboarding?: string;
  description?: string;
  status: BusinessStatus;
  businessAddress?: BusinessAddress;
  preparationModes?: PreparationMode[];
  cuisine?: string;
  deliveryRange?: number;
  statistics?: BusinessStatistics;
  averageDiscount?: number;
  schedules: BusinessSchedule;
  createdOn: Timestamp;
}

export interface CourierAlgolia {
  objectID: string;
  name?: string;
  code?: string;
  email: string;
  cpf?: string;
  phone?: string | null;
  situation: string;
  status: string;
  courierAddress: {
    cep?: string;
    address?: string;
    number?: string;
    additional?: string;
    city?: string;
    state?: string;
    _geoloc: LatLng2 | null;
  };
  createdOn: Timestamp;
}

export interface ConsumerAlgolia {
  objectID: string;
  name?: string;
  surname?: string;
  email: string;
  cpf?: string;
  code?: string;
  situation: string;
  totalOrders: number;
  createdOn: Timestamp;
}

export interface ProductAlgolia {
  objectID: string;
  _geoloc: LatLng2;
  name: string;
  description: string;
  classifications: string[];
  enabled: boolean;
  price: number;
  statistics: ProductStatistics;
  business: {
    id: string;
    name: string;
    statistics: BusinessStatistics;
    enabled: boolean;
  };
}

export interface FlaggedLocationsAlgolia {
  objectID: string;
  description: string;
  date_timestamp: number;
}
