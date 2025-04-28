import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiLayers, FiInfo } from 'react-icons/fi';
import CrimeHeatmap from '../../components/ui/CrimeHeatmap';
import { generateRandomCrimes } from '../../services/crimeData';

const CrimeMap = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    robbery: true,
    theft: true,
    assault: true,
    burglary: true
  });
  
  // Map center coordinates (Los Angeles)
  const mapCenter = [34.0522, -118.2437];
  
  useEffect(() => {
    // Generate random crime data
    const crimes = generateRandomCrimes(30, mapCenter[0], mapCenter[1]);
    setCrimeData(crimes);
    setIsLoading(false);
  }, []);
  
  const toggleFilter = (type) => {
    setFilters(prev => ({
      ...prev,
      [type.toLowerCase()]: !prev[type.toLowerCase()]
    }));
  };
  
  // Filter crimes based on selected types
  const filteredCrimes = crimeData.filter(crime => 
    filters[crime.type.toLowerCase()]
  );
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Crime Map</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Visualize crime incidents across different locations.
        </p>
      </div>
      
      {isLoading ? (
        <div className="h-[600px] flex items-center justify-center bg-gray-100 dark:bg-dark-700 rounded-xl">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading map data...</p>
          </div>
        </div>
      ) : (
        <div className="glass-card p-6">
          {/* Toolbar */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  filters.robbery 
                    ? 'bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-400' 
                    : 'bg-gray-100 text-gray-500 dark:bg-dark-700 dark:text-gray-400'
                }`}
                onClick={() => toggleFilter('robbery')}
              >
                Robbery
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  filters.theft 
                    ? 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400' 
                    : 'bg-gray-100 text-gray-500 dark:bg-dark-700 dark:text-gray-400'
                }`}
                onClick={() => toggleFilter('theft')}
              >
                Theft
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  filters.assault 
                    ? 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-400' 
                    : 'bg-gray-100 text-gray-500 dark:bg-dark-700 dark:text-gray-400'
                }`}
                onClick={() => toggleFilter('assault')}
              >
                Assault
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  filters.burglary 
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                    : 'bg-gray-100 text-gray-500 dark:bg-dark-700 dark:text-gray-400'
                }`}
                onClick={() => toggleFilter('burglary')}
              >
                Burglary
              </button>
            </div>
            
            <div className="ml-auto flex gap-2">
              <button className="p-2 bg-gray-100 dark:bg-dark-700 rounded-lg">
                <FiFilter className="text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 bg-gray-100 dark:bg-dark-700 rounded-lg">
                <FiLayers className="text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 bg-gray-100 dark:bg-dark-700 rounded-lg">
                <FiInfo className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
          
          {/* Map */}
          <CrimeHeatmap crimes={filteredCrimes} center={mapCenter} />
          
          {/* Map Legend */}
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-error-500 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Robbery</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-warning-500 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Theft</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-secondary-500 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Assault</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-primary-500 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Burglary</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-3">Most Active Areas</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Downtown</span>
              <span className="bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-400 px-2 py-0.5 rounded text-xs">High</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Westside</span>
              <span className="bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400 px-2 py-0.5 rounded text-xs">Medium</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Harbor Area</span>
              <span className="bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400 px-2 py-0.5 rounded text-xs">Medium</span>
            </li>
            <li className="flex justify-between items-center">
              <span>North District</span>
              <span className="bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400 px-2 py-0.5 rounded text-xs">Low</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-3">Recent Incidents</h3>
          <div className="space-y-3">
            {filteredCrimes.slice(0, 3).map((crime, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-dark-600 pb-2 last:border-0">
                <div className="flex items-start">
                  <div className={`mt-1 w-2 h-2 rounded-full mr-2 ${
                    crime.type === 'Robbery' ? 'bg-error-500' :
                    crime.type === 'Theft' ? 'bg-warning-500' :
                    crime.type === 'Assault' ? 'bg-secondary-500' :
                    'bg-primary-500'
                  }`}></div>
                  <div>
                    <p className="text-sm font-medium">{crime.type}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{crime.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-3">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 py-1 px-2 rounded text-xs mr-2">AI</span>
            Safety Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span>Avoid Downtown area after 10:00 PM</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span>Use well-lit parking areas in Westside</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span>Exercise caution at ATMs in high-risk zones</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span>Secure valuables when visiting Harbor Area</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CrimeMap;