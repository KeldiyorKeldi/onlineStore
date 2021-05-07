const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('pages/technical', {
		title: "Technical",
		path: '/technical',
		...req.user
	})
})

module.exports = {
	path: '/technical',
	router: router
}
