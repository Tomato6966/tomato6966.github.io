import ProjectGrid from "./components/ProjectGrid";
import { projects } from "./projects";
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen py-10">
      <a
        href="https://github.com/Tomato6966/tomato6966.github.io.git"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
        aria-label="View on GitHub"
      >
        <FaGithub size={24} />
      </a>

      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">My Project(s) Showcase</h1>
        <p className="text-lg text-gray-600 mt-2">A collection of my work and creations (of static-websites for github.io).</p>
      </header>
      <main className="container mx-auto px-4">
        <ProjectGrid projects={projects} />
      </main>
    </div>
  );
}

export default App;
