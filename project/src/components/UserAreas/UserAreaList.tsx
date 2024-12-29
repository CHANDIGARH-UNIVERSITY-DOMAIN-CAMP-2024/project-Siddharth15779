import React from 'react';
import { Trash2, MapPin } from 'lucide-react';
import { UserArea } from '../../types';

interface UserAreaListProps {
  areas: UserArea[];
  onDelete: (id: string) => void;
  onSelect: (area: UserArea) => void;
}

export const UserAreaList: React.FC<UserAreaListProps> = ({ areas, onDelete, onSelect }) => {
  return (
    <div className="space-y-2">
      {areas.map((area) => (
        <div
          key={area.id}
          className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-green-600 mr-2" />
            <div>
              <h4 className="font-medium">{area.name}</h4>
              <p className="text-sm text-gray-500">{area.coordinates}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onSelect(area)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <MapPin className="h-4 w-4 text-blue-600" />
            </button>
            <button
              onClick={() => onDelete(area.id)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Trash2 className="h-4 w-4 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};