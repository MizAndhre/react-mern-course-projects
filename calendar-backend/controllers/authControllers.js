const { response } = require('express');

const bcrypt = require('bcrypt');
const generateJWT = require('../helpers/generateJWT');

const User = require('../models/User');

const createUser = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		//verify is a user exits
		const userExist = await User.findOne({ email });
		if (userExist) {
			return res.status(400).json({
				ok: false,
				msg: 'Usuario existente con ese correo electrónico',
			});
		}

		const user = new User(req.body);

		//hash password
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(password, salt);

		//save in db
		await user.save();

		res.status(201).json({
			ok: true,
			uid: user.id,
			name: user.name,
			token: generateJWT(user.id, user.name),
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el Administrador',
		});
	}
};

const loginUser = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({
				ok: false,
				msg: 'No hay usuario existente con ese correo electrónico',
			});
		}

		//confirm passwords
		const validPassword = bcrypt.compareSync(password, user.password);

		if (!validPassword) {
			return res.status(400).json({
				ok: false,
				msg: 'La contraseña no es válida',
			});
		}

		//generate a JWT

		return res.json({
			ok: true,
			uid: user.id,
			name: user.name,
			token: generateJWT(user.id, user.name),
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el Administrador',
		});
	}
};

const revalidateToken = (req, res = response) => {
	const { uid, name } = req;

	res.json({
		ok: true,
		token: generateJWT(uid, name),
		uid,
		name,
	});
};

module.exports = {
	createUser,
	loginUser,
	revalidateToken,
};
