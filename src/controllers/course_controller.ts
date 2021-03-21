import CourseService from "../application/course/service";
import express, { Request, Response, NextFunction } from "express";
import { Course } from "../entities";
export default class CourseController {
  courseService: CourseService;
  constructor(courseService: CourseService) {
    this.courseService = courseService;
  }
  getCourses = (req: Request, res: Response, next: NextFunction) => {
    const courses = this.courseService.getAllCourses();
    res.json(courses);
  };
  getCourseById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const course = this.courseService.getCourseById(id);
    res.json(course);
  };
  deleteCourse = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    this.courseService.deleteCourse(id);
    res.status(200).end();
  };
  createCourse = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ects, title } = req.body;
      const id = new Date().toISOString()
      const course = new Course(id, title, ects);
      this.courseService.createCourse(course);
      res.status(200).end();
    } catch (e) {
      res.status(401).end();
    }
  };
  editCourse = (req: Request, res: Response, next: NextFunction) => {
    const { ects, title, id } = req.body;
    const course = new Course(id, title, ects);
    this.courseService.updateCourse(course);
    res.status(200).end();
  };
}
