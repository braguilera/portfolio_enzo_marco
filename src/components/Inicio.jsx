import React, { useContext, useState } from 'react'
import { cn } from "../lib/utils";
import { DotPattern } from "./magicUI/DotPattern";
import { HyperText } from './magicUI/HyperText';
import { ShimmerButton } from './magicUI/ShimmerButton';
import Pin from '../imagenes/iconos/Pin';
import folder from '../imagenes/iconos/folder.svg'
import folderDark from '../imagenes/iconos/folderDark.svg'
import { motion, transform } from 'framer-motion';
import MarqueeComponente from './magicUI/MarqueeDemoVertical'
import { useNavigate } from 'react-router-dom';
import { FileTreeDemo } from './magicUI/FileTreeDemo';
import { DockDemo } from './magicUI/DockDemo';
import java from '../imagenes/iconos/java.svg'
import springBoot from '../imagenes/iconos/springBoot.svg'
import postgre from '../imagenes/iconos/postgreSQL.svg'
import docker from '../imagenes/iconos/docker.svg'
import hibernate from '../imagenes/iconos/hibernate.svg'
import projects from '../imagenes/iconos/projects.svg'
import skills from '../imagenes/iconos/skills.svg'
import Contexto from '../contexto/Contexto';
import {useTranslation} from "react-i18next"

const Proyectos = () => {
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { darkMode } = useContext(Contexto);
    const [t] = useTranslation("inicio");

    const navegacion = useNavigate();

    const Alerta = ()  =>{
        alert("Cv descargado")
    }

    const leftmostVariants = {
        initial: {
            scale: 0.7,
            y: 0,
            rotate: -6,
        },
        hover: {
            scale: 0.8,
            y: -15,
            rotate: -10,
            transition: { duration: 0.3, delay: 0.1 }
        },
    };

    const leftVariants = {
        initial: {
            scale: 0.7,
            y: 0,
            rotate: -4,
        },
        hover: {
            scale: 0.9,
            y: -15,
            rotate: -10,
            transition: { duration: 0.3, delay: 0.1 }
        },
    };

    const centerVariants = {
        initial: {
            scale: 0.8,
            y:0,
        },
        hover: {
            scale: 1,
            y: -15,
            transition: { duration: 0.3, delay: 0.1 }
        },
    };

    const rightVariants = {
        initial: {
            scale: 0.7,
            y: 0,
            rotate: 8,
        },
        hover: {
            scale: 0.9,
            y: -15,
            rotate: 10,
            transition: { duration: 0.3, delay: 0.1 }
        },
    };

    const rightmostVariants = {
        initial: {
            scale: 0.7,
            y: 0,
            rotate: 12,
        },
        hover: {
            scale: 0.9,
            y: -15,
            rotate: 10,
            transition: { duration: 0.3, delay: 0.1 }
        },
    };
    return (
        <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl transition-all duration-300">

        <FileTreeDemo seleccionado={{folder:"2", file:"3"}}/>

        <DockDemo/>

            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                <HyperText
                className="text-yellow-500 text-6xl font-bold tracking-tighter mb-4"
                text="Enzo Marco"
                />
            </p>
            <h2 className="z-10 px-4 text-4xl text-center text-muted-foreground font-light mb-8 flex flex-col md:flex-row">
                Ingeniero en Informática <span className='hidden md:inline md:px-2'>|</span>  <span>Desarrollador Backend</span>
            </h2>
            <p className="z-10 px-4 text-xl text-center text-muted-foreground mb-8">
                {t("header.tagline")}
            </p>

            <div className="z-10 flex min-h-20 items-center justify-center">
                <ShimmerButton className="shadow-2xl" funcion={Alerta}>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Descargar CV
                    </span>
                </ShimmerButton>
            </div>

            <div className="absolute top-10 right-10 cursor-pointer z-10">

                <motion.div 
                className="relative bg-yellow-100 p-6 rounded shadow-lg max-w-[220px] transform transition-all duration-200 hidden sm:block"
                onClick={() => navegacion("/sobre_mi")}
                initial={{ rotate: 3 }}
                animate={{ 
                    rotate: isAboutHovered ? -3 : 3, 
                    y: isAboutHovered ? -5 : 0 
                }}
                onHoverStart={() => setIsAboutHovered(true)}
                onHoverEnd={() => setIsAboutHovered(false)}
                >
                <Pin isHovered={isAboutHovered}/>
                <h3 className="text-gray-800 font-handwriting">Sobre mí</h3>
                <p className="text-sm text-gray-600 mt-2 font-handwriting">Desarrollador apasionado en la creación de experiencias increibles!</p>
                </motion.div>
            </div>

            <motion.div 
            className="absolute bottom-[-70px] left-0 xl:left-20 cursor-pointer w-[400px] drop-shadow-lg z-50 2xl:w-[450px] hidden lg:block"
            onClick={() => navegacion("/proyectos")}
            initial={{ y: -1000, x: -1000 }}
            animate={{
                y: [0, 12, 0], x: [0, 10, 0], rotate: 4
            }}
            transition={{
                y: {
                    repeat: Infinity,

                duration: 12, 
                ease: "easeOut",
                },
                x: {
                    repeat: Infinity, 

                duration: 10, 
                ease: "easeOut",
                }
            }}
            whileHover={{
                y: -10,
                rotate: 2, 
                transition: { duration: 0.3, ease: "easeOut" }, 
            }}
            >
                <img src={darkMode ? folderDark : folder} className='w-full ' />
                <article className='absolute top-1/3 left-16 w-80 h-full flex flex-col'>
                    <img src={projects} className='bg-slate-300 dark:bg-slate-500 w-16 rounded-full p-2 mb-6 ' />
                    <h3 className='text-3xl font-bold text-slate-600 dark:text-slate-200 w-full mb-1'>Experiencia</h3>
                    <p className='text-muted-foreground w-72 2xl:w-full dark:text-slate-400'>Descubre cómo he aplicado mis habilidades en proyectos reales.</p>
                </article>

                <MarqueeComponente/>
            </motion.div>

            <motion.div 
            className="absolute bottom-[-70px] right-0 xl:right-20 cursor-pointer w-[400px] drop-shadow-lg z-50 2xl:w-[450px] hidden lg:block"
            onClick={() => navegacion("/habilidades")}
            initial={{ y: -1000, x: -1000 }} 
            animate={{
                y: [0, 10, 0], x: [0, 8, 0], rotate: -4 
            }}
            transition={{
                y: {
                    repeat: Infinity, 

                duration: 10, 
                ease: "easeOut", 
                },
                x: {
                    repeat: Infinity, 

                duration: 7, 
                ease: "easeOut", 
                }
            }}
            whileHover={{
                y: -10,
                rotate: -2,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            >
                <article className='absolute top-1/3 left-16 w-80 h-full flex flex-col'>
                    <img src={skills} className='bg-slate-300 dark:bg-slate-500 w-16 rounded-full p-2 mb-6 z-10' />
                    <h3 className='text-3xl font-bold text-slate-600 w-full mb-1 dark:text-slate-200'>Conocimientos</h3>
                    <p className='text-muted-foreground w-72 2xl:w-full dark:text-slate-400'>Explora las herramientas y tecnologías que domino.</p>
                </article>

                <div 
                className='w-full h-full absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/3'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                    <div className='bg-slate-200 dark:bg-[#4a5566] w-3/4 h-8 absolute z-50 top-10 ml-16 rounded-3xl'></div>
                    <motion.img 
                        initial="initial"
                        animate={["floating", isHovered ? "hover" : "initial"]}
                        className='bg-slate-100 dark:bg-slate-200 rounded-2xl shadow-md p-4 w-[22%] absolute -top-6 left-[16%]'
                        src={docker}
                        variants={leftmostVariants}
                    />
                    
                    <motion.img 
                        initial="initial"
                        animate={["floating", isHovered ? "hover" : "initial"]}
                        className='bg-slate-100 dark:bg-slate-200 rounded-2xl shadow-md p-4 w-[22%] absolute -top-8 left-[26%]'
                        src={postgre}
                        variants={leftVariants}
                    />
                    
                    <motion.img 
                        initial="initial"
                        animate={["floating", isHovered ? "hover" : "initial"]}
                        className='bg-slate-100 dark:bg-slate-200 rounded-2xl shadow-md p-4 w-[22%] absolute -top-10 left-[39%] z-30'
                        src={java}
                        variants={centerVariants}
                    />
                    
                    <motion.img 
                        initial="initial"
                        animate={["floating", isHovered ? "hover" : "initial"]}
                        className='bg-slate-100 dark:bg-slate-200 rounded-2xl shadow-md p-4 w-[22%] absolute -top-8 right-[26%] z-20'
                        src={springBoot}
                        variants={rightVariants}
                    />
                    
                    <motion.img 
                        initial="initial"
                        animate={["floating", isHovered ? "hover" : "initial"]}
                        className='bg-slate-100 dark:bg-slate-200 rounded-2xl shadow-md p-4 w-[22%] absolute -top-6 right-[16%] z-10'
                        src={hibernate}
                        variants={rightmostVariants}
                    />
                
            </div>
                <img src={darkMode ? folderDark : folder} className='w-full' />

            </motion.div>

            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                )}
            />

        </div>
    )
}

export default Proyectos;
