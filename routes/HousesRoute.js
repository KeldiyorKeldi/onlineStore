const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('pages/houses', {
		title: "Houses",
		path: '/houses',
		...req.user
	})
})

module.exports = {
	path: '/houses',
	router: router
}
