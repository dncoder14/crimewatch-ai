import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSave, FiBell, FiMap, FiSliders, FiLock } from 'react-icons/fi';

const Settings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    weekly: true,
    critical: true
  });
  
  const [mapSettings, setMapSettings] = useState({
    defaultLocation: 'Downtown',
    crimeHeatmap: true,
    predictions: true,
    historicalData: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleNotificationChange = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const handleMapSettingChange = (setting) => {
    setMapSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const handleLocationChange = (e) => {
    setMapSettings(prev => ({
      ...prev,
      defaultLocation: e.target.value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Customize your CrimeWatch AI experience and notification preferences.
        </p>
      </div>
      
      {formSubmitted && (
        <motion.div 
          className="mb-6 p-4 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Your settings have been saved successfully.
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit}>
        {/* Notification Settings */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FiBell size={20} className="text-primary-600 dark:text-primary-400" />
            <h2 className="text-lg font-semibold">Notification Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notificationSettings.email}
                  onChange={() => handleNotificationChange('email')}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Push Notifications</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receive alerts on your device</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notificationSettings.push}
                  onChange={() => handleNotificationChange('push')}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Weekly Reports</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receive weekly crime statistics summary</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notificationSettings.weekly}
                  onChange={() => handleNotificationChange('weekly')}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Critical Alerts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Immediate notifications for high-risk incidents</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notificationSettings.critical}
                  onChange={() => handleNotificationChange('critical')}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Map Settings */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FiMap size={20} className="text-primary-600 dark:text-primary-400" />
            <h2 className="text-lg font-semibold">Map Settings</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="defaultLocation" className="block font-medium mb-2">Default Location</label>
              <select 
                id="defaultLocation"
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700"
                value={mapSettings.defaultLocation}
                onChange={handleLocationChange}
              >
                <option value="Downtown">Downtown</option>
                <option value="Westside">Westside</option>
                <option value="Harbor Area">Harbor Area</option>
                <option value="North District">North District</option>
                <option value="Eastside">Eastside</option>
              </select>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Crime Heatmap</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Show crime density visualization</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={mapSettings.crimeHeatmap}
                    onChange={() => handleMapSettingChange('crimeHeatmap')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">AI Predictions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Display predicted crime hotspots</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={mapSettings.predictions}
                    onChange={() => handleMapSettingChange('predictions')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Historical Data</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Show historical crime patterns (past 5 years)</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={mapSettings.historicalData}
                    onChange={() => handleMapSettingChange('historicalData')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Privacy Settings */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FiLock size={20} className="text-primary-600 dark:text-primary-400" />
            <h2 className="text-lg font-semibold">Privacy Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Data Sharing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Control how your usage data is shared to improve CrimeWatch AI.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="analytics"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                      defaultChecked
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="analytics" className="font-medium">Anonymous Analytics</label>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Share anonymous usage data to improve services</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="research"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                      defaultChecked
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="research" className="font-medium">Research Contribution</label>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Allow data to be used for crime prevention research</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="personalization"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                      defaultChecked
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="personalization" className="font-medium">Personalization</label>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Enable personalized recommendations based on your location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Save Button */}
        <div className="flex justify-end">
          <button type="submit" className="btn-primary flex items-center gap-2">
            <FiSave />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Settings;