const express = require('express');
const router = express.Router();
const url = require('url');

function filterOldCourses(courses) {
    const millisecondInOneDay = 86400000;
    const fourteenDaysDiff = new Date().getTime() - 14 * millisecondInOneDay;

    return courses.filter(el => new Date(el.date) >= new Date(fourteenDaysDiff));
}

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		const url_parts = url.parse(req.originalUrl, true);
		const query = url_parts.query;
		const from = query.start;
		let to = +query.start + +query.count;
		const sort = query.sort;
		const queryStr = query.query;
		let courses = filterOldCourses(server.db.getState().courses);


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
