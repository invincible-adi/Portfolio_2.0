import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 gradient-bg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left md:ps-10 mb-10 md:mb-0">
            <p className="gradient-text font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Aditya Kumar Gautam
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Passionate about creating efficient and elegant web solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#projects" className="btn btn-primary w-full sm:w-auto">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline w-full sm:w-auto">
                Contact Me
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start mt-8 space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-full ">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-teal-900 img"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="text-blue-400 hover:text-blue-300">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;