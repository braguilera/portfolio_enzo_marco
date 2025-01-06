import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileTreeDemo } from './magicUI/FileTreeDemo';
import { DockDemo } from './magicUI/DockDemo';
import java from '../imagenes/iconos/java.svg';
import springBoot from '../imagenes/iconos/springBoot.svg';
import postgre from '../imagenes/iconos/postgreSQL.svg';
import github from '../imagenes/iconos/github.svg';
import react from '../imagenes/iconos/react.svg';

const ExperienciaYProyectos = () => {
  const { t } = useTranslation("proyectos");

  const projects = t("experience.projects.items", { returnObjects: true });
  const works = t("experience.work.items", { returnObjects: true });

  // Mapeo de íconos
  const iconMap = {
    java,
    springBoot,
    postgre,
    github,
    react,
  };

  return (
    <div className="bg-background py-8 h-full">
      <FileTreeDemo seleccionado={{ folder: "4", file: "5" }} />
      <DockDemo />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-yellow-500">{t("experience.title")}</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 w-2/3 2xl:max-w-7xl mx-auto">
            {t("experience.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          <div className="lg:border-r lg:border-r-gray-200 lg:px-10 bg-slate-200 dark:bg-slate-800 lg:dark:bg-transparent dark:rounded-md lg:dark:rounded-none p-4 lg:bg-transparent">
            <h3 className="text-2xl font-semibold text-gray-600 mb-6 dark:text-gray-100">{t("experience.work.title")}</h3>
            <div className="space-y-8">
              {works.map((item, index) => (
                <div key={index} className="flex flex-col border-b border-gray-200 pb-6">
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                    {item.position} - <span className="text-gray-700 dark:text-gray-300">{item.company}</span>
                  </h4>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pr-10 pl-4 lg:pl-0">
            <h3 className="text-2xl font-semibold text-gray-600 mb-6 dark:text-gray-100">{t("experience.projects.title")}</h3>
            <div className="space-y-10">
              {projects.map((post, index) => (
                <article key={index} className="flex flex-col items-start justify-between group border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <small className="text-gray-500 dark:text-gray-400">{post.date}</small>
                    <a
                      href={post.repositoryLink.href}
                      className="relative z-10 rounded-full bg-gray-100 dark:bg-gray-600 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-500 transition-all duration-300"
                    >
                      {post.repositoryLink.title}
                    </a>
                  </div>

                  <div className="relative">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-500 transition-all duration-300">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm text-gray-600 line-clamp-3 dark:text-gray-300">{post.description}</p>
                  </div>
                  <div className="mt-8 w-full">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-400">Tecnologías utilizadas:</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {post.technologies.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center p-2 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 transition-all duration-300 select-none"
                        >
                          <img src={iconMap[skill.icon]} alt={skill.name} className="h-8 w-8" />
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{skill.name}</span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-400">{skill.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaYProyectos;
