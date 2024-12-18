import React from 'react'
import { FileTreeDemo } from './magicUI/FileTreeDemo'
import { DockDemo } from './magicUI/DockDemo'
import { InteractiveHoverButton } from './magicUI/InteractiveHoverButton'
import { ShimmerButton } from './magicUI/ShimmerButton'

const SobreMi = () => {

  const Alerta = ()  =>{
    alert("Cv descargado")
}

  return (
    <>
    <main className='flex items-start justify-center h-[100vh] w-2/6 flex-col gap-4 mx-auto my-0 bg-slate-400'>
      <FileTreeDemo seleccionado={{folder:"8", file:"9"}}/>
      
      
      <section className='flex flex-col w-full'>
        <h1 className='text-center w-full text-stone-950 text-4xl font-bold'>Sobre mí</h1>
        <p className='text-center w-full'>Conoceme más</p>
      </section>
      
      <section className='flex flex-col gap-1'>
        <h2 className='flex text-slate-900 text-2xl font-semibold'>Enzo Marco</h2>
        <h3 className='text-muted-foreground font-light'>Ingeniero de software</h3>
        <p>Soy un estudiante universitario de tercer año con el objetivo de adentrarme dentro del mundo laboral, ocupando puestos relacionados con el back-end que me ofrecan la posibilidad de crecer dentro de este ámbito</p>
        <p>texto largo</p>

        <footer className='flex w-3/4 h-full self-center gap-2'>
          <ShimmerButton className="shadow-2xl w-full" funcion={Alerta}>
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Descargar CV
              </span>
          </ShimmerButton>

          <InteractiveHoverButton></InteractiveHoverButton>
        </footer>
      </section>
      
      <section>
        <article>
          uade1
          uade2
        </article>

        <article>
          curso1
          curso2
          curso3
        </article>
      </section>

    </main>
    <DockDemo></DockDemo>

    </>
  )
}

export default SobreMi
