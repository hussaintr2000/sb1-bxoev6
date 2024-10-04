import React from 'react'
import ProfilePhoto from '../components/ProfilePhoto'
import { useContent } from '../contexts/ContentContext'

const About: React.FC = () => {
  const { content } = useContent();
  const { title, background, expertise } = content.about;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <ProfilePhoto />
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">{title}</h1>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{background.title}</h2>
        {background.paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{expertise.title}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {expertise.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About