import express from 'express';
import BlogController from '../controllers/blog.controller';
import authentication from '../middlewares/authentication';

const { getAllBlog, getBlogById, saveBlog } = BlogController;

const route = express.Router();

route.post('/blog', authentication, saveBlog);
route.get('/blogs', authentication, getAllBlog);
route.get('/blog/:id', authentication, getBlogById);

export default route;
