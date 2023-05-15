import React from "react";
import { Icon } from '@iconify/react';


const Habilidades = (props) => {

  return(
		<div className="w-full px-4 my-2">
			<div className="flex flex-row justify-between">
				<p className="font-bold">{props.Nombrehabilidad}</p>
				<div className="flex">
					<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
					<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
					<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
				</div>
			</div>
			<p className="text-gray-800 text-sm leading-4 h-16 overflow-y-scroll scrollbar-thumb-blue scrollbar-track-gray-200">
				{ props.habilidad.data ? props.habilidad.data.effect_entries[0].effect : false}
			</p>
		</div>
	);
}

export default Habilidades;