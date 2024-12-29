import React, { useState } from 'react';
import { MapPin, Plus } from 'lucide-react';

interface UserAreaFormProps {
  onAdd: (name: string, coordinates: string) => void;
}

export const UserAreaForm: React.FC<UserAreaFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [coordinates, setCoordinates] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && coordinates) {
      onAdd(name, coordinates);
      setName('');
      setCoordinates('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Area Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          placeholder="Enter area name"
        />
      </div>
      <div>
        <label htmlFor="coordinates" className="block text-sm font-medium text-gray-700">Coordinates</label>
        <input
          type="text"
          id="coordinates"
          value={coordinates}
          onChange={(e) => setCoordinates(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          placeholder="Lat, Long (e.g., -3.4653, -62.2159)"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Area
      </button>
    </form>
  );
};