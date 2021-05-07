const router = require('express').Router();


router.get('/', (req, res) => {
	res.render('pages/cart', {
		title: "Cart",
		path: '/cart',
		...req.user
	})
})

module.exports = {
	path: '/cart',
	router: router
}
