const express = require('express');
const router = express.Router();
const url = require('url');
const helpers = require('./courses.helpers');


module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		const url_parts = url.parse(req.originalUrl, true);
		const query = url_parts.query;
		const from = query.start;
		let to = +query.start + +query.count;
		const sort = query.sort;
		const queryStr = query.query;
		let courses = helpers.filterOldCourses(server.db.getState().courses);

		courses = helpers.searchAction(courses, queryStr);

        const coursesCount = courses.length;

		if (courses.length < to) {
		  	to = courses.length;
		}

		if (from && to) {
            courses = courses.slice(from, to);
		}
		
		res.json({ courses, coursesCount });
	});
	
	return router;
};
