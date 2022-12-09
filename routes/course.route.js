import express from 'express';
import auth from '../Middlewares/auth.js';
const router = express.Router();

import {
  AddCourse,
  getAllCourses,
  SearchCourse,
  getOneCourse,
} from '../controllers/course.controller.js';
import Multer from '../Middlewares/multer-config.course.js';

router.get('/course', getAllCourses);

router.get('/onecourse/:id', getOneCourse);

router.post('/course/register', Multer, AddCourse);

router.get('/course/filter', SearchCourse);

export default router;
