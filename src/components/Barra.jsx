import React from "react";

const Barra = (props) => {
  return(
		<div className="my-2">
			<p className="text-lg font-bold text-gray-700">{props.title}</p>
			<p>{props.parrafo1}</p>
			<p>{props.parrafo2}</p>
			<input type="range" min="0" max="100" />
		</div>
	);
}

export default Barra;