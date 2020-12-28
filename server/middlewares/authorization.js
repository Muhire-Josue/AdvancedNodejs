import BlogService from '../services/blog.service';

const { findBlogById } = BlogService;

const authorization = async (req, res, next) => {
  const userId = req.user.id;
  const { id } = req.params;
  const blog = await findBlogById(id);
  if (blog.dataValues.userId !== userId) {
    return res.status(403).json({ error: 'Access denied' });
  }
  return next();
};

export default authorization;
