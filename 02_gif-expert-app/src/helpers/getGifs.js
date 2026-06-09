export const getGifs = async (categoria) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=bkK8p6ByqN42Kf189ahVrY4ptzkf68GE&q=${categoria}&limit=12`;

	const respuesta = await fetch(url);
	const { data } = await respuesta.json();

	const gifs = data.map((img) => ({
		id: img.id,
		titulo: img.title,
		url: img.images.downsized_medium.url,
	}));

	return gifs;
};
