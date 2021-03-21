import { Course } from "../../../entities";
import CourseRepository from "../repository";
import CourseService from "../service";

export default class Service implements CourseService {
    repository:CourseRepository
    constructor(repository:CourseRepository){
        this.repository = repository;
    }
    getAllCourses(): Course[] {
        return this.repository.getAllCourses();
    }
    getCourseById(id: string): Course{
        return this.repository.getCourseById(id);
    }
    deleteCourse(id: string): void {
        return this.repository.deleteCourse(id);
    }
    createCourse(course: Course): void {
        return this.repository.createCourse(course);
    }
    updateCourse(course: Course): void {
        return this.repository.updateCourse(course);
    }

}