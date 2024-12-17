import React from 'react'
import { FileTreeDemo } from './magicUI/FileTreeDemo'
import { DockDemo } from './magicUI/DockDemo'

const SobreMi = () => {
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
        <p>texto largo</p>
        <p>texto largo</p>
        <button> Descargar CV </button>
        <button> Contratame </button>
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
