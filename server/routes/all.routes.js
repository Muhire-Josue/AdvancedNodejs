import express from 'express';
import BlogController from '../controllers/blog.controller';
import UserController from '../controllers/auth.controller';
import authentication from '../middlewares/authentication';
import authorization from '../middlewares/authorization';

const route = express.Router();

const { getAllBlog, getBlogById, saveBlog } = BlogController;
const { signup, login } = UserController;

// ######## AUTH ########

route.post('/signup', signup);
route.post('/login', login);

// ######## BLOGS ########

route.post('/blog', authentication, saveBlog);
route.get('/blogs', authentication, getAllBlog);
route.get('/blog/:id', authentication, authorization, getBlogById);

export default route;
