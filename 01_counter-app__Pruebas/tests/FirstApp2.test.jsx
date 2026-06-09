import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas 2.0 en <FirstApp/>', () => {
	const titulo = 'Hola Titulo';
	const subtitulo = 'Hola SubTitulo';

	test('debe hacer match snapshot', () => {
		const { container } = render(<FirstApp titulo={titulo} />);

		expect(container).toMatchSnapshot();
	});

	test('should tener mensaje "Hola Titulo"', () => {
		render(<FirstApp titulo={titulo} />);

		expect(screen.getByText(titulo)).toBeTruthy();
		// expect(screen.getByText(titulo)).not.toBeTruthy();

		// screen.debug()
	});

	test('should mostrar titulo en H2', () => {
		render(<FirstApp titulo={titulo} />);

		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(titulo);
	});

	test('should mostrar el subtitulo enviado por props', () => {
		render(<FirstApp titulo={titulo} subtitulo={subtitulo} />);

		expect(screen.getAllByText(subtitulo).length).toBe(2);
	});
});
