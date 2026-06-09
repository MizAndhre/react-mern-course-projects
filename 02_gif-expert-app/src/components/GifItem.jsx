export const GifItem = ({ titulo, url, id }) => {
	return (
		<div
			className='border-4 border-teal-500  rounded-[10px] hover:scale-105 hover:cursor-pointer  overflow-hidden 
		hover:shadow-xl hover:shadow-teal-600/50'>
			<img src={url} alt={titulo} className='w-full h-full object-cover  aspect-square ' />

			{/* <p >{titulo}</p> */}
		</div>
	);
};
