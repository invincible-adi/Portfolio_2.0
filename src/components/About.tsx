import React from 'react';
import { Users, MessageSquare, LightbulbIcon } from 'lucide-react';

const About = () => {
  const softSkills = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Teamwork',
      description:
        'Collaborate effectively with cross-functional teams to achieve project goals.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'Communication',
      description:
        'Clear and effective communication skills with team members and stakeholders.',
    },
    {
      icon: <LightbulbIcon className="w-8 h-8 text-blue-500" />,
      title: 'Problem Solving',
      description:
        'Analytical approach to solving complex problems and finding efficient solutions.',
    },
  ];

  const certifications = [
    { name: 'DCA (Diploma in Computer Application)', year: '2023' },
    { name: 'CCC (Course on Computer Concepts)', year: '2022' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I am a MERN Stack Developer with 1 year of experience, specializing in building
              dynamic and responsive web applications. My expertise includes working with MongoDB,
              Express.js, React.js, and Node.js to create efficient and scalable solutions.
            </p>
            <p className="text-lg text-gray-300">
              I'm passionate about writing clean code and implementing best practices to deliver
              high-quality applications that meet client requirements and provide excellent user
              experiences.
            </p>

            <div className="mt-8">
              <h3 className="section-subtitle">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <div>
                      <span className="font-medium text-gray-300">{cert.name}</span>
                      <span className="text-gray-500 ml-2">({cert.year})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="section-subtitle">Soft Skills</h3>
            <div className="grid grid-cols-1 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex p-4 rounded-lg border border-gray-700 hover:text-blue-400 bg-gray-800 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="mr-4 mt-1 ">{skill.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-gray-200">{skill.title}</h4>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;