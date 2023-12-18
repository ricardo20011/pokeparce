import React from "react";

const BotonSiguiente = ({name,paginaActual,setPaginaActual})=> {
	const cambiarPagina = () => {
    setPaginaActual(paginaActual + 1);
  }
  return(
		<button onClick={()=>cambiarPagina()} className="border-2 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-1 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">{name}</button>
	);
}

export default BotonSiguiente;