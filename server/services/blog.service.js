/* eslint-disable require-jsdoc */
import models from '../database/models/index';

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
    const blog = await Blog.findOne({ where: { id } });
    return blog;
  }

  static async findAllBlog(userId) {
    const blogs = await Blog.findAll({ where: { userId } });
    return blogs;
  }
}
