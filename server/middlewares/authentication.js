import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader === undefined) {
    res.status(401).json({ error: 'Missing token' });
  }
  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  req.token = bearerToken;
  return jwt.verify(req.token, process.env.JWT_KEY, (error, data) => {
    if (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.user = data;
    return next();
  });
};

export default authentication;
