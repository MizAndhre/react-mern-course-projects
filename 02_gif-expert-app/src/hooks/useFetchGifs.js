import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
	const [imagenes, setImagenes] = useState([]);
	const [cargando, setCargando] = useState(true);

	const obtenerImagenes = async () => {
		const nuevasImagenes = await getGifs(categoria);
		setImagenes(nuevasImagenes);
		setCargando(false);
	};

	useEffect(() => {
		obtenerImagenes();
	}, []);

	return {
		imagenes,
		cargando,
	};
};
