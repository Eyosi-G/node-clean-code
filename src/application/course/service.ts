import { Course } from "../../entities";

export default interface CourseService {
    getAllCourses():Array<Course> ;
    getCourseById(id:string):Course  ;
    deleteCourse(id:string):void;
    createCourse(course:Course):void;
    updateCourse(course:Course):void;
}
