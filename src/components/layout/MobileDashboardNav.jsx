import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt, BiMap, BiBarChartAlt2, BiCog, BiMenu } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

const MobileDashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <div className="md:hidden">
      <button 
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg z-20"
        onClick={toggleMenu}
        aria-label="Toggle dashboard navigation"
      >
        <BiMenu size={24} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div 
              className="absolute bottom-16 right-4 bg-white dark:bg-dark-700 rounded-lg shadow-xl overflow-hidden p-2 w-48"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav>
                <ul className="space-y-1">
                  <li>
                    <NavLink 
                      to="/dashboard" 
                      end
                      className={({ isActive }) => 
                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive 
                          ? 'bg-primary-100 dark:bg-dark-600 text-primary-700 dark:text-primary-400' 
                          : 'hover:bg-gray-100 dark:hover:bg-dark-600'}`
                      }
                      onClick={toggleMenu}
                    >
                      <BiHomeAlt size={20} />
                      <span>Overview</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/dashboard/map" 
                      className={({ isActive }) => 
                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive 
                          ? 'bg-primary-100 dark:bg-dark-600 text-primary-700 dark:text-primary-400' 
                          : 'hover:bg-gray-100 dark:hover:bg-dark-600'}`
                      }
                      onClick={toggleMenu}
                    >
                      <BiMap size={20} />
                      <span>Crime Map</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/dashboard/stats" 
                      className={({ isActive }) => 
                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive 
                          ? 'bg-primary-100 dark:bg-dark-600 text-primary-700 dark:text-primary-400' 
                          : 'hover:bg-gray-100 dark:hover:bg-dark-600'}`
                      }
                      onClick={toggleMenu}
                    >
                      <BiBarChartAlt2 size={20} />
                      <span>Crime Stats</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/dashboard/settings" 
                      className={({ isActive }) => 
                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive 
                          ? 'bg-primary-100 dark:bg-dark-600 text-primary-700 dark:text-primary-400' 
                          : 'hover:bg-gray-100 dark:hover:bg-dark-600'}`
                      }
                      onClick={toggleMenu}
                    >
                      <BiCog size={20} />
                      <span>Settings</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDashboardNav;