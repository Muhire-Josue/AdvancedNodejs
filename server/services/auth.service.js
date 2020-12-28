import models from '../database/models/index';

const { User } = models;

/**
 * Authentication service
 */
export default class AuthService {
  /**
   * @description creates a new user
   * @param {object} user
   *@returns {object} it returns the created user
   */
  static async save(user) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  /**
   * @description finds a user by email
   * @param {string} email
   * @returns {object} it returns the user that was found
   */
  static async findUserByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}
