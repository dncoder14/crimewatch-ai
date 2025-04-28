import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [window.location.pathname]);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const navbarClass = isScrolled
    ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md'
    : 'bg-transparent';
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="container-custom py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <FaRobot className="text-primary-600 dark:text-primary-400 text-3xl" />
            <span className="text-xl font-display font-bold text-dark-900 dark:text-white">
              CrimeWatch<span className="text-primary-600 dark:text-primary-400">AI</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }>
              About
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => 
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }>
              Dashboard
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }>
              Contact
            </NavLink>
          </div>
          
          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </button>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 flex flex-col">
              <NavLink to="/" className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg">
                Home
              </NavLink>
              <NavLink to="/about" className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg">
                About
              </NavLink>
              <NavLink to="/dashboard" className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg">
                Dashboard
              </NavLink>
              <NavLink to="/contact" className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg">
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;