/**
 * Deeply clones an object.
 * @param {Object} obj - The object to clone.
 * @returns {Object} - A deep clone of the object, or null if the input is not an object.
 */
export const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return null;
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Checks if two objects are deeply equal.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {boolean} - True if the objects are deeply equal, false otherwise.
 */
export const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
};

/**
 * Merges two or more objects into one.
 * @param {...Object} objs - The objects to merge.
 * @returns {Object} - The merged object.
 */
export const mergeObjects = (...objs) => {
  return Object.assign({}, ...objs);
};

/**
 * Removes specified keys from an object.
 * @param {Object} obj - The source object.
 * @param {string[]} keys - The keys to remove.
 * @returns {Object} - A new object without the specified keys.
 */
export const omitKeys = (obj, keys) => {
  if (typeof obj !== "object" || obj === null) return {};
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

/**
 * Picks specified keys from an object.
 * @param {Object} obj - The source object.
 * @param {string[]} keys - The keys to pick.
 * @returns {Object} - A new object with only the specified keys.
 */
export const pickKeys = (obj, keys) => {
  if (typeof obj !== "object" || obj === null) return {};
  return keys.reduce((result, key) => {
    if (key in obj) result[key] = obj[key];
    return result;
  }, {});
};

/**
 * Checks if an object is empty (has no keys).
 * @param {Object} obj - The object to check.
 * @returns {boolean} - True if the object is empty, false otherwise.
 */
export const isEmptyObject = (obj) => {
  return obj && typeof obj === "object" && Object.keys(obj).length === 0;
};

/**
 * Freezes an object to make it immutable.
 * @param {Object} obj - The object to freeze.
 * @returns {Object} - The frozen object.
 */
export const freezeObject = (obj) => {
  if (typeof obj !== "object" || obj === null) return null;
  return Object.freeze(obj);
};

/**
 * Gets the value at a specified path in an object.
 * @param {Object} obj - The source object.
 * @param {string} path - The path to the value (e.g., "a.b.c").
 * @returns {*} - The value at the specified path, or undefined if not found.
 */
export const getValueAtPath = (obj, path) => {
  if (typeof obj !== "object" || obj === null || typeof path !== "string")
    return undefined;
  return path
    .split(".")
    .reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
      obj,
    );
};

/**
 * Sets a value at a specified path in an object.
 * @param {Object} obj - The source object.
 * @param {string} path - The path to set the value (e.g., "a.b.c").
 * @param {*} value - The value to set.
 * @returns {Object} - The updated object.
 */
export const setValueAtPath = (obj, path, value) => {
  if (typeof obj !== "object" || obj === null || typeof path !== "string")
    return obj;
  const keys = path.split(".");
  const lastKey = keys.pop();
  const target = keys.reduce((acc, key) => {
    if (!acc[key] || typeof acc[key] !== "object") acc[key] = {};
    return acc[key];
  }, obj);
  target[lastKey] = value;
  return obj;
};

/**
 * Validates if a value is a plain object.
 * @param {*} value - The value to validate.
 * @returns {boolean} - True if the value is a plain object, false otherwise.
 */
export const isPlainObject = (value) => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

/**
 * Flattens a nested object into a single level.
 * @param {Object} obj - The object to flatten.
 * @param {string} [prefix] - The prefix for nested keys.
 * @returns {Object} - The flattened object.
 */
export const flattenObject = (obj, prefix = "") => {
  if (typeof obj !== "object" || obj === null) return {};
  return Object.keys(obj).reduce((result, key) => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = value;
    }
    return result;
  }, {});
};

/**
 * Expands a flattened object back to its nested structure.
 * @param {Object} obj - The flattened object.
 * @returns {Object} - The nested object.
 */
export const unflattenObject = (obj) => {
  if (typeof obj !== "object" || obj === null) return {};
  return Object.keys(obj).reduce((result, key) => {
    const keys = key.split(".");
    keys.reduce((acc, part, index) => {
      if (index === keys.length - 1) acc[part] = obj[key];
      else acc[part] = acc[part] || {};
      return acc[part];
    }, result);
    return result;
  }, {});
};
