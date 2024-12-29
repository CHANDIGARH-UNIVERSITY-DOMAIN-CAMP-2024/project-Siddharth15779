import React from 'react';
import { ZoomIn, ZoomOut, Layers } from 'lucide-react';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleSatellite: () => void;
  isSatellite: boolean;
}

export const MapControls: React.FC<MapControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onToggleSatellite,
  isSatellite,
}) => {
  return (
    <div className="absolute top-4 right-4 flex flex-col space-y-2 z-[1000]">
      <button
        onClick={onZoomIn}
        className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50"
        title="Zoom in"
      >
        <ZoomIn className="h-5 w-5" />
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50"
        title="Zoom out"
      >
        <ZoomOut className="h-5 w-5" />
      </button>
      <button
        onClick={onToggleSatellite}
        className={`p-2 rounded-lg shadow-md ${
          isSatellite ? 'bg-green-600 text-white' : 'bg-white hover:bg-gray-50'
        }`}
        title="Toggle satellite view"
      >
        <Layers className="h-5 w-5" />
      </button>
    </div>
  );
};