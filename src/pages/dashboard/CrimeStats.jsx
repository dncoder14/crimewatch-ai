import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { getCrimeStats } from '../../services/crimeData';

const CrimeStats = () => {
  const [statsData, setStatsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('month'); // month, quarter, year
  
  useEffect(() => {
    // Get crime statistics
    const stats = getCrimeStats();
    setStatsData(stats);
    setIsLoading(false);
  }, []);
  
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center min-h-[500px]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading statistics...</p>
        </div>
      </div>
    );
  }
  
  // Prepare data for charts
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Monthly crime data
  const monthlyData = statsData.monthlyCrimes.map((value, index) => ({
    month: months[index],
    incidents: value
  }));
  
  // Crime by type data
  const crimeTypeData = Object.entries(statsData.crimeByType).map(([type, count]) => ({
    name: type.charAt(0).toUpperCase() + type.slice(1),
    value: count
  }));
  
  // Crime by time data
  const crimeTimeData = Object.entries(statsData.crimeByTime).map(([time, count]) => ({
    name: time.charAt(0).toUpperCase() + time.slice(1),
    value: count
  }));
  
  // Crime hotspots data
  const hotspotData = statsData.crimeHotspots.map(spot => ({
    name: spot.name,
    incidents: spot.count
  }));
  
  // Colors for charts
  const COLORS = ['#5c67ff', '#887aff', '#ec4889', '#12d054'];
  const TIME_COLORS = ['#12d054', '#5c67ff', '#ec4889', '#F97316'];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Crime Statistics</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed analysis of crime data across different categories and timeframes.
        </p>
      </div>
      
      {/* Time Range Selector */}
      <div className="flex mb-8">
        <div className="glass-card p-1 inline-flex">
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === 'month' 
                ? 'bg-primary-600 text-white' 
                : 'hover:bg-gray-100 dark:hover:bg-dark-700'
            }`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === 'quarter' 
                ? 'bg-primary-600 text-white' 
                : 'hover:bg-gray-100 dark:hover:bg-dark-700'
            }`}
            onClick={() => setTimeRange('quarter')}
          >
            Quarter
          </button>
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === 'year' 
                ? 'bg-primary-600 text-white' 
                : 'hover:bg-gray-100 dark:hover:bg-dark-700'
            }`}
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
      </div>
      
      {/* Monthly Trend Chart */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Crime Incidents Over Time</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={monthlyData}
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="incidents" 
                stroke="#5c67ff" 
                strokeWidth={3}
                dot={{ stroke: '#5c67ff', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#5c67ff', strokeWidth: 2, fill: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Distribution Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Crime Types */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Crime Type Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={crimeTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {crimeTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} incidents`, 'Count']}
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {crimeTypeData.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Crime By Time of Day */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Incidents by Time of Day</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={crimeTimeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {crimeTimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={TIME_COLORS[index % TIME_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} incidents`, 'Count']}
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {crimeTimeData.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: TIME_COLORS[index % TIME_COLORS.length] }}
                ></div>
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hotspots Chart */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Crime Hotspots</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={hotspotData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Bar 
                dataKey="incidents" 
                fill="#5c67ff" 
                radius={[0, 4, 4, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Key Insights */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold mb-4">
          <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 py-1 px-2 rounded text-xs mr-2">AI</span>
          Key Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary-50 dark:bg-dark-700 rounded-lg p-4">
            <h3 className="font-medium mb-3">Major Patterns</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary-600 dark:text-primary-400">•</span>
                <span>Theft incidents peak during evening hours (6-10PM)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 dark:text-primary-400">•</span>
                <span>Downtown has highest concentration of violent crime</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 dark:text-primary-400">•</span>
                <span>67% of burglaries occur in residential areas</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary-50 dark:bg-dark-700 rounded-lg p-4">
            <h3 className="font-medium mb-3">Trend Analysis</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-error-600 dark:text-error-400">↑</span>
                <span>12% increase in theft from vehicles since last quarter</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success-600 dark:text-success-400">↓</span>
                <span>8% decrease in assaults in Harbor Area after increased patrols</span>
              </li>
              <li className="flex gap-2">
                <span className="text-error-600 dark:text-error-400">↑</span>
                <span>Westside showing 15% increase in property crimes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CrimeStats;