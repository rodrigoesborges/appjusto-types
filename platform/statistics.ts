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
}

export interface CityStatistics {
  consumers: number;
  couriers: number;
  businesses: number;
  placedOrders: number;
  totalFoodOrders: number;
  totalP2POrders: number;
  totalDeliveries: number;
  averageFoodTicketPrice: number;
  averageCourierFare: number;
}
