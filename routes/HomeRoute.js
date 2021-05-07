const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('pages/index', {
		title: "HomePage",
		path: '/',
		...req.user
	})
})

module.exports = {
	path: '/',
	router: router
}
