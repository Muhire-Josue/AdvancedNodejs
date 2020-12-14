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
    const createdUser = User.create(user);
    return createdUser;
  }
}
