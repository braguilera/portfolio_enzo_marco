import React from 'react'
import { FileTreeDemo } from './magicUI/FileTreeDemo'
import { useTheme } from "next-themes";
import { MagicCard } from "./magicUI/MagicCard";

const Habilidades = () => {

  const { theme } = useTheme();

  return (
    <div className='flex items-center justify-center h-[100vh] w-full'>
      <FileTreeDemo seleccionado={{folder:"6", file:"7"}}/>

      <div
      className={"flex items-center justify-center h-full w-2/4 flex-col flex-wrap  gap-6 lg:h-[250px] lg:flex-row"}
      >
        <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap text-base w-24 h-24"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          JAVA
        </MagicCard>

        <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap text-base w-24 h-24"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Spring Boot
        </MagicCard>
      </div>
      
    </div>
  )
}

export default Habilidades
