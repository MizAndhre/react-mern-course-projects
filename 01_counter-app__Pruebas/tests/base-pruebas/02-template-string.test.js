import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
	test('should getSaludo retornar Hola más nombre', () => {
		const name = 'Andrea';
		const message = getSaludo(name);

		expect(message).toBe(`Hola ${name}`);
	});
});
