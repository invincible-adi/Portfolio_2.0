import React from 'react';
import { Briefcase, Code, Database, Layout } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    {
      icon: <Code className="w-5 h-5 text-blue-500" />,
      text: 'Developed RESTful APIs with Node.js and Express.js for client-server communication',
    },
    {
      icon: <Database className="w-5 h-5 text-blue-500" />,
      text: 'Implemented MongoDB database optimization strategies to improve query performance',
    },
    {
      icon: <Layout className="w-5 h-5 text-blue-500" />,
      text: 'Built dynamic web applications using React.js with responsive design principles',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>

        <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-100">MERN Stack Developer</h3>
              </div>
              <p className="text-lg font-medium text-gray-400 mt-1">Techpile Technology</p>
            </div>
            <div className="bg-blue-900/30 text-blue-300 px-4 py-1 rounded-full font-medium text-sm inline-block border border-blue-500/30">
              July 2024 - April 2025
            </div>
          </div>

          <div className="border-l-2 border-blue-500/30 pl-6 ml-3">
            <h4 className="font-semibold text-lg mb-4 text-gray-200">Key Responsibilities:</h4>
            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3">{item.icon}</div>
                  <p className="text-gray-300">{item.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-200">Achievements:</h4>
              <p className="text-gray-300">
                Successfully delivered 8+ web applications within deadlines, improving client
                satisfaction by 25% and reducing application load time by 40% through code
                optimization techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;