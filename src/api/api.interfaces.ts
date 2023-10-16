export interface ListItem {
  uid: string;
  name: string;
  url: string;
}

export interface ApiResponseListResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: ListItem[];
}

export interface ApiResponseSingleResult<EntryProperties> {
  properties: EntryProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface ApiResponseSingleResponse<EntryProperties> {
  message: string;
  result: ApiResponseSingleResult<EntryProperties>;
}

export interface PersonApiProps {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
}

export interface PlanetApiProps {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
  url: string;
}

export interface VehicleApiProps {
  model: string;
  vehicle_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  created: string;
  edited: string;
  name: string;
  url: string;
}
