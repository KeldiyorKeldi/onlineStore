const router = require('express').Router();
const users = require('../data');
const {generateHash} = require('../modules/crypt');
const {v4: uuidv4} = require('uuid');

const {createUser} = require('../models/UserModel'); 


router.get('/registration', (req, res) => {
	res.render('pages/registration', {
		title: 'RegistrationPage',
		path: '/registration',
		error: "",
		user_name: req.user?.name,
		email: req.user?.email
	})
})


router.post('/registration', async (req, res) => {
	try{
		let {email, name, password} = req.body;
		// console.log(email,name,password)
		if(!(email && name && password))
			 throw new Error('Field are not completed');

		password = await generateHash(password);
		
		await createUser(email, name, password)


		res.redirect('/login');
	} catch(e){
		res.render('pages/registration',{
			title: 'RegistrationPage',
			path: 'registration',
			error: e + "",
			user_name: req.user?.name,
			email: req.user?.email
		})
	}
})


module.exports = {
	path: '/',
	router: router
}

function findUser(email){
	return users.find(user => user.email == email)
}