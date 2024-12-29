import React, { useState } from 'react';
import { UserAreaForm } from './UserAreaForm';
import { UserAreaList } from './UserAreaList';
import { AreaAnalysis } from './AreaAnalysis';
import { UserArea } from '../../types';
import { findNearbyDeforestation, calculateDeforestationStats } from '../../utils/deforestationAnalysis';
import { deforestationData } from '../../data/mapData';

interface UserAreaPanelProps {
  onAreaSelect: (coordinates: [number, number]) => void;
}

export const UserAreaPanel: React.FC<UserAreaPanelProps> = ({ onAreaSelect }) => {
  const [areas, setAreas] = useState<UserArea[]>([]);
  const [selectedArea, setSelectedArea] = useState<UserArea | null>(null);

  const handleAddArea = (name: string, coordinates: string) => {
    const [lat, lng] = coordinates.split(',').map(c => parseFloat(c.trim()));
    const newArea: UserArea = {
      id: Date.now().toString(),
      name,
      coordinates: `${lat}, ${lng}`,
      position: [lat, lng],
    };
    setAreas([...areas, newArea]);
  };

  const handleDeleteArea = (id: string) => {
    setAreas(areas.filter(area => area.id !== id));
    if (selectedArea?.id === id) {
      setSelectedArea(null);
    }
  };

  const handleSelectArea = (area: UserArea) => {
    setSelectedArea(area);
    onAreaSelect(area.position);
  };

  const nearbyAreas = selectedArea
    ? findNearbyDeforestation(selectedArea.position[0], selectedArea.position[1], deforestationData)
    : [];

  const stats = calculateDeforestationStats(nearbyAreas);

  return (
    <div className="space-y-6">
      <UserAreaForm onAdd={handleAddArea} />
      
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Your Areas</h3>
        <UserAreaList
          areas={areas}
          selectedAreaId={selectedArea?.id}
          onDelete={handleDeleteArea}
          onSelect={handleSelectArea}
        />
      </div>

      {selectedArea && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Analysis for {selectedArea.name}
          </h3>
          <AreaAnalysis
            nearbyAreas={nearbyAreas}
            stats={stats}
          />
        </div>
      )}
    </div>
  );
};