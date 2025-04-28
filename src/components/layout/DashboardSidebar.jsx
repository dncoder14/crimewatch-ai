import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiHomeAlt, BiMap, BiBarChartAlt2, BiCog } from 'react-icons/bi';

const DashboardSidebar = () => {
  return (
    <motion.aside 
      className="w-64 bg-white dark:bg-dark-700 shadow-lg rounded-lg overflow-hidden hidden md:block"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 bg-primary-600 dark:bg-primary-800">
        <h3 className="text-white font-semibold">Dashboard</h3>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" end className={({ isActive }) => 
              isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
            }>
              <BiHomeAlt size={20} />
              <span>Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/map" className={({ isActive }) => 
              isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
            }>
              <BiMap size={20} />
              <span>Crime Map</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/stats" className={({ isActive }) => 
              isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
            }>
              <BiBarChartAlt2 size={20} />
              <span>Crime Stats</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings" className={({ isActive }) => 
              isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
            }>
              <BiCog size={20} />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 mt-8 bg-gray-100 dark:bg-dark-600">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p className="font-semibold">AI Status</p>
          <div className="flex items-center mt-2">
            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-green-600 dark:text-green-400">Active</span>
          </div>
          <p className="mt-2 text-xs">Last updated: Today, 14:32</p>
        </div>
      </div>
    </motion.aside>
  );
};

export default DashboardSidebar;