import React from 'react';
import { motion } from 'framer-motion';

const ProfilePhoto: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6"
    >
      <img
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ProfilePhoto;