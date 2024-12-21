import React from 'react';
import { Code, Database, GitBranch, Globe, Server, Terminal, Container, Mail  } from 'lucide-react';
import { FileTreeDemo } from './magicUI/FileTreeDemo';
import { DockDemo } from './magicUI/DockDemo';


const ExperienciaYProyectos = () => {
  const proyectos = [
    {
      id: 1,
      title: 'Administrador de torneos',
      href: '#',
      description: 'Dirigí el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor.',
      date: 'Abril 2024 - Julio 2024',
      datetime: '2024-07-01',
      links: { href: '#', title: 'Repositorio' },
      skills: [
        { icon: Terminal, name: 'Java', type: 'Backend' },
        { icon: Server, name: 'Spring Boot', type: 'Framework' },
        { icon: Database, name: 'Postgre SQL', type: 'Database' },
        { icon: Code, name: 'React', type: 'Frontend' }
      ]
    },
    {
      id: 2,
      title: 'Sistema de Gestión de Reclamos Administrativos',
      href: '#',
      description: 'En conjunto con un compañero, desarrollamos un sistema para un consorcio que permita generar reclamos y almacenar información relacionada.',
      date: 'Agosto 2024 - Actualidad',
      datetime: '2024-08-01',
      links: { href: '#', title: 'Repositorio' },
      skills: [
        { icon: Terminal, name: 'Java', type: 'Backend' },
        { icon: Server, name: 'Spring Boot', type: 'Framework' },
        { icon: Database, name: 'Postgre SQL', type: 'Database' }
      ]
    }
  ];

  const experiencia = [
    {
      id: 1,
      position: 'Desarrollador Frontend',
      company: 'TechCorp',
      description: 'Colaboré en el diseño y desarrollo de una aplicación web utilizando React y TypeScript, trabajando en un equipo ágil.',
      date: 'Enero 2023 - Marzo 2024'
    },
    {
      id: 2,
      position: 'Practicante en Desarrollo Fullstack',
      company: 'CodeFactory',
      description: 'Participé en el desarrollo de una API RESTful con Node.js y el diseño de interfaces responsivas con Bootstrap.',
      date: 'Agosto 2022 - Diciembre 2022'
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
          <FileTreeDemo seleccionado={{folder:"4", file:"5"}}/>
          <DockDemo/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Experiencia</h2>
          <p className="mt-4 text-lg text-gray-600">
            En esta sección encontrarás mi experiencia laboral y proyectos destacados, que reflejan mis habilidades técnicas y capacidad para aportar valor a los equipos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 ">
          <div className='lg:border-r border-r-gray-200 lg:px-10'>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experiencia laboral</h3>
            <div className="space-y-8">
              {experiencia.map((item) => (
                <div key={item.id} className="flex flex-col border-b border-gray-200 pb-6">
                  <p className="mt-1 text-sm text-gray-500">{item.date}</p>
                  <h4 className="text-lg font-medium text-gray-900">
                    {item.position} - <span className="text-gray-700">{item.company}</span>
                  </h4>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='pr-10'>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experiencia por proyectos</h3>
            <div className="space-y-10">
              {proyectos.map((post) => (
                <article key={post.id} className="flex flex-col items-start justify-between group border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-x-4 text-xs ">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.links.href}
                      className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 transition-all duration-300"
                    >
                      {post.links.title}
                    </a>
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-gray-500 transition-all duration-300">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm text-gray-600 line-clamp-3">{post.description}</p>
                  </div>
                  <div className="mt-8 w-full">
                    <h4 className="text-sm font-medium text-gray-900">Tecnologías utilizadas:</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {post.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 select-none"
                        >
                          <skill.icon className="w-6 h-6 text-yellow-500 transition-transform duration-300" />
                          <span className="text-xs font-medium text-gray-600">{skill.name}</span>
                          <span className="text-[10px] text-gray-400">{skill.type}</span>
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
