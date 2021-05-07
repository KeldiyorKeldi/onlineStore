const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('pages/repair', {
		title: "Repair",
		path: '/repair',
		...req.user
	})
})

module.exports = {
	path: '/repair',
	router: router
}
