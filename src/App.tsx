import React from "react";

import ProjectGrid from "./components/ProjectGrid";
import { projects } from "./projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
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
