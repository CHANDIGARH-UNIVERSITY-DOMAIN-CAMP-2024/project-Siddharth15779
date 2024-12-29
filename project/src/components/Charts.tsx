import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const monthlyData = [
  { month: 'Jan', area: 65 },
  { month: 'Feb', area: 78 },
  { month: 'Mar', area: 90 },
  { month: 'Apr', area: 81 },
  { month: 'May', area: 95 },
  { month: 'Jun', area: 110 },
  { month: 'Jul', area: 129 },
  { month: 'Aug', area: 142 },
  { month: 'Sep', area: 135 },
  { month: 'Oct', area: 127 },
  { month: 'Nov', area: 120 },
  { month: 'Dec', area: 118 },
];

const severityData = [
  { severity: 'Low', count: 12 },
  { severity: 'Medium', count: 8 },
  { severity: 'High', count: 3 },
];

export const Charts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Monthly Deforestation Trend</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="area" stroke="#16a34a" fill="#86efac" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Deforestation by Severity</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={severityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="severity" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};