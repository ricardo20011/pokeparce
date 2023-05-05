import React from "react";
import IconoImagen from '../img/IconoHeader.png';
import { Icon } from '@iconify/react';

const Header = () => {
  return(
		<div className="sticky flex items-center top-0 left-0 w-full bg-azulOscuro h-18 mx-auto">
			<div className="w-10/12 mx-auto flex justify-between">
				
				<img className="w-72" src={IconoImagen} alt=""/>

				<div className="w-96 flex items-center">
					<input className="w-10/12 h-9 rounded-xl px-3" type="text" name="" placeholder="Escribe nombre de pokemon..." id="" />
					<Icon className="relative" icon="ph:magnifying-glass-bold" color="white" width="30" />
				</div>

				<div className="grid grid-cols-2 grid-rows-2">
					<div className="flex mx-4 items-center">
						<Icon icon="ion:logo-facebook" color="white" width="25" />
						<h3 className="text-sm text-white ml-1">Sigueme en facebook</h3>
					</div>
					<div className="flex mx-4 items-center">
						<Icon icon="ph:linkedin-logo-fill" color="white" width="28" />
						<h3 className="text-sm text-white ml-1">Sigueme en Linkedin</h3>
					</div>
					<div className="flex mx-4 items-center">
						<Icon icon="iconoir:figma" color="white" width="28" />
						<h3 className="text-sm text-white ml-1">Sigueme en Figma</h3>
					</div>
					<div className="flex mx-4 items-center">
						<Icon icon="radix-icons:github-logo" color="white" width="23" />
						<h3 className="text-sm text-white ml-1">Sigueme en GitHub</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;