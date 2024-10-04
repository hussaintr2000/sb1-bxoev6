import React from 'react'
import { Link } from 'react-router-dom'
import { Cpu } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-bold text-gray-800 dark:text-white">
          <Cpu className="mr-2 text-blue-600 dark:text-blue-400" />
          <span>MechaEngineer</span>
        </Link>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</Link></li>
            <li><Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Projects</Link></li>
            <li><Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Services</Link></li>
            <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header