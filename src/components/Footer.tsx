import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 MechaEngineer. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300"><Github /></a>
          <a href="#" className="hover:text-gray-300"><Linkedin /></a>
          <a href="#" className="hover:text-gray-300"><Mail /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer