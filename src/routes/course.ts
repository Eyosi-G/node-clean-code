import express from 'express';
import courseController from "../controllers/course_controller";
import CourseService from '../application/course/service';
const courseRoute = (courseService:CourseService) => {  
  const controller = new courseController(courseService);
  const router = express.Router();
  router
    .route("/courses")
    .post(controller.createCourse)
    .get(controller.getCourses)
    .put(controller.editCourse);
  router
    .route("/courses/:id")
    .get(controller.getCourseById)
    .delete(controller.deleteCourse);
  return router;
};

export default  courseRoute;
