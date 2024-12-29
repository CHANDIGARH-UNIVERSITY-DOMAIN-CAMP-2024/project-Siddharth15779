import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface DeforestationArea {
  id: number;
  lat: number;
  lng: number;
  radius: number;
  severity: 'high' | 'medium' | 'low';
  area: number;
}

const deforestationData: DeforestationArea[] = [
  { id: 1, lat: -3.4653, lng: -62.2159, radius: 20000, severity: 'high', area: 450 },
  { id: 2, lat: -4.1234, lng: -63.4567, radius: 15000, severity: 'medium', area: 280 },
  { id: 3, lat: -3.7890, lng: -61.8765, radius: 10000, severity: 'low', area: 150 },
];

const severityColors = {
  high: '#ef4444',
  medium: '#f97316',
  low: '#eab308',
};

export const Map: React.FC = () => {
  return (
    <MapContainer
      center={[-3.4653, -62.2159]}
      zoom={7}
      className="w-full h-[500px] rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
    </MapContainer>
  );
};