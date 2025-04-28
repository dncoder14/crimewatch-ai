import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon, color = 'primary', percentage, trend }) => {
  const getColorClass = () => {
    switch (color) {
      case 'primary': return 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400';
      case 'secondary': return 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400';
      case 'success': return 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400';
      case 'warning': return 'bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400';
      case 'error': return 'bg-error-100 dark:bg-error-900/30 text-error-700 dark:text-error-400';
      default: return 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400';
    }
  };

  const getTrendClass = () => {
    if (trend === 'up') return 'text-error-600 dark:text-error-400';
    if (trend === 'down') return 'text-success-600 dark:text-success-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  return (
    <motion.div 
      className="glass-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
          
          {percentage && (
            <div className="flex items-center mt-2">
              <span className={`text-sm ${getTrendClass()}`}>
                {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '•'} {percentage}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">vs. last month</span>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-full ${getColorClass()}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;