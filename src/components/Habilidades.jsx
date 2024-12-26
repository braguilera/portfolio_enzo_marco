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

const Habilidades = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const openModal = () =>{
    setOpen(true)
  }

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
            className="cursor-pointer group h-32 flex flex-col items-center justify-center text-center p-4 hover:scale-105 hover:rotate-1 transition-all duration-200"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            funcion={openModal}
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

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Drag the handle at the top of this modal downwards 100px to close it
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
            nulla aliquid iure optio quaerat deserunt, molestias quasi facere
            aut quidem reprehenderit maiores.
          </p>
          <p>
            Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis
            dolores. Esse fuga, cupiditate rerum soluta magni numquam nemo
            aliquid voluptate similique deserunt!
          </p>
          <p>
            Rerum inventore provident laboriosam quo facilis nisi voluptatem
            quam maxime pariatur. Velit reiciendis quasi sit magni numquam quos
            itaque ratione, fugit adipisci atque est, tenetur officiis explicabo
            id molestiae aperiam? Expedita quidem inventore magni? Doloremque
            architecto mollitia, dicta, fugit minima velit explicabo sapiente
            beatae fugiat accusamus voluptatum, error voluptatem ab asperiores
            quo modi possimus.
          </p>
          <p>
            Sit laborum molestias ex quisquam molestiae cum fugiat praesentium!
            Consequatur excepturi quod nemo harum laudantium accusantium nisi
            odio?
          </p>
          <p>
            Deleniti, animi maiores officiis quos eaque neque voluptas omnis
            quia error a dolores, pariatur ad obcaecati, vitae nisi perspiciatis
            fugiat sapiente accusantium. Magnam, a nihil soluta eos vero illo ab
            sequi, dolores culpa, quia hic?
          </p>
          <p>
            Eos in saepe dignissimos tempore. Laudantium cumque eius, et
            distinctio illum magnam molestiae doloribus. Fugiat voluptatum
            necessitatibus vero eligendi quae, similique non debitis qui veniam
            praesentium rerum labore libero architecto tempore nesciunt est
            atque animi voluptatibus. Aliquam repellendus provident tempora
            sequi officia sint voluptates eaque minima suscipit, cum maiores
            quos possimus. Vero ex porro asperiores voluptas voluptatibus?
          </p>
          <p>
            Debitis eos aut ullam odit fuga. Numquam deleniti libero quas sunt?
            Exercitationem earum odio aliquam necessitatibus est accusamus
            consequuntur nisi natus dolore libero voluptatibus odit doloribus
            laudantium iure, dicta placeat molestias porro quasi amet? Sint,
            reiciendis tenetur distinctio eaque delectus, maiores, nihil
            voluptas dolorem necessitatibus consequatur aliquid?
          </p>
          <p>
            Sunt ex, cum culpa vel odio dicta expedita omnis amet debitis
            inventore necessitatibus quaerat est molestias delectus. Dolorem,
            eius? Quae, itaque ipsa incidunt nobis repellendus, sunt dolorum
            aliquam ad culpa repudiandae impedit omnis, expedita illum voluptas
            delectus similique ducimus saepe pariatur. Molestias similique quam
            dolore provident doloremque maiores autem ab blanditiis voluptatum
            dignissimos culpa sed nesciunt laboriosam, in dicta consectetur.
          </p>
          <p>
            Voluptates ea, aspernatur possimus, iusto temporibus non laudantium
            neque molestias rem tempore eligendi earum nisi dolorum asperiores
            at rerum!
          </p>
          <p>
            Eaque totam error quia, ut eius perspiciatis unde velit temporibus
            mollitia. Aperiam ad tempora aliquam est molestias commodi
            cupiditate quos impedit nostrum accusantium quo fugit eveniet
            temporibus quam cumque autem porro, id ut debitis itaque et nemo
            exercitationem voluptatibus? Aspernatur corrupti quas iusto dolores
            nemo pariatur debitis quae dolorem! Nemo, eius? Dolorem quam nemo
            magnam ratione deserunt aperiam. Voluptatum ipsa, molestias
            aspernatur quas distinctio numquam qui laboriosam id ab totam
            commodi laborum tempora error natus vitae eligendi reiciendis
            maiores ex illo? Tempore at animi earum vitae enim sunt,
            dignissimos, mollitia corrupti officia obcaecati error iure vero
            repudiandae nihil magni molestias quibusdam dolorem aperiam modi.
            Harum, fugit.
          </p>
        </div>
      </DragCloseDrawer>      

    </div>

  );
};

export default Habilidades;