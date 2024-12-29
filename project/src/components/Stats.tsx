import React from 'react';
import { TreesIcon, AlertTriangle, Ruler } from 'lucide-react';

const stats = [
  {
    label: 'Total Deforested Area',
    value: '880 km²',
    icon: TreesIcon,
    change: '+12.3%',
    changeType: 'negative',
  },
  {
    label: 'High Risk Areas',
    value: '3',
    icon: AlertTriangle,
    change: '+1',
    changeType: 'negative',
  },
  {
    label: 'Monitored Region',
    value: '12,450 km²',
    icon: Ruler,
    change: '0%',
    changeType: 'neutral',
  },
];

export const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-lg p-6 shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
            <stat.icon className="w-8 h-8 text-green-600" />
          </div>
          <div className={`mt-2 text-sm ${
            stat.changeType === 'negative' ? 'text-red-600' : 
            stat.changeType === 'positive' ? 'text-green-600' : 
            'text-gray-600'
          }`}>
            {stat.change} from last month
          </div>
        </div>
      ))}
    </div>
  );
};