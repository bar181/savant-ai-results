import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PERFORMANCE_METRICS } from '../constants';

const ComparisonSection: React.FC = () => {
  return (
    <div className="w-full h-96 glass-panel rounded-xl p-4">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">Performance Topology</h3>
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PERFORMANCE_METRICS}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                
                <Radar
                    name="Baseline (No Agent)"
                    dataKey="baseline"
                    stroke="#94a3b8"
                    fill="#94a3b8"
                    fillOpacity={0.3}
                />
                <Radar
                    name="Agentic Swarm"
                    dataKey="swarm"
                    stroke="#38bdf8"
                    fill="#38bdf8"
                    fillOpacity={0.4}
                />
                <Radar
                    name="Savant AI (Meta-Cog)"
                    dataKey="savant"
                    stroke="#a855f7"
                    fill="#a855f7"
                    fillOpacity={0.5}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }}/>
            </RadarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default ComparisonSection;
