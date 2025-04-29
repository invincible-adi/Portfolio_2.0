import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  repoLink: string;
  type: 'featured' | 'ui' | 'other';
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'ui' | 'other'>('all');

  const projects: Project[] = [
    {
      title: 'Doctor Appointment System',
      description: 'A full-stack MERN application for booking and managing doctor appointments with user authentication, appointment scheduling, and admin dashboard.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: 'https://busbookingapi-integrate-git-master-invincible-adis-projects.vercel.app',
      repoLink: 'https://github.com/invincible-adi/D_A_S.git',
      type: 'featured',
    },
    {
      title: 'Event Management System',
      description: "A comprehensive MERN application for managing events, including user authentication, event creation, and RSVP functionality.",
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
      image: 'https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg',
      demoLink: '#',
      repoLink: 'https://github.com/invincible-adi/Vihara.git',
      type: 'featured',
    },
    {
      title: 'Memory Game',
      description: 'Interactive memory card matching game built with React, featuring multiple difficulty levels and score tracking.',
      tags: ['React', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: 'https://1firstgame.netlify.app/',
      repoLink: 'https://github.com/invincible-adi/memory_game.git',
      type: 'other',
    },
    {
      title: 'React Notes App',
      description: 'A React-based notes application with features like create, edit, delete notes, and categorization with tags.',
      tags: ['React', 'LocalStorage', 'CSS'],
      image: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: 'https://adi-react-notes-app.netlify.app/',
      repoLink: 'https://github.com/invincible-adi/React-Notes-App.git',
      type: 'other',
    },
    {
      title: 'Blinkit Landing Page',
      description: 'A pixel-perfect clone of the Blinkit landing page featuring responsive design and smooth animations.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: 'https://invincible-adi.github.io/blinkit-clone/',
      repoLink: 'https://github.com/invincible-adi/blinkit-clone.git',
      type: 'ui',
    },
    {
      title: 'Travel Website',
      description: 'A responsive travel website with a modern design, showcasing various travel destinations and booking options.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Python'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/297084137/ZR/MH/GQ/9160165/international-tour-package.jpg',
      demoLink: '#',
      repoLink: 'https://github.com/invincible-adi/travel-management-website-template.git',
      type: 'ui',
    },
    {
      title: 'Bus Booking System',
      description: 'A full-stack MERN application for booking and managing bus tickets with seat selection, and confirm tickets.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'Tailwind'],
      image: 'https://media.istockphoto.com/id/1838155753/vector/man-buying-bus-ticket-online-on-smartphone-isolated-on-white-background-book-and-buy-bus.jpg?s=612x612&w=0&k=20&c=rQ5kwNI5MaY5zOLTof-XRQ8ykpbtocDPs3AlluR7w5o=',
      demoLink: 'https://busbookingapi-integrate-git-master-invincible-adis-projects.vercel.app',
      repoLink: 'https://github.com/invincible-adi/Busbookingapi_integrate.git',
      type: 'ui',
    },
    {
      title: 'CRUD Application',
      description: 'A simple CRUD application built with React and Node.js, allowing users to create, read, update, and delete records.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*DI5wwLcQV-b3erfLIbvfFQ.jpeg',
      demoLink: '#',
      repoLink: 'https://github.com/invincible-adi/task2.git',
      type: 'featured',
    },
    {
      title: 'Myntra Landing Page',
      description: 'Responsive clone of the Myntra e-commerce landing page with product cards and category navigation.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: 'https://adityakumargautam-techpile-clone.netlify.app/',
      repoLink: '#',
      type: 'ui',
    },
    {
      title: 'Swiggy Landing Page',
      description: 'Responsive recreation of the Swiggy food delivery platform landing page with modern UI elements.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      demoLink: '#',
      repoLink: 'https://github.com/invincible-adi/swiggy.git',
      type: 'ui',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['all', 'featured', 'other', 'ui'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full border ${activeFilter === filter
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-gray-900 border-gray-700 text-gray-300 hover:border-blue-500'
                } transition-colors duration-300`}
              onClick={() => setActiveFilter(filter as typeof activeFilter)}
            >
              {filter === 'all' && 'All Projects'}
              {filter === 'featured' && 'MERN Stack'}
              {filter === 'other' && 'React Projects'}
              {filter === 'ui' && 'UI Design'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card group hover:translate-y-[-5px]">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="space-x-2">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-2 bg-blue-600/90 rounded-full text-white hover:bg-blue-500 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-2 bg-blue-600/90 rounded-full text-white hover:bg-blue-500 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;