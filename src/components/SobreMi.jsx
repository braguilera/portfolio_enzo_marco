import React from 'react';
import { FileTreeDemo } from './magicUI/FileTreeDemo';
import { DockDemo } from './magicUI/DockDemo';
import { ShimmerButton } from './magicUI/ShimmerButton';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SobreMi = () => {
  const [t] = useTranslation("sobreMi");

  const educations = t("education", { returnObjects: true });

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/CV_Enzo_Marco.pdf";
    link.download = "CV_Enzo_Marco.pdf";
    link.click();
};

  return (
    <>
      <main className="flex flex-col items-center justify-start h-[100vh] w-full px-10 py-5 bg-background transition-all duration-300">
        <FileTreeDemo seleccionado={{ folder: '8', file: '9' }} />

        <section className="text-center mt-8 ">


        <div className="grid place-content-center text-yellow-500">
        <h1 className="max-w-7xl mx-auto text-center text-3xl md:text-5xl md:max-w-xl xl:max-w-4xl lg:max-w-2xl leading-snug ">
          {t("mainHeading1")}{" "}
          <span className="relative">
            {t("mainHeading2")}
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-4 -right-4 -top-[-5px] bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                strokeWidth="3"
                className="stroke-black dark:stroke-white"
              />
            </svg>
          </span>{" "}
          {t("mainHeading3")}
        </h1>
        </div>

        </section>

        <section className=" mt-6 max-w-2xl ">
          <p className="text-muted-foreground mt-2 dark:text-gray-300">{t("introduction.greeting")}</p>
          <h2 className="text-slate-900 text-4xl font-semibold dark:text-gray-100">Enzo Marco</h2>
          <h3 className="text-muted-foreground font-light text-lg pb-2">{t("introduction.title")}</h3>
          <p className="text-slate-700 leading-relaxed dark:text-gray-300">
          {t("introduction.description1")}
          </p>
          <p className="text-slate-700 leading-relaxed mt-4 dark:text-gray-300">
          {t("introduction.description2")}
          </p>
        </section>

        <footer className="mt-8">
          <ShimmerButton className="shadow-2xl w-full max-w-xs" funcion={downloadCv}>
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            {t("downloadCV")}
            </span>
          </ShimmerButton>
        </footer>


        <section className="w-full mt-12 flex flex-col items-center gap-6 pb-20">
          {educations.map((education, index) => (
            <article key={index} className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-center w-full max-w-md">
              <h3 className="font-bold dark:text-gray-50 ">{education.title}</h3>
              <p className='dark:text-gray-300'>{education.institution}</p>
              <small className="text-muted-foreground dark:text-gray-400">{education.duration}</small>
            </article>
          ))}

        </section>

      </main>

      <DockDemo />
    </>
  );
};

export default SobreMi;
