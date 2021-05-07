const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('pages/furniture', {
		title: "Furinture",
		path: '/furniture',
		...req.user
	})
})

module.exports = {
	path: '/furniture',
	router: router
}
