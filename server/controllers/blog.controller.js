/* eslint-disable require-jsdoc */
import BlogService from '../services/blog.service';

const { save } = BlogService;
export default class BlogController {
  static async saveBlog(req, res) {
    try {
      const blog = req.body;
      blog.userId = req.userId;
      const data = await save(blog);
      return res.status(201).json({ data });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
