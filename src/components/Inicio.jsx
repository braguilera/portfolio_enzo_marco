import React, { useState } from 'react'
import { cn } from "../lib/utils";
import { DotPattern } from "./magicUI/DotPattern";
import { HyperText } from './magicUI/HyperText';
import { ShimmerButton } from './magicUI/ShimmerButton';
import Pin from '../imagenes/iconos/Pin';
import folder from '../imagenes/iconos/folder.svg'
import { motion } from 'framer-motion';
import MarqueeComponente from './magicUI/MarqueeDemoVertical'


const Proyectos = () => {
    const [isAboutHovered, setIsAboutHovered] = useState(false);

    const Alerta = ()  =>{
        alert("Cv descargado")
    }

    return (
        <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                <HyperText
                className="text-black dark:text-white text-6xl font-bold tracking-tighter mb-4"
                text="Enzo Marco"
                />
            </p>
            <h2 className="z-10 text-4xl text-muted-foreground font-light mb-8">
                Ingeniero en Informática | Desarrollador Backend
            </h2>
            <p className="z-10 text-xl text-muted-foreground mb-8">
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
                initial={{ rotate: 3 }}
                animate={{ 
                    rotate: isAboutHovered ? -3 : 3, 
                    y: isAboutHovered ? -5 : 0 
                }}
                onHoverStart={() => setIsAboutHovered(true)}
                onHoverEnd={() => setIsAboutHovered(false)}
                >
                <Pin isHovered={isAboutHovered} />
                <h3 className="text-gray-800 font-handwriting">About Me</h3>
                <p className="text-sm text-gray-600 mt-2">Developer passionate about creating amazing experiences</p>
                </motion.div>
            </div>

            <motion.div 
            className="absolute bottom-[-70px] left-10 cursor-pointer w-[300px]"
            initial={{ rotate: -1 }}
            animate={{ rotate: 6 }}
            whileHover={{
                y: -10,
                rotate: 2, 
                transition: { duration: 0.3, ease: "easeOut" }, 
            }}
            >
                <img src={folder} className='w-full' />
                <MarqueeComponente/>
            </motion.div>



            <motion.div 
            className="absolute bottom-[-70px] right-10 cursor-pointer w-[300px]"
            initial={{ rotate: 1 }}
            animate={{ rotate: -8 }}
            whileHover={{
                y: -10, // Sube 10px
                rotate: -2, // Rotación cerca de 0
                transition: { duration: 0.3, ease: "easeOut" }, // Animación suave
            }}
            >
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
