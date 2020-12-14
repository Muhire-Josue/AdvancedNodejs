import express from 'express';
import BlogController from '../controllers/blog.controller';

const { getAllBlog, getBlogById, saveBlog } = BlogController;

const route = express.Router();

route.post('/blog', saveBlog);
route.get('/blogs', getAllBlog);
route.get('/blog/:id', getBlogById);

export default route;
