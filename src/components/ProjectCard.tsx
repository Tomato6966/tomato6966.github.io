import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import type { Project } from "../projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasGradient = !project.images.length;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 300); // Fade out duration
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false);
    }, 300); // Fade out duration
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const tiltFactor = 10; // Max tilt in degrees

    setTiltY((mouseX / (rect.width / 2)) * tiltFactor);
    setTiltX((-mouseY / (rect.height / 2)) * tiltFactor);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  useEffect(() => {
    if (project.images.length <= 1) return; // No auto-switch for single image or no images

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 300); // Fade out duration
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, project.images.length]);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-100 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` }}
    >
      {hasGradient ? (
        <div className="w-full h-48 flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br from-green-400 to-blue-600">
          {project.title}
        </div>
      ) : (
        <div className="relative w-full h-48 overflow-hidden group">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} ${currentImageIndex + 1}`}
            className={`w-full h-full object-contain rounded transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                &gt;
              </button>
            </>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-full transition duration-300"
          >
            View Project <FaExternalLinkAlt className="ml-2" />
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-full transition duration-300 ml-2"
            >
              GitHub <FaGithub className="ml-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
