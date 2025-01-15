/**
 * Capitalize the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} String with the first letter capitalized.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const capitalizeFirstLetter = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  if (str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Capitalize the first letter of each word in a string.
 * @param {string} str - The input string.
 * @returns {string} String with each word capitalized.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const capitalizeWords = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Reverse a string.
 * @param {string} str - The input string.
 * @returns {string} Reversed string.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.split("").reverse().join("");
};

/**
 * Remove all whitespace from a string.
 * @param {string} str - The input string.
 * @returns {string} String without whitespace.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const trimAll = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.replace(/\s+/g, "");
};

/**
 * Convert a string to a URL-friendly slug.
 * @param {string} str - The input string.
 * @returns {string} Slugified string.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const slugify = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
};

/**
 * Check if a string is empty or contains only whitespace.
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is empty, false otherwise.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const isEmpty = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.trim().length === 0;
};

/**
 * Check if a string is a palindrome.
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const isPalindrome = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  const cleaned = str.replace(/[\W_]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
};

/**
 * Check if a string contains only numeric characters.
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is numeric, false otherwise.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const isNumeric = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return /^\d+$/.test(str);
};

/**
 * Replace all occurrences of a substring in a string.
 * @param {string} str - The input string.
 * @param {string} find - The substring to find.
 * @param {string} replace - The substring to replace with.
 * @returns {string} Modified string.
 * @throws {TypeError} Throws if any input is not a string.
 */
export const replaceAll = (str, find, replace) => {
  if (
    typeof str !== "string" ||
    typeof find !== "string" ||
    typeof replace !== "string"
  ) {
    throw new TypeError("All inputs must be strings");
  }
  return str.split(find).join(replace);
};

/**
 * Truncate a string to a specified length and append a suffix if truncated.
 * @param {string} str - The input string.
 * @param {number} length - Maximum length of the string.
 * @param {string} [suffix='...'] - Suffix to append if truncated.
 * @returns {string} Truncated string.
 * @throws {TypeError} Throws if the input is not valid.
 */
export const truncateString = (str, length, suffix = "...") => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  if (typeof length !== "number" || length < 0) {
    throw new TypeError("Length must be a positive number");
  }
  if (typeof suffix !== "string") {
    throw new TypeError("Suffix must be a string");
  }
  return str.length > length ? str.slice(0, length) + suffix : str;
};

/**
 * Remove special characters from a string.
 * @param {string} str - The input string.
 * @returns {string} String without special characters.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const removeSpecialCharacters = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.replace(/[^a-zA-Z0-9 ]/g, "");
};

/**
 * Convert a camelCase string to kebab-case.
 * @param {string} str - The input string.
 * @returns {string} Kebab-case string.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const camelToKebab = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

/**
 * Convert a kebab-case string to camelCase.
 * @param {string} str - The input string.
 * @returns {string} CamelCase string.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const kebabToCamel = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
};

/**
 * Count the occurrences of a substring in a string.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to count.
 * @returns {number} Number of occurrences.
 * @throws {TypeError} Throws if the input is not valid.
 */
export const countOccurrences = (str, substring) => {
  if (typeof str !== "string" || typeof substring !== "string") {
    throw new TypeError("Both inputs must be strings");
  }
  return str.split(substring).length - 1;
};

/**
 * Check if a string starts with a specified substring.
 * @param {string} str - The input string.
 * @param {string} prefix - The prefix to check.
 * @returns {boolean} True if the string starts with the prefix, false otherwise.
 * @throws {TypeError} Throws if the input is not valid.
 */
export const startsWith = (str, prefix) => {
  if (typeof str !== "string" || typeof prefix !== "string") {
    throw new TypeError("Both inputs must be strings");
  }
  return str.startsWith(prefix);
};

/**
 * Check if a string ends with a specified substring.
 * @param {string} str - The input string.
 * @param {string} suffix - The suffix to check.
 * @returns {boolean} True if the string ends with the suffix, false otherwise.
 * @throws {TypeError} Throws if the input is not valid.
 */
export const endsWith = (str, suffix) => {
  if (typeof str !== "string" || typeof suffix !== "string") {
    throw new TypeError("Both inputs must be strings");
  }
  return str.endsWith(suffix);
};

/**
 * Convert a string to title case.
 * @param {string} str - The input string.
 * @returns {string} Title-cased string.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const toTitleCase = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Pad the start of a string with a specified character.
 * @param {string} str - The input string.
 * @param {number} targetLength - Desired length of the string.
 * @param {string} [padChar=' '] - Character to pad with.
 * @returns {string} Padded string.
 * @throws {TypeError} Throws if the input is not valid.
 */
export const padStart = (str, targetLength, padChar = " ") => {
  if (
    typeof str !== "string" ||
    typeof targetLength !== "number" ||
    typeof padChar !== "string"
  ) {
    throw new TypeError("Invalid input types");
  }
  return str.padStart(targetLength, padChar);
};

/**
 * Pad the end of a string with a specified character.
 * @param {string} str - The input string.
 * @param {number} targetLength - Desired length of the string.
 * @param {string} [padChar=' '] - Character to pad with.
 * @returns {string} Padded string.
 * @throws {TypeError} Throws if the input is not valid.
 */
export const padEnd = (str, targetLength, padChar = " ") => {
  if (
    typeof str !== "string" ||
    typeof targetLength !== "number" ||
    typeof padChar !== "string"
  ) {
    throw new TypeError("Invalid input types");
  }
  return str.padEnd(targetLength, padChar);
};

/**
 * Base64 encode a string.
 * @param {string} str - The input string.
 * @returns {string} Base64 encoded string.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const base64Encode = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return btoa(unescape(encodeURIComponent(str)));
};

/**
 * Base64 decode a string.
 * @param {string} str - The Base64 encoded string.
 * @returns {string} Decoded string.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const base64Decode = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return decodeURIComponent(escape(atob(str)));
};

/**
 * Escape HTML entities in a string.
 * @param {string} str - The input string.
 * @returns {string} String with HTML entities escaped.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const escapeHTML = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.replace(
    /[&<>"']/g,
    (match) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[match],
  );
};

/**
 * Unescape HTML entities in a string.
 * @param {string} str - The input string.
 * @returns {string} String with HTML entities unescaped.
 * @throws {TypeError} Throws if the input is not a string.
 */
export const unescapeHTML = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.replace(
    /&amp;|&lt;|&gt;|&quot;|&#39;/g,
    (match) =>
      ({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      })[match],
  );
};
