/* eslint-disable max-len */
import bcrypt from 'bcrypt';

/**
 * @description hashes a plainText password
 * @param {string} plainTextPassword
 * @returns {string} encrypted password
 */
export const encryptPassword = (plainTextPassword) => bcrypt.hashSync(plainTextPassword, 10);

/**
 * @param {string} plainTextPassword
 * @param {string} encryptedPassword
 * @returns {boolean} it returns true if the plain password is equivalent to the hashed password
 */

export const checkPassowrds = (plainTextPassword, encryptedPassword) => bcrypt.compareSync(plainTextPassword, encryptedPassword);
