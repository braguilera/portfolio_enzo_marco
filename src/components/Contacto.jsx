import React from 'react'
import { FileTreeDemo } from './magicUI/FileTreeDemo'

const Contacto = () => {
  return (
    <div className='flex w-full h-[100vh] justify-center items-center'>
    <FileTreeDemo seleccionado={{folder:"10", file:"11"}}/>

    </div>
  )
}

export default Contacto
