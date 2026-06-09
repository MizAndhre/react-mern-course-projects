//

import { useState } from "react";
import { AgregarCategoria, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categorias, setCategorias] = useState(["Adele"]);

	const onAgregarCategoria = (nuevaCategoria) => {
		if (categorias.includes(nuevaCategoria)) return;
		setCategorias([nuevaCategoria, ...categorias]);
	};

	return (
		<>
			<main>
				<h1 className=' text-teal-500 font-extrabold text-6xl animate__animated animate__pulse'>
					GifExpert App
				</h1>

				<AgregarCategoria onNuevaCategoria={onAgregarCategoria} />

				{categorias.map((categoria) => {
					return <GifGrid categoria={categoria} key={categoria} />;
				})}
			</main>
		</>
	);
};
