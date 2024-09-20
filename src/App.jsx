import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);

  // Fetch all projects and images
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/projects");
      setProjects(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl shadow-red-600 rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Project Management</h2>

      {/* Project Form */}
      <ProjectForm fetchProjects={fetchProjects} />

      {/* Project List */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
