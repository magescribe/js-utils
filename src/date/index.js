/**
 * Gets the current date in a specified format.
 * @param {string} format - The desired format (e.g., "YYYY-MM-DD", "MM/DD/YYYY").
 * @returns {string} - The formatted date string.
 */
export const getCurrentDate = (format = "YYYY-MM-DD") => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  switch (format) {
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    case "DD-MM-YYYY":
      return `${day}-${month}-${year}`;
    default:
      return `${year}-${month}-${day}`;
  }
};

/**
 * Adds or subtracts days from a date.
 * @param {Date} date - The starting date.
 * @param {number} days - The number of days to add (use negative for subtraction).
 * @returns {Date} - The resulting date.
 */
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * Calculates the difference in days between two dates.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number} - The difference in days.
 */
export const differenceInDays = (date1, date2) => {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};

/**
 * Checks if a date is in the past.
 * @param {Date} date - The date to check.
 * @returns {boolean} - True if the date is in the past, false otherwise.
 */
export const isPastDate = (date) => {
  return new Date(date) < new Date();
};

/**
 * Formats a date into a readable string.
 * @param {Date} date - The date to format.
 * @param {string} locale - The locale for formatting (e.g., "en-US").
 * @param {Object} options - Formatting options.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (
  date,
  locale = "en-US",
  options = { year: "numeric", month: "long", day: "numeric" },
) => {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

/**
 * Converts a date string to a Date object.
 * @param {string} dateString - The date string (e.g., "2024-12-30").
 * @returns {Date} - The resulting Date object.
 */
export const parseDate = (dateString) => {
  return new Date(dateString);
};

/**
 * Gets the start of the day for a given date.
 * @param {Date} date - The date.
 * @returns {Date} - The start of the day (midnight).
 */
export const getStartOfDay = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

/**
 * Gets the end of the day for a given date.
 * @param {Date} date - The date.
 * @returns {Date} - The end of the day (23:59:59).
 */
export const getEndOfDay = (date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59,
  );
};

/**
 * Validates if a value is a valid Date object.
 * @param {*} value - The value to validate.
 * @returns {boolean} - True if the value is a valid Date object, false otherwise.
 */
export const isValidDate = (value) => {
  return value instanceof Date && !isNaN(value);
};

/**
 * Converts a timestamp to a Date object.
 * @param {number} timestamp - The timestamp (in milliseconds).
 * @returns {Date} - The resulting Date object.
 */
export const timestampToDate = (timestamp) => {
  return new Date(timestamp);
};

/**
 * Gets the current time as a formatted string.
 * @param {string} format - The desired format (e.g., "HH:mm:ss", "HH:mm").
 * @returns {string} - The formatted time string.
 */
export const getCurrentTime = (format = "HH:mm:ss") => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  switch (format) {
    case "HH:mm:ss":
      return `${hours}:${minutes}:${seconds}`;
    case "HH:mm":
      return `${hours}:${minutes}`;
    default:
      return `${hours}:${minutes}:${seconds}`;
  }
};

/**
 * Adds or subtracts months from a date.
 * @param {Date} date - The starting date.
 * @param {number} months - The number of months to add (use negative for subtraction).
 * @returns {Date} - The resulting date.
 */
export const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

/**
 * Checks if two dates are on the same day.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {boolean} - True if the dates are on the same day, false otherwise.
 */
export const isSameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
