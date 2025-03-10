import courseRepository from '../repositories/CourseRepository.js'

const saveCourse = (CourseModel) => {
    return courseRepository.saveCourse(CourseModel);
}

const getCourseById = (id) => {
    return courseRepository.getCourseById(id);
}

const getAllCourses = () => {
    return courseRepository.getCourses();
}

const deleteCourseById = (id) => {
    return courseRepository.deleteCourseById(id);
}

const updateCourseById = (id, CourseModel) => {
    return courseRepository.updateCourseById(id, CourseModel);
}

const service = {

}

export default service;