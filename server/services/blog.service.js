/* eslint-disable require-jsdoc */
import models from '../database/models/blog';

const { Blog } = models;
/**
 * @description blog services
 */
export default class BlogService {
  static async save(blog) {
    const savedBlog = await Blog.create(blog);
    return savedBlog;
  }

  static async findBlogById(id) {
    const blog = await Blog.findOne({ id });
    return blog;
  }

  static async findAllBlog() {
    const blogs = await Blog.findAll();
    return blogs;
  }
}
