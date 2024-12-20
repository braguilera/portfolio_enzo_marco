import React from 'react';
import { Code, Database, GitBranch, Globe, Server, Terminal, Container, Mail  } from 'lucide-react';
import { MagicCard } from "./magicUI/MagicCard";
import { useTheme } from "next-themes";
import { FileTreeDemo } from './magicUI/FileTreeDemo'

const skillsData = [
  { name: 'JAVA', icon: Terminal, description: 'Desarrollo Backend' },
  { name: 'Spring Boot', icon: Server, description: 'Desarrollo de APIs' },
  { name: 'Angular', icon: Code, description: 'Desarrollo de UI Moderno' },
  { name: 'Postgre SQL', icon: Database, description: 'Gestión de Datos' },
  { name: 'GitHub', icon: GitBranch, description: 'Control de Versiones' },
  { name: 'Docker', icon: Container , description: 'Containerización' },
  { name: 'Inglés', icon: Globe, description: 'Profesional' },
  { name: 'Hibernate', icon: Database, description: 'Mapeo O/R' },
  { name: 'Postman', icon: Mail, description: 'Testing de APIs' },
];

const Habilidades = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen w-full py-16 px-4">

      <FileTreeDemo seleccionado={{folder:"6", file:"7"}}/>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Habilidades Técnicas
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              <skill.icon className="w-8 h-8 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />
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