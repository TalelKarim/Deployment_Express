import express from 'express';
import auth from '../Middlewares/auth.js';
const router = express.Router();

import {
  getAllUsers,
  Registration,
  Login,
  SearchUser,
  filterUsers,
  updateUser,
  getOneUser,
} from '../controllers/user.controller.js';

import Multer from '../Middlewares/multer-config.user.js';

router.get('/user/check',  filterUsers);

router.get('/user',  getAllUsers);

router.get('/oneuser/:id',  getOneUser);

router.post('/user/register', Multer, Registration);

router.put('/user/update/:id', Multer,  updateUser);

router.post('/user/login', Multer, Login);

router.get('/user/filter',  SearchUser);

export default router;
