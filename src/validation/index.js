/**
 * Validates if a value is an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the value is a valid email address, false otherwise.
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validates if a value is a URL.
 * @param {string} url - The URL to validate.
 * @returns {boolean} - True if the value is a valid URL, false otherwise.
 */
export const isValidURL = (url) => {
  const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/i;
  return regex.test(url);
};

/**
 * Validates if a value is a phone number.
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} - True if the value is a valid phone number, false otherwise.
 */
export const isValidPhoneNumber = (phone) => {
  const regex = /^\+[1-9]\d{1,14}$/; // International format (E.164)
  return regex.test(phone);
};

/**
 * Validates if a value is a valid integer.
 * @param {*} value - The value to validate.
 * @returns {boolean} - True if the value is a valid integer, false otherwise.
 */
export const isInteger = (value) => {
  return Number.isInteger(value);
};

/**
 * Validates if a value is a valid float.
 * @param {*} value - The value to validate.
 * @returns {boolean} - True if the value is a valid float, false otherwise.
 */
export const isFloat = (value) => {
  return (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)
  );
};

/**
 * Validates if a string contains only alphabetic characters.
 * @param {string} str - The string to validate.
 * @returns {boolean} - True if the string contains only alphabetic characters, false otherwise.
 */
export const isAlpha = (str) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(str);
};

/**
 * Validates if a string contains only alphanumeric characters.
 * @param {string} str - The string to validate.
 * @returns {boolean} - True if the string contains only alphanumeric characters, false otherwise.
 */
export const isAlphanumeric = (str) => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(str);
};

/**
 * Validates if a string is a valid password.
 * Criteria: At least 8 characters, includes one uppercase letter, one lowercase letter, and one number.
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if the password meets the criteria, false otherwise.
 */
export const isValidPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
};

/**
 * Validates if a value is a valid credit card number.
 * @param {string} cardNumber - The credit card number to validate.
 * @returns {boolean} - True if the value is a valid credit card number, false otherwise.
 */
export const isValidCreditCard = (cardNumber) => {
  const regex = /^\d{13,19}$/; // Basic validation for numeric length
  return regex.test(cardNumber);
};

/**
 * Validates if a value is a valid date string (YYYY-MM-DD).
 * @param {string} date - The date string to validate.
 * @returns {boolean} - True if the value is a valid date, false otherwise.
 */
export const isValidDateString = (date) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(date) && !isNaN(new Date(date).getTime());
};

/**
 * Validates if an object has all the required keys.
 * @param {Object} obj - The object to validate.
 * @param {string[]} keys - The required keys.
 * @returns {boolean} - True if the object contains all required keys, false otherwise.
 */
export const hasRequiredKeys = (obj, keys) => {
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
};

/**
 * Validates if a string contains only whitespace.
 * @param {string} str - The string to validate.
 * @returns {boolean} - True if the string contains only whitespace, false otherwise.
 */
export const isWhitespace = (str) => {
  return str.trim().length === 0;
};

/**
 * Validates if a value is a valid JSON string.
 * @param {string} jsonString - The string to validate.
 * @returns {boolean} - True if the string is valid JSON, false otherwise.
 */
export const isValidJSON = (jsonString) => {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Validates if a value is a positive number.
 * @param {number} value - The number to validate.
 * @returns {boolean} - True if the value is a positive number, false otherwise.
 */
export const isPositiveNumber = (value) => {
  return typeof value === "number" && value > 0;
};

/**
 * Validates if a value is a non-empty array.
 * @param {Array} array - The array to validate.
 * @returns {boolean} - True if the array is non-empty, false otherwise.
 */
export const isNonEmptyArray = (array) => {
  return Array.isArray(array) && array.length > 0;
};
