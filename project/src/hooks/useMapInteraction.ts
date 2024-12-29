import { useState, useCallback } from 'react';
import { LatLngTuple } from 'leaflet';

export const useMapInteraction = () => {
  const [center, setCenter] = useState<LatLngTuple>([-3.4653, -62.2159]);
  const [zoom, setZoom] = useState(7);

  const focusArea = useCallback((coordinates: LatLngTuple) => {
    setCenter(coordinates);
    setZoom(12);
  }, []);

  return {
    center,
    zoom,
    focusArea,
  };
};