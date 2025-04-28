import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - Page Not Found | CrimeWatch AI</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold text-gray-300 dark:text-gray-700 mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link to="/" className="btn-primary">
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound;