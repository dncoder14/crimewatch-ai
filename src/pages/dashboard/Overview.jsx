import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BiMap, BiBarChartAlt2, BiCalendarAlt, BiAlarm } from 'react-icons/bi';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import StatCard from '../../components/ui/StatCard';
import { getCrimeStats, getAIPredictions, generateRandomCrimes } from '../../services/crimeData';

const Overview = () => {
  const [statsData, setStatsData] = useState(null);
  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      // Get crime statistics
      const stats = getCrimeStats();
      setStatsData(stats);
      
      // Get AI predictions
      const predictions = await getAIPredictions();
      setPredictionData(predictions);
      
      setIsLoading(false);
    };
    
    fetchData();
  }, []);
  
  // Monthly crime data for line chart
  const monthlyData = statsData?.monthlyCrimes.map((value, index) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      month: months[index],
      incidents: value
    };
  });

  // Crime by type data for pie chart
  const crimeTypeData = statsData?.crimeByType ? 
    Object.entries(statsData.crimeByType).map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value
    })) : [];
  
  // Colors for the pie chart
  const COLORS = ['#5c67ff', '#887aff', '#ec4889', '#12d054'];
  
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center min-h-[500px]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Dashboard Overview</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to your CrimeWatch AI dashboard. Here's what's happening today.
        </p>
      </div>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Incidents"
          value={statsData.totalCrimes.toLocaleString()}
          percentage="12%"
          trend="up"
          icon={<BiBarChartAlt2 size={24} />}
          color="primary"
        />
        
        <StatCard 
          title="Active Hotspots"
          value={statsData.crimeHotspots.length}
          percentage="5%"
          trend="down"
          icon={<BiMap size={24} />}
          color="secondary"
        />
        
        <StatCard 
          title="This Month"
          value={statsData.monthlyCrimes[new Date().getMonth()].toLocaleString()}
          percentage="3%"
          trend="up"
          icon={<BiCalendarAlt size={24} />}
          color="warning"
        />
        
        <StatCard 
          title="Last 24 Hours"
          value="47"
          percentage="8%"
          trend="up"
          icon={<BiAlarm size={24} />}
          color="error"
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Monthly Trend */}
        <div className="glass-card p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Monthly Crime Trend</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="incidents" 
                  stroke="#5c67ff" 
                  strokeWidth={2} 
                  dot={{ r: 2 }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Crime Distribution */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Crime Distribution</h2>
          <div className="h-72 flex justify-center items-center">
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
                <Tooltip formatter={(value) => [value, 'Incidents']} />
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
      </div>
      
      {/* AI Predictions */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-lg font-semibold mb-6">
          <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 py-1 px-2 rounded text-xs mr-2">AI</span>
          Predictions &amp; Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary-50 dark:bg-dark-700 rounded-lg p-4">
            <h3 className="font-medium mb-2">Predicted Trend</h3>
            <p className="text-2xl font-semibold text-error-600 dark:text-error-400">
              +{(predictionData.predictedCrimeIncrease * 100).toFixed(0)}%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Expected increase in next 30 days</p>
          </div>
          
          <div className="bg-primary-50 dark:bg-dark-700 rounded-lg p-4">
            <h3 className="font-medium mb-2">High-Risk Areas</h3>
            <ul className="space-y-1 text-sm">
              {predictionData.predictedHotspots.map((hotspot, index) => (
                <li key={index} className="flex justify-between">
                  <span>{hotspot.name}</span>
                  <span className={`${
                    hotspot.riskLevel === 'High' ? 'text-error-600 dark:text-error-400' : 
                    hotspot.riskLevel === 'Medium' ? 'text-warning-600 dark:text-warning-400' : 
                    'text-success-600 dark:text-success-400'
                  }`}>
                    {hotspot.riskLevel}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary-50 dark:bg-dark-700 rounded-lg p-4">
            <h3 className="font-medium mb-2">Recommended Actions</h3>
            <p className="text-sm text-gray-800 dark:text-gray-300">
              Increase patrols in <span className="font-semibold">Downtown</span> between 
              <span className="font-semibold"> 10:00 PM - 2:00 AM</span> to reduce predicted incidents.
            </p>
            <Link to="/dashboard/map" className="text-primary-600 dark:text-primary-400 text-sm inline-block mt-2 hover:underline">
              View on map →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/dashboard/map" className="glass-card p-6 flex flex-col transition-transform hover:scale-105">
          <div className="mb-4 text-primary-600 dark:text-primary-400">
            <BiMap size={30} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Crime Map</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-auto">
            Visualize crime hotspots across the city with our interactive map.
          </p>
          <div className="mt-4 text-primary-600 dark:text-primary-400 font-medium">
            Explore →
          </div>
        </Link>
        
        <Link to="/dashboard/stats" className="glass-card p-6 flex flex-col transition-transform hover:scale-105">
          <div className="mb-4 text-secondary-600 dark:text-secondary-400">
            <BiBarChartAlt2 size={30} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Crime Statistics</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-auto">
            Detailed analysis and trends of crime data across different categories.
          </p>
          <div className="mt-4 text-secondary-600 dark:text-secondary-400 font-medium">
            View Stats →
          </div>
        </Link>
        
        <Link to="/dashboard/settings" className="glass-card p-6 flex flex-col transition-transform hover:scale-105">
          <div className="mb-4 text-dark-600 dark:text-gray-300">
            <BiAlarm size={30} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Alert Settings</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-auto">
            Configure your notification preferences and alert thresholds.
          </p>
          <div className="mt-4 text-dark-600 dark:text-gray-300 font-medium">
            Configure →
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Overview;