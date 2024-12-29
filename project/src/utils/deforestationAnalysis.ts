import { DeforestationArea } from '../types';

const SEARCH_RADIUS_KM = 50;

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function findNearbyDeforestation(
  lat: number,
  lng: number,
  data: DeforestationArea[]
): DeforestationArea[] {
  return data.filter((area) => {
    const distance = calculateDistance(lat, lng, area.lat, area.lng);
    return distance <= SEARCH_RADIUS_KM;
  });
}

export function calculateDeforestationStats(areas: DeforestationArea[]) {
  const totalArea = areas.reduce((sum, area) => sum + area.area, 0);
  const severityCounts = areas.reduce((acc, area) => {
    acc[area.severity] = (acc[area.severity] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalArea,
    severityCounts,
    count: areas.length,
  };
}