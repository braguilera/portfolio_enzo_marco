import React from 'react'
import { cn } from "../lib/utils";
import { DotPattern } from "./magicUI/DotPattern";
import { HyperText } from './magicUI/HyperText';
import { ShimmerButton } from './magicUI/ShimmerButton';


const Proyectos = () => {

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

            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                )}
            />

        </div>
    )
}

export default Proyectos;
