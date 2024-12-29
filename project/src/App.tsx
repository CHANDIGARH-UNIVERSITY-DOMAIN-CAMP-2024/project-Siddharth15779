import React, { useState } from 'react';
import { EnhancedMap } from './components/Map/EnhancedMap';
import { Stats } from './components/Stats';
import { Charts } from './components/Charts';
import { UserAreaPanel } from './components/UserAreas/UserAreaPanel';
import { TreesIcon } from 'lucide-react';
import { DeforestationArea } from './types';

function App() {
  const [selectedArea, setSelectedArea] = useState<DeforestationArea | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <TreesIcon className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Deforestation Detection System</h1>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Stats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Satellite Monitoring</h2>
              <EnhancedMap onAreaClick={setSelectedArea} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Monitored Areas</h2>
            <UserAreaPanel
              onAreaSelect={(coordinates) => {
                // Handle area selection
              }}
            />
          </div>
        </div>

        <Charts />
      </main>
    </div>
  );
}

export default App;