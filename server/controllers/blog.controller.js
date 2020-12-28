/* eslint-disable require-jsdoc */
import BlogService from '../services/blog.service';

const { save, findBlogById, findAllBlog } = BlogService;
export default class BlogController {
  static async saveBlog(req, res) {
    try {
      const blog = req.body;
      blog.userId = req.user.id;
      const data = await save(blog);
      return res.status(201).json({ data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  }

  static async getBlogById(req, res) {
    const { id } = req.params;
    const blog = await findBlogById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    return res.json({ data: blog });
  }

  static async getAllBlog(req, res) {
    const userId = req.user.id;
    const blogs = await findAllBlog(userId);
    return res.json({ data: blogs });
  }
}
