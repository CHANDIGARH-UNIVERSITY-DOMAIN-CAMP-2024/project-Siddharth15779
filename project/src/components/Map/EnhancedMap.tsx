import React, { useState, useCallback } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { MapControls } from './MapControls';
import { MapLegend } from './MapLegend';
import { deforestationData, severityColors } from '../../data/mapData';
import { useMapInteraction } from '../../hooks/useMapInteraction';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  onAreaClick: (area: any) => void;
}

const MapController: React.FC<{
  center: LatLngTuple;
  zoom: number;
}> = ({ center, zoom }) => {
  const map = useMap();
  
  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
};

export const EnhancedMap: React.FC<MapProps> = ({ onAreaClick }) => {
  const [isSatellite, setIsSatellite] = useState(false);
  const { center, zoom, focusArea } = useMapInteraction();
  
  const handleZoomIn = useCallback(() => {
    const map = document.querySelector('.leaflet-container')?.__leaflet_instance__;
    if (map) map.zoomIn();
  }, []);

  const handleZoomOut = useCallback(() => {
    const map = document.querySelector('.leaflet-container')?.__leaflet_instance__;
    if (map) map.zoomOut();
  }, []);

  return (
    <div className="relative">
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-[600px] rounded-lg"
      >
        <MapController center={center} zoom={zoom} />
        <TileLayer
          url={isSatellite 
            ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
          attribution={isSatellite 
            ? '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            : '&copy; OpenStreetMap contributors'
          }
        />
        {deforestationData.map((area) => (
          <Circle
            key={area.id}
            center={[area.lat, area.lng]}
            radius={area.radius}
            pathOptions={{
              color: severityColors[area.severity],
              fillColor: severityColors[area.severity],
              fillOpacity: 0.4,
            }}
            eventHandlers={{
              click: () => onAreaClick(area),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">Deforested Area</h3>
                <p>Severity: {area.severity}</p>
                <p>Area: {area.area} km²</p>
              </div>
            </Popup>
          </Circle>
        ))}
        <MapLegend />
      </MapContainer>
      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onToggleSatellite={() => setIsSatellite(!isSatellite)}
        isSatellite={isSatellite}
      />
    </div>
  );
};