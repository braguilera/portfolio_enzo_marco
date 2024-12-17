import { useNavigate } from "react-router-dom";
import { File, Folder, Tree } from "./FileTree";
import React from "react";

// Componente principal
export function FileTreeDemo({seleccionado}) {
  const navigate = useNavigate(); // Hook llamado dentro del componente principal

  return (
    <div className="absolute top-0 left-0 flex h-[400px] w-[180px] flex-col items-center justify-center overflow-hidden rounded-lg ">
      <Tree
        className="p-2 overflow-hidden rounded-md"
        initialSelectedId={seleccionado.file} // ID de Home.jsx
        initialExpandedItems={["1", seleccionado.folder]} // Expande "src" y "home"
        elements={ELEMENTS}
      >
        {renderElements(ELEMENTS, navigate)}
      </Tree>
    </div>
  );
}

// Renderiza elementos recursivamente
function renderElements(elements, navigate) {
  return elements.map((element) => {
    if (element.children) {
      // Si tiene hijos, renderiza como carpeta
      return (
        <Folder key={element.id} value={element.id} element={element.name}>
          {renderElements(element.children, navigate)}
        </Folder>
      );
    }
    // Si no tiene hijos, renderiza como archivo
    return (
      <File
        key={element.id}
        value={element.id}
        onClick={() => navigate(`/${element.navegation}`)} // Redirección
      >
        <p>{element.name}</p>
      </File>

    );
  });
}

// Ejemplo de elementos con "home"
const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "home",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "Home.jsx",
            navegation: "",
          },
        ],
      },
      {
        id: "4",
        isSelectable: true,
        name: "projects",
        children: [
          {
            id: "5",
            isSelectable: true,
            name: "Projects.jsx",
            navegation: "proyectos",
          },
        ],
      },
      {
        id: "6",
        isSelectable: true,
        name: "skills",
        children: [
          {
            id: "7",
            isSelectable: true,
            name: "Skills.jsx",
            navegation: "habilidades",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "about_me",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "AboutMe.jsx",
            navegation: "sobre_mi",
          },
        ],
      },
      {
        id: "10",
        isSelectable: true,
        name: "contact",
        children: [
          {
            id: "11",
            isSelectable: true,
            name: "Contact.jsx",
            navegation: "contacto",
          },
        ],
      },
    ],
  },
];
