import React from "react";

const ContenedorBoton = (props) => {
  return(
    <div className="my-10">
        <p className="text-lg mb-2 font-bold text-gray-700">{props.title}</p>
        <div className="flex flex-wrap">
            {props.children}
        </div>
    </div>
	);
}

export default ContenedorBoton;