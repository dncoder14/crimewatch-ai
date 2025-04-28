import { Link } from 'react-router-dom';
import { FaRobot, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FaRobot className="text-primary-400 text-3xl" />
              <span className="text-xl font-display font-bold">
                CrimeWatch<span className="text-primary-400">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Real-time crime tracking and analysis powered by artificial intelligence.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Dashboard */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Dashboard</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/dashboard/map" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Crime Map
                </Link>
              </li>
              <li>
                <Link to="/dashboard/stats" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Crime Stats
                </Link>
              </li>
              <li>
                <Link to="/dashboard/settings" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Data Processing
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-600 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} CrimeWatch AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;