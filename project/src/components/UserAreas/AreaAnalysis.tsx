import React from 'react';
import { AlertTriangle, TreesIcon, Activity } from 'lucide-react';
import { DeforestationArea } from '../../types';

interface AreaAnalysisProps {
  nearbyAreas: DeforestationArea[];
  stats: {
    totalArea: number;
    severityCounts: Record<string, number>;
    count: number;
  };
}

export const AreaAnalysis: React.FC<AreaAnalysisProps> = ({ nearbyAreas, stats }) => {
  if (nearbyAreas.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No deforestation detected in this area
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <TreesIcon className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm font-medium">Total Area</span>
          </div>
          <p className="mt-2 text-2xl font-semibold">{stats.totalArea} km²</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-sm font-medium">Detected Areas</span>
          </div>
          <p className="mt-2 text-2xl font-semibold">{stats.count}</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center mb-3">
          <Activity className="h-5 w-5 text-blue-600 mr-2" />
          <span className="text-sm font-medium">Severity Breakdown</span>
        </div>
        <div className="space-y-2">
          {Object.entries(stats.severityCounts).map(([severity, count]) => (
            <div key={severity} className="flex justify-between items-center">
              <span className="capitalize">{severity}</span>
              <span className="font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};