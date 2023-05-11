import React from "react";

const Boton = (props) => {
  return(
		<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">{props.name}</button>
	);
}

export default Boton;