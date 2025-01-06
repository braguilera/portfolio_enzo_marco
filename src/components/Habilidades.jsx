import React, { useState } from 'react';
import { MagicCard } from "./magicUI/MagicCard";
import { useTheme } from "next-themes";
import { FileTreeDemo } from './magicUI/FileTreeDemo'
import { DockDemo } from './magicUI/DockDemo';
import DragCloseDrawer from './magicUI/DragCloseDrawer';
import { useTranslation } from "react-i18next";

import java from '../imagenes/iconos/java.svg';
import springBoot from '../imagenes/iconos/springBoot.svg';
import angular from '../imagenes/iconos/angular.svg';
import postgre from '../imagenes/iconos/postgreSQL.svg';
import github from '../imagenes/iconos/github.svg';
import docker from '../imagenes/iconos/docker.svg';
import ingles from '../imagenes/iconos/ingles.svg';
import hibernate from '../imagenes/iconos/hibernate.svg';
import postman from '../imagenes/iconos/postman.svg';

const skillsData = [
  { id: 'JAVA', name: 'skills.0.name', icon: java, description: 'skills.0.description', title:"modalTitle" },
  { id: 'Spring Boot', name: 'skills.1.name', icon: springBoot, description: 'skills.1.description', title:"modalTitle" },
  { id: 'angular', name: 'skills.2.name', icon: angular, description: 'skills.2.description' , title:"modalTitle"},
  { id: 'Postgre SQL', name: 'skills.3.name', icon: postgre, description: 'skills.3.description' , title:"modalTitle"},
  { id: 'github', name: 'skills.4.name', icon: github, description: 'skills.4.description' , title:"modalTitle"},
  { id: 'docker', name: 'skills.5.name', icon: docker, description: 'skills.5.description' , title:"modalTitle"},
  { id: 'ingles', name: 'skills.6.name', icon: ingles, description: 'skills.6.description' , title:"modalTitle"},
  { id: 'hibernate', name: 'skills.7.name', icon: hibernate, description: 'skills.7.description' , title:"modalTitle"},
  { id: 'postman', name: 'skills.8.name', icon: postman, description: 'skills.8.description' , title:"modalTitle"},
];


const proyectos = [
  {
    id: 1,
    title: 'projects.0.title',
    description: 'projects.0.description',
    date: 'projects.0.date',
    skills: ['JAVA', 'Spring Boot', 'Postgre SQL', 'React']
  },
  {
    id: 2,
    title: 'projects.1.title',
    description: 'projects.1.description',
    date: 'projects.1.date',
    skills: ['JAVA', 'Spring Boot', 'Postgre SQL']
  }
];

const Habilidades = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("habilidades");
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setOpen(true);
  };
  
  const getProjectsBySkill = (skillId) => {
    return proyectos.filter(proyecto =>
      proyecto.skills.includes(skillId)
    );
  };
  

  const ProjectCard = ({ project }) => (
    <div className="bg-slate-300 dark:bg-neutral-800 rounded-lg p-6 mb-4 dark:hover:bg-neutral-700 hover:bg-slate-400 transition-colors duration-500 cursor-pointer">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-slate-800 dark:text-neutral-100">{t(project.title)}</h3>
        <span className="text-sm w-52 text-start sm:text-end text-slate-500 dark:text-neutral-400">{t(project.date)}</span>
      </div>
      <p className="text-slate-600 dark:text-neutral-300 text-sm">{t(project.description)}</p>
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
    <div className="min-h-screen w-full py-16 px-4 bg-background transition-all duration-300">
      <FileTreeDemo seleccionado={{folder:"6", file:"7"}}/>
      <DockDemo/>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-yellow-500">
          {t('mainTitle')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 w-2/3 2xl:max-w-7xl mx-auto">
          {t('mainSubtitle')}
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
              {t(skill.name)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t(skill.description)}
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
                {t(selectedSkill.title)} {t(selectedSkill.name)}
                </h2>
                <p className="text-gray-600 dark:text-neutral-400">{t(selectedSkill.description)}</p>
              </div>
            </div>

            <div className="space-y-4">
            {getProjectsBySkill(selectedSkill.id).length > 0 ? (
                getProjectsBySkill(selectedSkill.id).map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <p className="text-center text-slate-700 dark:text-neutral-400">
                  {t('noProjects', { skill: t(selectedSkill.name) })}
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
