import AuthService from '../services/auth.service';
import { encryptPassword, checkPassword } from '../utils/bcrypt.util';
import { encodeJwt } from '../utils/jwt.util';

const { save, findUserByEmail } = AuthService;

/**
 * @description Authentication controller
 */
export default class AuthController {
  /**
   * @description creates a user
   * @param {Request} req
   * @param {Response} res
   * @returns {object} created user
   */
  static async signup(req, res) {
    const { password } = req.body;
    const formData = req.body;
    formData.password = encryptPassword(password);
    const user = await save(formData);
    return res.status(201).json({ data: user });
  }

  /**
   * @description login a user
   * @param {Request} req
   * @param {Response} res
   * @returns {object} login user
   */
  static async login(req, res) {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Authentication failed' });
    }
    const hashedPassword = user.dataValues.password;
    if (!checkPassword(password, hashedPassword)) {
      return res.status(400).json({ error: 'Authentication failed' });
    }
    const { name, email: userEmail, id } = user.dataValues;
    const token = encodeJwt({ name, userEmail, id });
    return res.json({ token });
  }
}
