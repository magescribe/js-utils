/**
 * Escapes special HTML characters in a string to prevent XSS attacks.
 * @param {string} str - The string to sanitize.
 * @returns {string} - The sanitized string.
 */
export const sanitizeHTML = (str) => {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

/**
 * Checks if a string contains potential SQL injection patterns.
 * @param {string} input - The string to validate.
 * @returns {boolean} - True if the input is safe, false otherwise.
 */
export const isSafeSQLInput = (input) => {
  const sqlInjectionPatterns = /('|--|;|\/\*|\*\/|xp_)/i;
  return !sqlInjectionPatterns.test(input);
};

/**
 * Creates a secure cookie string.
 * @param {string} name - The cookie name.
 * @param {string} value - The cookie value.
 * @param {Object} options - Additional options (e.g., maxAge, httpOnly).
 * @returns {string} - The secure cookie string.
 */
export const createSecureCookie = (name, value, options = {}) => {
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;
  if (options.maxAge) cookie += ` Max-Age=${options.maxAge};`;
  if (options.domain) cookie += ` Domain=${options.domain};`;
  if (options.path) cookie += ` Path=${options.path};`;
  if (options.httpOnly) cookie += " HttpOnly;";
  if (options.secure) cookie += " Secure;";
  if (options.sameSite) cookie += ` SameSite=${options.sameSite};`;
  return cookie;
};

export const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};
