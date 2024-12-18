import React from 'react'
import { FileTreeDemo } from './magicUI/FileTreeDemo'
import { DockDemo } from './magicUI/DockDemo'

const Proyectos = () => {

        const posts = [
      {
        id: 1,
        title: 'Administrador de torneos',
        href: '#',
        description:
          'Dirigí  el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor',
        date: 'Abril 2024 - Julio 2024',
        datetime: '2020-03-16',
        links: { title: 'Repositorio', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Dirigí  el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor',
        date: 'Abril 2024 - Julio 2024',
        datetime: '2020-03-16',
        links: { title: 'Repositorio', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Dirigí  el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor',
        date: 'Abril 2024 - Julio 2024',
        datetime: '2020-03-16',
        links: { title: 'Repositorio', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Dirigí  el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor',
        date: 'Abril 2024 - Julio 2024',
        datetime: '2020-03-16',
        links: { title: 'Repositorio', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Dirigí  el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor',
        date: 'Abril 2024 - Julio 2024',
        datetime: '2020-03-16',
        links: { title: 'Repositorio', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Dirigí  el desarrollo de una aplicación dentro de un equipo de 4 personas, empleamos scrum como marco de trabajo y optamos por el modelo de diseño MVC para nuestra gestor',
        date: 'Abril 2024 - Julio 2024',
        datetime: '2020-03-16',
        links: { title: 'Repositorio', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ]

    return (


<div className="bg-white py-20 sm:py-32 relative flex h-[100vh] w-full flex-col items-center justify-start overflow-auto rounded-lg border bg-background md:shadow-xl">
        <FileTreeDemo seleccionado={{folder:"4", file:"5"}}/>
        <DockDemo/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 w-full flex items-center justify-start flex-col">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Proyectos</h2>
          <p className="mt-2 text-lg/8 text-gray-600 text-center">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
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
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
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
