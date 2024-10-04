import React from 'react'
import { Cog, Lightbulb, Wrench, Cpu } from 'lucide-react'
import { useContent } from '../contexts/ContentContext'

const iconMap = {
  Cog,
  Lightbulb,
  Wrench,
  Cpu
};

const Services: React.FC = () => {
  const { content } = useContent();
  const services = content.services;

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          return (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-start">
              <IconComponent className="text-blue-600 w-12 h-12 mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services