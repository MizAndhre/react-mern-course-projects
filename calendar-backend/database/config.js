const mongoose = require('mongoose');

const databaseConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION);

		console.log('DB Online');
	} catch (error) {
		console.log(error);
		throw new Error('Error al iniciar DB');
	}
};

module.exports = {
	databaseConnection,
};
