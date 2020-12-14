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
}
