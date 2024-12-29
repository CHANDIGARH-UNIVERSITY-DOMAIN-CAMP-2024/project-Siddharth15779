import React from 'react';

const legendItems = [
  { color: '#ef4444', label: 'High Risk' },
  { color: '#f97316', label: 'Medium Risk' },
  { color: '#eab308', label: 'Low Risk' },
];

export const MapLegend: React.FC = () => {
  return (
    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md z-[1000]">
      <h4 className="text-sm font-medium mb-2">Risk Levels</h4>
      <div className="space-y-2">
        {legendItems.map(({ color, label }) => (
          <div key={label} className="flex items-center">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};