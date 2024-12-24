import React, { useState } from 'react'
import { cn } from "../lib/utils";
import { DotPattern } from "./magicUI/DotPattern";
import { HyperText } from './magicUI/HyperText';
import { ShimmerButton } from './magicUI/ShimmerButton';
import Pin from '../imagenes/iconos/Pin';
import folder from '../imagenes/iconos/folder.svg'
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


const Proyectos = () => {
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isHovered, setIsHovered] = useState(false);


    const navegacion = useNavigate();

    const Alerta = ()  =>{
        alert("Cv descargado")
    }

    const createFloatingAnimation = (delayOffset) => ({
        y: [0, -5, 0],
        transition: {
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delayOffset
        }
    });

    // Variantes para cada posición
    const leftmostVariants = {
        initial: {
            scale: 0.9,
            x: 0,
        },
        hover: {
            scale: 1,
            x: -100,
            transition: { duration: 0.5, delay: 0.4 }
        },
        floating: createFloatingAnimation(0)
    };

    const leftVariants = {
        initial: {
            scale: 0.9,
            x: 0,
        },
        hover: {
            scale: 1,
            x: -50,
            transition: { duration: 0.5, delay: 0.2 }
        },
        floating: createFloatingAnimation(1.2)
    };

    const centerVariants = {
        initial: {
            scale: 0.9,
        },
        hover: {
            scale: 1,
            transition: { duration: 0.5, delay: 0 }
        },
        floating: createFloatingAnimation(0.5)
    };

    const rightVariants = {
        initial: {
            scale: 0.9,
            x: 0,
        },
        hover: {
            scale: 1,
            x: 50,
            transition: { duration: 0.5, delay: 0.2 }
        },
        floating: createFloatingAnimation(0.8)
    };

    const rightmostVariants = {
        initial: {
            scale: 0.9,
            x: 0,
        },
        hover: {
            scale: 1,
            x: 100,
            transition: { duration: 0.5, delay: 0.4 }
        },
        floating: createFloatingAnimation(1.5)
    };
    return (
        <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">

        <FileTreeDemo seleccionado={{folder:"2", file:"3"}}/>

        <DockDemo/>

            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                <HyperText
                className="text-black dark:text-white text-6xl font-bold tracking-tighter mb-4"
                text="Enzo Marco"
                />
            </p>
            <h2 className="z-10 text-4xl text-center text-muted-foreground font-light mb-8 ">
                Ingeniero en Informática | Desarrollador Backend
            </h2>
            <p className="z-10 text-xl text-center text-muted-foreground mb-8">
                Transformando ideas en soluciones robustas y escalables
            </p>
            <div className="z-10 flex min-h-20 items-center justify-center">

                <ShimmerButton className="shadow-2xl" funcion={Alerta}>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Descargar CV
                    </span>
                </ShimmerButton>
            </div>

            <div className="absolute top-10 right-10 cursor-pointer">

                <motion.div 
                className="relative bg-yellow-100 p-6 rounded shadow-lg max-w-[200px] transform transition-all duration-200"
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
                <p className="text-sm text-gray-600 mt-2 font-handwriting">Developer passionate about creating amazing experiences</p>
                </motion.div>
            </div>

            <motion.div 
            className="absolute bottom-[-70px] left-10 cursor-pointer w-[500px] drop-shadow-lg"
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
                <img src={folder} className='w-full ' />
                <MarqueeComponente/>
            </motion.div>

            <motion.div 
            className="absolute bottom-[-70px] right-10 cursor-pointer w-[500px] drop-shadow-lg"
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
                <h3 className='absolute bottom-[60%] text-xl mb-4 text text-gray-800 w-full text-center'>Conocimientos</h3>
                <div 
                className='w-full h-full absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/3'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Extremo izquierdo */}
                <motion.img 
                    initial="initial"
                    animate={["floating", isHovered ? "hover" : "initial"]}
                    className='bg-slate-100 rounded-full shadow-md p-4 w-[22%] absolute top-36 left-[16%]'
                    src={docker}
                    variants={leftmostVariants}
                />
                
                {/* Izquierda adyacente al centro */}
                <motion.img 
                    initial="initial"
                    animate={["floating", isHovered ? "hover" : "initial"]}
                    className='bg-slate-100 rounded-full shadow-md p-4 w-[22%] absolute top-32 left-[26%]'
                    src={postgre}
                    variants={leftVariants}
                />
                
                {/* Centro (Java) */}
                <motion.img 
                    initial="initial"
                    animate={["floating", isHovered ? "hover" : "initial"]}
                    className='bg-slate-100 rounded-full shadow-md p-4 w-[22%] absolute top-28 left-[41%] z-30'
                    src={java}
                    variants={centerVariants}
                />
                
                {/* Derecha adyacente al centro */}
                <motion.img 
                    initial="initial"
                    animate={["floating", isHovered ? "hover" : "initial"]}
                    className='bg-slate-100 rounded-full shadow-md p-4 w-[22%] absolute top-32 right-[26%] z-20'
                    src={springBoot}
                    variants={rightVariants}
                />
                
                {/* Extremo derecho */}
                <motion.img 
                    initial="initial"
                    animate={["floating", isHovered ? "hover" : "initial"]}
                    className='bg-slate-100 rounded-full shadow-md p-4 w-[22%] absolute top-36 right-[16%] z-10'
                    src={hibernate}
                    variants={rightmostVariants}
                />
            </div>
                <img src={folder} className='w-full' />

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
