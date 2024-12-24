import React from 'react';
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

const Habilidades = () => {
  const { theme } = useTheme();

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
            className="cursor-pointer group h-32 flex flex-col items-center justify-center text-center p-4"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex flex-col items-center space-y-3">
              <img src={skill.icon}></img>
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
    </div>
  );
};

export default Habilidades;