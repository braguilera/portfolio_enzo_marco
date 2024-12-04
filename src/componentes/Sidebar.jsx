import React from "react";
import { motion, spring } from "framer-motion";

const Sidebar = ({ activeSection }) => {
  // Anchos predeterminados de cada sección
  const sectionWidths = {
    home: "30%",
    projects: "45%",
    skills: "35%",
    about: "48%",
    contact: "37%",
  };

  // Generar variantes dinámicas para cada sección
  const getVariants = (id) => ({
    active: {
      width: "100%",
      backgroundColor: "green",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        type: spring
      },
    },
    inactive: {
      width: sectionWidths[id], // Ancho predeterminado
      backgroundColor: "gray",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  });

  // Array de secciones
  const sections = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sidebar flex flex-col items-start p-4 space-y-4">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className="w-full cursor-pointer text-center text-white py-2"
          initial="inactive"
          animate={activeSection === section.id ? "active" : "inactive"}
          variants={getVariants(section.id)} // Variantes dinámicas según sección
        >
          {section.label}
        </motion.div>
      ))}
    </nav>
  );
};

export default Sidebar;
