import CourseService from "../application/course/service";
import express, { Request, Response, NextFunction } from "express";
import { Course } from "../entities";
export default class CourseController {
  courseService: CourseService;
  constructor(courseService: CourseService) {
    this.courseService = courseService;
  }
  getCourses = (req: Request, res: Response, next: NextFunction) => {
    try {
      const courses = this.courseService.getAllCourses();
      res.json(courses);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  };
  getCourseById = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const course = this.courseService.getCourseById(id);
      res.json(course);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  };
  deleteCourse = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      this.courseService.deleteCourse(id);
      res.status(200).end();
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  };
  createCourse = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ects, title } = req.body;
      const id = Date.now().toString();      
      const course = new Course(id, title, ects);
      this.courseService.createCourse(course);
      res.json(course);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  };
  editCourse = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ects, title, id } = req.body;
      const course = new Course(id, title, ects);
      this.courseService.updateCourse(course);
      res.json(course);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  };
}
