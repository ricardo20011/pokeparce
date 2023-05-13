import React, { useEffect, useState } from "react";


const Habilidad = (props) => {

	
	//console.log(props.pokemon[0]);

  return(
		<p className="text-gray-600">{props.habilidad}</p>
	);
}

export default Habilidad;