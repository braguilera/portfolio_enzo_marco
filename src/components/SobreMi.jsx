import React from 'react';
import { FileTreeDemo } from './magicUI/FileTreeDemo';
import { DockDemo } from './magicUI/DockDemo';
import { ShimmerButton } from './magicUI/ShimmerButton';
import { motion } from 'framer-motion';

const SobreMi = () => {
  const Alerta = () => {
    alert('CV descargado');
  };

  return (
    <>
      <main className="flex flex-col items-center justify-start h-[100vh] w-full px-4">
        <FileTreeDemo seleccionado={{ folder: '8', file: '9' }} />

        <section className="text-center mt-8">


        <div className="grid place-content-center text-yellow-500">
        <h1 className="max-w-4xl text-center text-5xl leading-snug">
          Impulsando soluciones innovadoras y creando{" "}
          <span className="relative">
            Impacto
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-4 -right-4 -top-[-2px] bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#000"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
          en cada proyecto.
        </h1>
        </div>

          <p className="text-muted-foreground mt-2">Hola, soy</p>
          <h2 className="text-slate-900 text-4xl font-semibold">Enzo Marco</h2>
          <h3 className="text-muted-foreground font-light text-lg">Ingeniero de Software</h3>
        </section>

        <section className="text-center mt-6 max-w-2xl">
          <p className="text-slate-700 leading-relaxed">
            Soy un estudiante universitario de tercer año con el objetivo de adentrarme en el mundo laboral,
            ocupando puestos relacionados con el back-end. Me apasiona crear aplicaciones funcionales que
            resuelvan problemas del día a día, mientras desarrollo mis habilidades técnicas y personales.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Actualmente estoy buscando oportunidades que me permitan crecer y aprender en equipos
            dinámicos y desafiantes.
          </p>
        </section>

        <footer className="mt-8">
          <ShimmerButton className="shadow-2xl w-full max-w-xs" funcion={Alerta}>
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Descargar CV
            </span>
          </ShimmerButton>
        </footer>

        <section className="w-full mt-12 flex flex-col items-center gap-6 px-6">
          <article className="bg-gray-100 rounded-xl p-4 text-center w-full max-w-md">
            <h3 className="font-bold">Ingeniería informática</h3>
            <p>Universidad Argentina de la Empresa (UADE)</p>
            <small className="text-muted-foreground">2023 - Actualidad</small>
          </article>

          <article className="bg-gray-100 rounded-xl p-4 text-center w-full max-w-md">
            <h3 className="font-bold">Diplomatura en Desarrollo Web</h3>
            <p>Universidad Argentina de la Empresa (UADE)</p>
            <small className="text-muted-foreground">2022 - 2023</small>
          </article>
        </section>

      </main>

      <DockDemo />
    </>
  );
};

export default SobreMi;
