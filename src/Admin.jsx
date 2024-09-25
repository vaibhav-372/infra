import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import Contacts from "./Contacts";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState("projects"); // No active tab initially

  // Fetch projects only when the "Projects" tab is clicked
  useEffect(() => {
    if (activeTab === "projects") {
      fetchProjects();
    }
  }, [activeTab]);

  // Fetch contacts only when the "Contacts" tab is clicked
  useEffect(() => {
    if (activeTab === "contacts") {
      fetchContacts();
    }
  }, [activeTab]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/projects");
      setProjects(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/contacts");
      setContacts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]);
    }
  };

  return (
    <div className="p-6 bg-[url('src/assets/infra-landing-bg.jpeg')] min-h-screen bg-fixed bg-cover bg-center">
      {/* Fixed Navigation Tabs */}
      <div className="fixed top-0 left-0 w-full bg-[#9a8b7b] shadow-md py-4 z-10">
        <div className="flex justify-center space-x-4">
          <button
            className={`px-6 py-2 rounded-full transition duration-300 ${activeTab === "projects" ? "bg-[#6a6b66] text-white" : "bg-gray-200 text-gray-700"} hover:bg-[#7ab24d] hover:text-white`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`px-6 py-2 rounded-full transition duration-300 ${activeTab === "addProject" ? "bg-[#6a6b66] text-white" : "bg-gray-200 text-gray-700"} hover:bg-[#7ab24d] hover:text-white`}
            onClick={() => setActiveTab("addProject")}
          >
            Add Project
          </button>
          <button
            className={`px-6 py-2 rounded-full transition duration-300 ${activeTab === "contacts" ? "bg-[#6a6b66] text-white" : "bg-gray-200 text-gray-700"} hover:bg-[#7ab24d] hover:text-white`}
            onClick={() => setActiveTab("contacts")}
          >
            Contacts
          </button>
        </div>
      </div>

      {/* Padding added to prevent content from being hidden behind fixed nav */}
      <div className="pt-20">
        {/* Conditionally Render Components Based on Active Tab */}
        {activeTab === "projects" && 
        <div className="opacity-90">
          <ProjectList projects={projects} />
        </div>
        }
        {activeTab === "addProject" && (
          <div className="max-w-md mx-auto shadow-xl backdrop-blur-xl shadow-[#d1d4d0] rounded-lg p-6 mb-8">
            <ProjectForm fetchProjects={fetchProjects} />
          </div>
        )}
        {activeTab === "contacts" && (
          <div className="mt-10">
            <Contacts contacts={contacts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
