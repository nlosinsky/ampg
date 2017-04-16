exports.filterOldCourses = (courses) => {
    const millisecondInOneDay = 86400000;
    const fourteenDaysDiff = new Date().getTime() - 14 * millisecondInOneDay;

    return courses.filter(el => new Date(el.date) >= new Date(fourteenDaysDiff));
};

exports.searchAction = (courses, query) => {
    if (query) {
        return courses.filter(val => val.name.toLowerCase().indexOf(query) !== -1);
    }

    return courses;
};