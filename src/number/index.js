/**
 * Rounds a number to the specified number of decimal places.
 * @param {number} value - The number to round.
 * @param {number} decimals - The number of decimal places to round to.
 * @returns {number} - The rounded number, or NaN if the input is invalid.
 */
export const roundToDecimals = (value, decimals) => {
  if (typeof value !== "number" || typeof decimals !== "number") return NaN;
  return parseFloat(value.toFixed(decimals));
};

/**
 * Converts degrees to radians.
 * @param {number} degrees - The value in degrees.
 * @returns {number} - The value in radians, or NaN if the input is invalid.
 */
export const degreesToRadians = (degrees) => {
  if (typeof degrees !== "number") return NaN;
  return (degrees * Math.PI) / 180;
};

/**
 * Converts radians to degrees.
 * @param {number} radians - The value in radians.
 * @returns {number} - The value in degrees, or NaN if the input is invalid.
 */
export const radiansToDegrees = (radians) => {
  if (typeof radians !== "number") return NaN;
  return (radians * 180) / Math.PI;
};

/**
 * Calculates a percentage of a value.
 * @param {number} part - The part value.
 * @param {number} total - The total value.
 * @returns {number} - The percentage, or NaN if inputs are invalid.
 */
export const calculatePercentage = (part, total) => {
  if (typeof part !== "number" || typeof total !== "number" || total === 0)
    return NaN;
  return (part / total) * 100;
};

/**
 * Clamps a number within a specified range.
 * @param {number} value - The number to clamp.
 * @param {number} min - The minimum allowable value.
 * @param {number} max - The maximum allowable value.
 * @returns {number} - The clamped number, or NaN if inputs are invalid.
 */
export const clamp = (value, min, max) => {
  if (
    typeof value !== "number" ||
    typeof min !== "number" ||
    typeof max !== "number"
  )
    return NaN;
  return Math.min(Math.max(value, min), max);
};

/**
 * Checks if a number is even.
 * @param {number} value - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
export const isEven = (value) => {
  if (typeof value !== "number") return false;
  return value % 2 === 0;
};

/**
 * Checks if a number is odd.
 * @param {number} value - The number to check.
 * @returns {boolean} - True if the number is odd, false otherwise.
 */
export const isOdd = (value) => {
  if (typeof value !== "number") return false;
  return value % 2 !== 0;
};

/**
 * Generates a random number within a specified range.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random number within the range, or NaN if inputs are invalid.
 */
export const randomInRange = (min, max) => {
  if (typeof min !== "number" || typeof max !== "number" || min > max)
    return NaN;
  return Math.random() * (max - min) + min;
};

/**
 * Sums an array of numbers.
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} - The sum, or NaN if the input is invalid.
 */
export const sumArray = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    !numbers.every((num) => typeof num === "number")
  )
    return NaN;
  return numbers.reduce((sum, num) => sum + num, 0);
};

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - The array of numbers to average.
 * @returns {number} - The average, or NaN if the input is invalid.
 */
export const averageArray = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    !numbers.every((num) => typeof num === "number")
  )
    return NaN;
  const total = sumArray(numbers);
  return numbers.length > 0 ? total / numbers.length : NaN;
};

/**
 * Validates if a value is a number.
 * @param {*} value - The value to validate.
 * @returns {boolean} - True if the value is a number, false otherwise.
 */
export const isNumber = (value) => {
  return typeof value === "number" && !isNaN(value);
};

/**
 * Formats a number with commas as thousands separators.
 * @param {number} value - The number to format.
 * @returns {string} - The formatted number, or an empty string if the input is invalid.
 */
export const formatWithCommas = (value) => {
  if (typeof value !== "number") return "";
  return value.toLocaleString();
};

/**
 * Converts a number to its ordinal representation (e.g., 1 -> "1st").
 * @param {number} value - The number to convert.
 * @returns {string} - The ordinal representation, or an empty string if the input is invalid.
 */
export const toOrdinal = (value) => {
  if (typeof value !== "number" || !Number.isInteger(value)) return "";
  const suffixes = ["th", "st", "nd", "rd"];
  const mod100 = value % 100;
  return `${value}${suffixes[(mod100 - 20) % 10] || suffixes[mod100] || suffixes[0]}`;
};

/**
 * Checks if a number is prime.
 * @param {number} value - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
export const isPrime = (value) => {
  if (typeof value !== "number" || value < 2 || !Number.isInteger(value))
    return false;
  for (let i = 2, sqrt = Math.sqrt(value); i <= sqrt; i++) {
    if (value % i === 0) return false;
  }
  return true;
};

/**
 * Calculates the median of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The median, or NaN if the input is invalid.
 */
export const calculateMedian = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    !numbers.every((num) => typeof num === "number")
  )
    return NaN;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};
