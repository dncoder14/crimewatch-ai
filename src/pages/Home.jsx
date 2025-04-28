import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BiLineChart, BiMap, BiShield, BiLock } from 'react-icons/bi';
import PageTransition from '../components/ui/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>CrimeWatch AI - Real-Time Crime Tracking Powered by AI</title>
        <meta name="description" content="CrimeWatch AI uses artificial intelligence to track, analyze, and predict crime patterns in real-time, helping create safer communities." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-900/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">
                Real-Time Crime Tracking Powered by AI
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-xl">
                CrimeWatch AI leverages the power of artificial intelligence to track, analyze, and predict crime patterns, helping law enforcement create safer communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard" className="btn-primary">
                  Start Watching
                </Link>
                <Link to="/about" className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus:ring-white/30 border border-white/20">
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="glass-card p-6 backdrop-blur-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 border border-white/10 rounded-lg p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">Today's Incidents</h3>
                    <p className="text-3xl font-bold">47</p>
                    <span className="text-sm text-red-400">↑ 12% vs yesterday</span>
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-lg p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">Risk Level</h3>
                    <p className="text-3xl font-bold">Medium</p>
                    <div className="h-2 bg-white/20 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-warning-500 w-2/3 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white/10 border border-white/10 rounded-lg text-white">
                  <h3 className="font-semibold text-lg mb-2">AI Prediction</h3>
                  <p className="text-sm">Expected 15% increase in activity in Downtown area between 10PM-2AM tonight.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-dark-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Powerful Features
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              CrimeWatch AI combines cutting-edge technology with user-friendly interfaces to provide comprehensive crime analysis and prediction tools.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 inline-flex rounded-lg mb-4">
                <BiMap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Crime Map</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Visualize crime patterns across neighborhoods with detailed, interactive maps.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 p-3 inline-flex rounded-lg mb-4">
                <BiLineChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track trends and patterns with comprehensive statistical analysis tools.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 p-3 inline-flex rounded-lg mb-4">
                <BiShield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Predictive AI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Leverage machine learning to forecast potential crime hotspots and trends.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400 p-3 inline-flex rounded-lg mb-4">
                <BiLock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
              <p className="text-gray-600 dark:text-gray-400">
                End-to-end encryption ensures sensitive crime data remains secure and private.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary from-primary-800 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="mb-6" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Start Monitoring Your Community Today
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of communities using CrimeWatch AI to create safer neighborhoods through data-driven insights and proactive monitoring.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/dashboard" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Explore Dashboard
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;