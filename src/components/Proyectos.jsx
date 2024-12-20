import React from 'react'
import { FileTreeDemo } from './magicUI/FileTreeDemo'
import { DockDemo } from './magicUI/DockDemo'
import { Code, Database, GitBranch, Globe, Server, Terminal, Container, Mail  } from 'lucide-react';


const Proyectos = () => {
  const posts = [
    {
      id: 1,
      title: 'Administrador de torneos',
      href: '#',
      description: 'Dirigí el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor',
      date: 'Abril 2024 - Julio 2024',
      datetime: '2020-03-16',
      links: { title: 'Repositorio', href: '#' },
      skills: [
        {
          name: 'Java',
          icon: 'Code', 
          type: 'Backend'
        },
        {
          name: 'Spring Boot',
          icon: 'Server',
          type: 'Backend'
        },
        {
          name: 'Hibernate',
          icon: '/hibernate-logo.png',
          type: 'Backend'
        },
        {
          name: 'SQL Server',
          icon: '/sql-logo.png',
          type: 'Database'
        },
        {
          name: 'React',
          icon: '/react-logo.png',
          type: 'Frontend'
        }
      ]
    },
    {
      id: 2,
      title: 'Sistema de Gestión de Reclamos Administrativos',
      href: '#',
      description: 'En conjunto con un compañero, nos encontramos desarrollando un sistema para un consorcio que, ante la aparición de un problema, rotura u oportunidad de mejora, permita generar reclamos y almacenar información relacionada con sus dominios',
      date: 'Abril 2024 - Julio 2024',
      datetime: '2020-03-16',
      links: { title: 'Repositorio', href: '#' },
      skills: [
        {
          name: 'Java',
          icon: 'Code',
          type: 'Backend'
        },
        {
          name: 'Spring Boot',
          icon: '/spring-logo.png',
          type: 'Backend'
        },
        {
          name: 'SQL Server',
          icon: '/sql-logo.png',
          type: 'Database'
        }
      ]
    }
  ]

  return (
    <div className="bg-white py-20 sm:py-32 relative flex h-[100vh] w-full flex-col items-center justify-start overflow-auto rounded-lg border bg-background md:shadow-xl">
      <FileTreeDemo seleccionado={{folder:"4", file:"5"}}/>
      <DockDemo/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 w-full flex items-center justify-start flex-col">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Proyectos
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 text-center">
            Explora mi portfolio de proyectos y las tecnologías utilizadas en cada uno.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between group">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.links.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.links.title}
                </a>
              </div>
              <div className="relative">
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              
              {/* Nueva sección de skills */}
              <div className="mt-8 w-full">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Tecnologías utilizadas:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {post.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                    >
                      <skill.icon className="w-8 h-8 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />
                      <div className="w-8 h-8 bg-gray-200 rounded-md mb-2 flex items-center justify-center text-xs text-gray-500">
                        {skill.name.charAt(0)}
                      </div>
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
  )
}

export default Proyectos