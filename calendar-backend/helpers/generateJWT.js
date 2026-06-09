const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {
	const payload = { uid, name };

	const token = jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: '2d',
	});

	if (!token) return 'No se pudo generar el token';
	if (token) return token;
};

module.exports = generateJWT;
