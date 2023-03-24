import { Restaurant } from '../schemas/restaurant.schemas';

export interface IRestaurantServicePostAndGetRestaurant {
  body: string;
}
export interface IRestaurantServiceGetRestaurant {
  body: string;
}

export interface IRestaurantServiceGetDetails {
  place_id: string;
}

export interface IRestaurantServiceSaveNextPage {
  nextPageToken: string;
  section: string;
}

export interface IRestaurantServiceGetDetailsReturn {
  phoneNumber: string | null;
  openingDays: string[] | null;
}
export interface IRestaurantServiceDeleteCollection {
  body: string;
}
