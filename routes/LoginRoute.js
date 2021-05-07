const router = require('express').Router();

const { findUser } = require('../models/UserModel');

const {confirmHash} = require('../modules/crypt');
const {generateToken} = require('../modules/jwt');



router.get('/', (req, res) => {
	res.render('pages/login', {
		title: 'LoginPage',
		path: '/login',
		error: "",
		user_name: req.user?.name,
		email: req.user?.email
	})
	console.log(req.user)
})

router.post('/', async (req, res) => {
	try {
		let {email, password} = req.body;
		// console.log(email,password)		
		if(!(email && password)) throw 'Email or Password not found';
		let user = await findUser(email);
		// console.log(user)
		if(!user) throw 'User not found';
		let isTrust = await confirmHash(password, user.password);
		if(!isTrust) throw 'Password is incorrect';
		let token = generateToken({email: user.email});
		// console.log(token)
		res.cookie('token',token).redirect('/');
	}
	catch(e){
		res.render('pages/login', {
			title: 'LoginPage',
			path: '/login',
			error: e + "",
			user_name: req.user?.name,
			email: req.user?.email
		})
	}
})

module.exports = {
	path: '/login',
	router: router
}

