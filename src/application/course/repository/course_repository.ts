import { Course } from "../../../entities";
import CourseRepository from "../repository";

export default class InMemoryCourseRepository implements CourseRepository{
    courses:Array<Course>;
    constructor(){
        this.courses = [];
    }
    getAllCourses(): Course[] {
        return this.courses;
    }
   
    getCourseById(id: string): Course {
        const course = this.courses.find((course,index)=>{
            return course;
        })
        if(!course){
            throw new Error("course not found")
        }
        return course;
    }
    deleteCourse(id: string): void {
       const courses = this.courses.filter((course)=>{
           return course.id != id;
       });
       this.courses = courses;
    }
    createCourse(course: Course): void {
        const _course = this.courses.find((_course_)=>{
            return _course_.id == course.id;
        });
        
        
        if(_course){
            throw new Error("course already exist");
        }
        this.courses.push(course);
    }
    updateCourse(course: Course): void {
        for (let i = 0; i < this.courses.length; i++) {
            const _course = this.courses[i];
            if(_course.id == course.id){
                this.courses[i] = course;
                break;
            }
        }
    }

}