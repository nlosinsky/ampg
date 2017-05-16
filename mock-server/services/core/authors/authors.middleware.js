const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/authors', (req, res, next) => {
		const courses = server.db.getState().courses;
		let authors = [];

		courses.forEach((course) => {
            authors = authors.concat(course.authors);
		});

        res.json(authors);
	});
	
	return router;
};
