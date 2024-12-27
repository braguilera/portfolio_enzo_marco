import React, { useState } from 'react';
import { MagicCard } from "./magicUI/MagicCard";
import { useTheme } from "next-themes";
import { FileTreeDemo } from './magicUI/FileTreeDemo'
import { DockDemo } from './magicUI/DockDemo';
import java from '../imagenes/iconos/java.svg'
import springBoot from '../imagenes/iconos/springBoot.svg'
import angular from '../imagenes/iconos/angular.svg'
import postgre from '../imagenes/iconos/postgreSQL.svg'
import github from '../imagenes/iconos/github.svg'
import docker from '../imagenes/iconos/docker.svg'
import ingles from '../imagenes/iconos/ingles.svg'
import hibernate from '../imagenes/iconos/hibernate.svg'
import postman from '../imagenes/iconos/postman.svg'
import DragCloseDrawer from './magicUI/DragCloseDrawer'

const skillsData = [
  { name: 'JAVA', icon: java, description: 'Desarrollo Backend' },
  { name: 'Spring Boot', icon: springBoot, description: 'Desarrollo de APIs' },
  { name: 'Angular', icon: angular, description: 'Desarrollo de UI Moderno' },
  { name: 'Postgre SQL', icon: postgre, description: 'Gestión de Datos' },
  { name: 'GitHub', icon: github, description: 'Control de Versiones' },
  { name: 'Docker', icon: docker , description: 'Containerización' },
  { name: 'Inglés', icon: ingles, description: 'Profesional' },
  { name: 'Hibernate', icon: hibernate, description: 'Mapeo O/R' },
  { name: 'Postman', icon: postman, description: 'Testing de APIs' },
];

const proyectos = [
  {
    id: 1,
    title: 'Administrador de torneos',
    description: 'Dirigí el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor.',
    date: 'Abril 2024 - Julio 2024',
    skills: ['JAVA', 'Spring Boot', 'Postgre SQL', 'React']
  },
  {
    id: 2,
    title: 'Sistema de Gestión de Reclamos Administrativos',
    description: 'En conjunto con un compañero, desarrollamos un sistema para un consorcio que permita generar reclamos y almacenar información relacionada.',
    date: 'Agosto 2024 - Actualidad',
    skills: ['JAVA', 'Spring Boot', 'Postgre SQL']
  }
];

const Habilidades = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setOpen(true);
  };

  const getProjectsBySkill = (skillName) => {
    return proyectos.filter(proyecto => 
      proyecto.skills.includes(skillName)
    );
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-slate-300 dark:bg-neutral-800 rounded-lg p-6 mb-4 dark:hover:bg-neutral-700 hover:bg-slate-400 transition-colors duration-500 cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-slate-800 dark:text-neutral-100">{project.title}</h3>
        <span className="text-sm text-slate-500 dark:text-neutral-400">{project.date}</span>
      </div>
      <p className="text-slate-600 dark:text-neutral-300 text-sm">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-neutral-700 text-neutral-300 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full py-16 px-4">
      <FileTreeDemo seleccionado={{folder:"6", file:"7"}}/>
      <DockDemo/>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Habilidades Técnicas
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-7xl mx-auto">
          Desarrollador apasionado por crear soluciones robustas y escalables.
          Mi experiencia abarca desde el desarrollo de sistemas backend hasta
          la creación de experiencias de usuario intuitivas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skillsData.map((skill) => (
          <MagicCard
            key={skill.name}
            className="cursor-pointer group h-32 flex flex-col items-center justify-center text-center p-4 hover:scale-105 hover:rotate-1 transition-all duration-400"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            funcion={() => openModal(skill)}
          >
            <div className="flex flex-col items-center space-y-3">
              <img src={skill.icon} alt={skill.name} />
              <span className="font-medium transition-colors duration-300 group-hover:text-yellow-500">
                {skill.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.description}
              </span>
            </div>
          </MagicCard>
        ))}
      </div>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        {selectedSkill && (
          <div className="mx-auto max-w-2xl space-y-6 p-6">
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src={selectedSkill.icon} 
                alt={selectedSkill.name} 
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-700 dark:text-neutral-100">
                  Proyectos con {selectedSkill.name}
                </h2>
                <p className="text-gray-600 dark:text-neutral-400">{selectedSkill.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {getProjectsBySkill(selectedSkill.name).length > 0 ? (
                getProjectsBySkill(selectedSkill.name).map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <p className="text-center text-slate-700 dark:text-neutral-400">
                  No hay proyectos que utilicen {selectedSkill.name} por el momento.
                </p>
              )}
            </div>
          </div>
        )}
      </DragCloseDrawer>
    </div>
  );
};

export default Habilidades;