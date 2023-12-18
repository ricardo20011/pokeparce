import React from "react";


const Boton = ({name,setTipoPokemon,tipo}) => {

	return(
		<button 
			onClick={()=>setTipoPokemon(tipo)} 
			className="
				focus:border-transparent 
				focus:bg-blue-400 border-2 
				focus:text-white 
				border-blue-400 rounded-lg 
				text-blue-900 
				bg-transparent 
				px-4 
				py-1 
				ml-1 
				mb-2 
				hover:bg-blue-400 
				hover:text-white 
				ease-in-out 
				duration-200"
			>
				{name}
			</button>
	);
}

export default Boton;