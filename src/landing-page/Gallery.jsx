import { useEffect, useState } from "react";
import ProjectList from "../ProjectList";
import axios from "axios";
const Gallery = () => {
  const [projects, setProjects] = useState([]);

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
    <div className="p-8 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>

      <ProjectList projects={projects} />

    </div>
  );
};

export default Gallery;
