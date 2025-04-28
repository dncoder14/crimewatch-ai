import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import PageTransition from '../components/ui/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <PageTransition>
      <Helmet>
        <title>Contact CrimeWatch AI | Get in Touch</title>
        <meta name="description" content="Contact the CrimeWatch AI team for inquiries, support, or partnership opportunities." />
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
                Contact Us
              </motion.h1>
              <motion.p 
                className="text-xl text-primary-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Have questions or want to learn more about our solutions? We're here to help.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-white dark:bg-dark-800">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-dark-900 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  We'd love to hear from you. Whether you have a question about our services, need help getting started, or want to explore partnership opportunities, our team is ready to assist.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 dark:text-white mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">contact@crimewatchai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 dark:text-white mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+1 (800) 555-0123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 dark:text-white mb-1">Office</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Tech Boulevard<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="glass-card p-8">
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  
                  {submitSuccess ? (
                    <motion.div 
                      className="bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 p-4 rounded-lg mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                    >
                      Message sent successfully! We'll be in touch soon.
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700"
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700"
                          required
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn-primary w-full flex justify-center items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
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
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Find answers to the most common questions about CrimeWatch AI.
              </motion.p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="glass-card p-6 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-2">How accurate are the crime predictions?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI model has achieved an average accuracy rate of 87% in predicting crime hotspots across major urban areas, based on historical data validation.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2">Is my data safe with CrimeWatch AI?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes. We implement advanced encryption and strict data handling protocols. All personal information is anonymized, and we never share your data with third parties without consent.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-2">Can I integrate CrimeWatch AI with existing systems?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Absolutely. We provide APIs and integration tools to connect with most law enforcement and community safety systems. Our team can help with custom integration solutions.
                </p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-2">Do you offer training for our staff?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we provide comprehensive training programs for all users. This includes personalized onboarding, video tutorials, documentation, and ongoing support from our expert team.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;