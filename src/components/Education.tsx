import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Diploma in Computer Science',
      institution: 'Mahamaya Polytechnic',
      period: '2021 - 2024',
      details: 'Focused on computer programming, database management, and web development technologies.',
    },
    {
      degree: 'Intermediate',
      institution: 'Hiralal Ramniwas Inter College',
      period: '2020 - 2021',
      details: 'Completed intermediate education with a focus on science and mathematics.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-700 hover:border-blue-500 bg-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">{item.degree}</h3>
                    <p className="text-gray-400">{item.institution}</p>
                  </div>
                </div>
                <div className="flex items-center text-blue-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{item.period}</span>
                </div>
              </div>
              <p className="text-gray-300 mt-2 ml-9">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;