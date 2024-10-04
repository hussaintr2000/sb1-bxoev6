import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProfilePhoto from '../components/ProfilePhoto'
import { useContent } from '../contexts/ContentContext'

const Home: React.FC = () => {
  const { content } = useContent();
  const { title, subtitle, ctaText, ctaLink } = content.home;

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <ProfilePhoto />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-4 text-center text-gray-800 dark:text-white"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl mb-8 text-center max-w-2xl text-gray-600 dark:text-gray-300"
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to={ctaLink} className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition duration-300">
          {ctaText} <ArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </div>
  )
}

export default Home