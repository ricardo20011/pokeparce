import React from "react";

const Boton = (props) => {
	const cambiarPagina = () => {
		if(props.pokemonInicio < 1000){
			props.setPokemonInicio(props.pokemonInicio + props.pokemonesPorPagina);
			props.setPokemonInicioTipo(props.pokemonesPorPagina * 2);
		}
	}
  return(
		<button onClick={()=>cambiarPagina()} className="border-2 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-1 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">{props.name}</button>
	);
}

export default Boton;