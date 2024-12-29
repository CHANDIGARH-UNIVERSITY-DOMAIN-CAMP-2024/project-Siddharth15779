export interface UserArea {
  id: string;
  name: string;
  coordinates: string;
  position: [number, number];
}

export interface DeforestationArea {
  id: number;
  lat: number;
  lng: number;
  radius: number;
  severity: 'high' | 'medium' | 'low';
  area: number;
}