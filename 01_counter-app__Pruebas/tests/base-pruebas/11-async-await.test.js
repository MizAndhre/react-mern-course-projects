import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Prubeas en 11-async-await', () => {
	test('should getImagen retornar un URL', async () => {
		const url = await getImagen();
		console.log(url);

		expect(typeof url).toBe('string');
	});
});
