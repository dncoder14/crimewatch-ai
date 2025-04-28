import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About CrimeWatch AI | Our Mission and Technology</title>
        <meta name="description" content="Learn about CrimeWatch AI's mission to make communities safer through AI-powered crime prediction and analysis." />
      </Helmet>
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary-900 dark:bg-primary-950 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <motion.h1 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About CrimeWatch AI
              </motion.h1>
              <motion.p 
                className="text-xl text-primary-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Building safer communities through artificial intelligence and data-driven crime prevention.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-16 bg-white dark:bg-dark-800">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-dark-900 dark:text-white mb-6">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  CrimeWatch AI was founded in 2023 with a clear mission: to revolutionize community safety through cutting-edge technology and data science.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We believe that predictive analytics can play a crucial role in crime prevention, allowing law enforcement agencies to allocate resources more effectively and communities to stay informed about potential threats.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Our goal is to provide accessible, accurate, and actionable crime insights that empower communities to take control of their safety.
                </p>
              </motion.div>
              
              <motion.div
                className="glass-card p-8 rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Team working on crime analysis" 
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Technology Section */}
        <section className="py-16 bg-gray-50 dark:bg-dark-700">
          <div className="container-custom">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-dark-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Technology
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                CrimeWatch AI leverages multiple advanced technologies to provide accurate crime analysis and predictions.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our proprietary algorithms learn from historical crime data to identify patterns and predict future incidents with impressive accuracy.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We process millions of data points from various sources to create comprehensive crime profiles for different areas.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-3">Neural Networks</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced neural networks allow our system to continuously improve its predictive capabilities through self-learning.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white dark:bg-dark-800">
          <div className="container-custom">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-dark-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Team
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We're a diverse team of data scientists, security experts, and software engineers committed to making communities safer.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Sarah Johnson" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">CEO & Founder</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Former police analyst with 15 years of experience in crime pattern recognition.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="David Chen" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">David Chen</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">CTO</p>
                <p className="text-gray-600 dark:text-gray-400">
                  AI researcher with a PhD in machine learning from MIT.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Maya Rodriguez" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Maya Rodriguez</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">Data Science Lead</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Statistics expert specialized in predictive modeling for urban environments.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;