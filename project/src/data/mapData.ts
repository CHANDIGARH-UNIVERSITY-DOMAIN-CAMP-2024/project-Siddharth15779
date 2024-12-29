import { DeforestationArea } from '../types';

export const deforestationData: DeforestationArea[] = [
  { id: 1, lat: -3.4653, lng: -62.2159, radius: 20000, severity: 'high', area: 450 },
  { id: 2, lat: -4.1234, lng: -63.4567, radius: 15000, severity: 'medium', area: 280 },
  { id: 3, lat: -3.7890, lng: -61.8765, radius: 10000, severity: 'low', area: 150 },
  { id: 4, lat: -3.9876, lng: -62.5432, radius: 18000, severity: 'high', area: 380 },
  { id: 5, lat: -3.2468, lng: -61.9876, radius: 12000, severity: 'medium', area: 220 },
];

export const severityColors = {
  high: '#ef4444',
  medium: '#f97316',
  low: '#eab308',
};