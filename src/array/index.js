/**
 * Removes duplicate elements from an array.
 * @param {Array} arr - The array to remove duplicates from.
 * @returns {Array} A new array with duplicates removed.
 * @throws {TypeError} If the input is not an array.
 */
export const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return [...new Set(arr)];
};

/**
 * Flattens a nested array up to the specified depth.
 * @param {Array} arr - The nested array to flatten.
 * @param {number} [depth=1] - The depth level to flatten the array.
 * @returns {Array} A flattened array.
 * @throws {TypeError} If the input is not an array or depth is not a valid number.
 */
export const flattenArray = (arr, depth = 1) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof depth !== "number" || depth < 0)
    throw new TypeError("Depth must be a non-negative number");
  return arr.flat(depth);
};

/**
 * Splits an array into chunks of the specified size.
 * @param {Array} arr - The array to split into chunks.
 * @param {number} size - The size of each chunk.
 * @returns {Array[]} An array of chunks.
 * @throws {TypeError} If the input is not an array or size is not a valid number.
 * @throws {Error} If size is less than or equal to 0.
 */
export const chunkArray = (arr, size) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (size <= 0 || typeof size !== "number")
    throw new Error("Size must be a positive number");
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
};

/**
 * Returns elements present in both arrays.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} An array of elements present in both arrays.
 * @throws {TypeError} If the inputs are not arrays.
 */
export const arrayIntersection = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw new TypeError("Expected two arrays");
  return arr1.filter((item) => arr2.includes(item));
};

/**
 * Returns elements in the first array that are not in the second array.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} An array of elements in the first array not in the second.
 * @throws {TypeError} If the inputs are not arrays.
 */
export const arrayDifference = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw new TypeError("Expected two arrays");
  return arr1.filter((item) => !arr2.includes(item));
};

/**
 * Removes duplicates from an array of objects based on a specific property.
 * @param {Array} arr - The array of objects.
 * @param {string} key - The property to determine uniqueness.
 * @returns {Array} A new array with duplicates removed.
 * @throws {TypeError} If the input is not an array or key is not a string.
 */
export const uniqueByProperty = (arr, key) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof key !== "string") throw new TypeError("Key must be a string");
  const seen = new Set();
  return arr.filter((item) => {
    const val = item[key];
    if (seen.has(val)) return false;
    seen.add(val);
    return true;
  });
};

/**
 * Groups elements of an array by a specified property.
 * @param {Array} arr - The array of objects to group.
 * @param {string} key - The property to group by.
 * @returns {Object} An object where keys are the property values and values are arrays of objects.
 * @throws {TypeError} If the input is not an array or key is not a string.
 */
export const groupBy = (arr, key) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof key !== "string") throw new TypeError("Key must be a string");
  return arr.reduce((acc, obj) => {
    const group = obj[key];
    acc[group] = acc[group] || [];
    acc[group].push(obj);
    return acc;
  }, {});
};

/**
 * Finds duplicate elements in an array.
 * @param {Array} arr - The array to find duplicates in.
 * @returns {Array} An array of duplicate elements.
 * @throws {TypeError} If the input is not an array.
 */
export const findDuplicates = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  const seen = new Set();
  const duplicates = new Set();
  arr.forEach((item) => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });
  return [...duplicates];
};

/**
 * Removes falsy values (e.g., 0, "", null, undefined) from an array.
 * @param {Array} arr - The array to filter.
 * @returns {Array} A new array with falsy values removed.
 * @throws {TypeError} If the input is not an array.
 */
export const removeFalsyValues = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return arr.filter(Boolean);
};

/**
 * Returns a random element from an array.
 * @param {Array} arr - The array to select a random element from.
 * @returns {*} A random element from the array.
 * @throws {TypeError} If the input is not an array.
 * @throws {Error} If the array is empty.
 */
export const randomElement = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (arr.length === 0) throw new Error("Array cannot be empty");
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

/**
 * Shuffles the elements of an array randomly.
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} A new array with elements shuffled.
 * @throws {TypeError} If the input is not an array.
 */
export const shuffleArray = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return arr.sort(() => Math.random() - 0.5);
};

/**
 * Converts an array of key-value pairs into an object.
 * @param {Array} arr - The array of key-value pairs.
 * @returns {Object} An object created from the key-value pairs.
 * @throws {TypeError} If the input is not an array.
 */
export const arrayToObject = (arr) => {
  if (!Array.isArray(arr))
    throw new TypeError("Expected an array of key-value pairs");
  return Object.fromEntries(arr);
};

/**
 * Converts an object into an array of key-value pairs.
 * @param {Object} obj - The object to convert.
 * @returns {Array} An array of key-value pairs.
 * @throws {TypeError} If the input is not an object.
 */
export const objectToArray = (obj) => {
  if (typeof obj !== "object" || obj === null)
    throw new TypeError("Expected an object");
  return Object.entries(obj);
};

/**
 * Rotates the array by n positions (positive for right, negative for left).
 * @param {Array} arr - The array to rotate.
 * @param {number} n - The number of positions to rotate.
 * @returns {Array} A new array with elements rotated.
 * @throws {TypeError} If the input is not an array or n is not a number.
 */
export const rotateArray = (arr, n) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof n !== "number") throw new TypeError("n must be a number");
  n = n % arr.length;
  return [...arr.slice(-n), ...arr.slice(0, -n)];
};

/**
 * Splits an array into two based on a predicate function.
 * @param {Array} arr - The array to partition.
 * @param {Function} predicate - The predicate function to partition by.
 * @returns {Array[]} A 2D array with two subarrays: [elements that pass, elements that fail].
 * @throws {TypeError} If the input is not an array or predicate is not a function.
 */
export const partitionArray = (arr, predicate) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof predicate !== "function")
    throw new TypeError("Predicate must be a function");
  return arr.reduce(
    ([pass, fail], elem) =>
      predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]],
    [[], []],
  );
};

/**
 * Counts the occurrences of each element in an array.
 * @param {Array} arr - The array to count occurrences in.
 * @returns {Object} An object where keys are array elements and values are their counts.
 * @throws {TypeError} If the input is not an array.
 */
export const countOccurrences = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

/**
 * Sorts an array of objects by a specified property.
 * @param {Array} arr - The array of objects to sort.
 * @param {string} key - The property to sort by.
 * @returns {Array} A new array sorted by the specified property.
 * @throws {TypeError} If the input is not an array or key is not a string.
 */
export const sortByProperty = (arr, key) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof key !== "string") throw new TypeError("Key must be a string");
  return [...arr].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

/**
 * Finds the object with the maximum value for a specified property.
 * @param {Array} arr - The array of objects.
 * @param {string} key - The property to find the maximum value by.
 * @returns {Object} The object with the maximum value for the specified property.
 * @throws {TypeError} If the input is not an array or key is not a string.
 */
export const maxByProperty = (arr, key) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof key !== "string") throw new TypeError("Key must be a string");
  return arr.reduce((max, obj) => (obj[key] > max[key] ? obj : max), arr[0]);
};

/**
 * Finds the object with the minimum value for a specified property.
 * @param {Array} arr - The array of objects.
 * @param {string} key - The property to find the minimum value by.
 * @returns {Object} The object with the minimum value for the specified property.
 * @throws {TypeError} If the input is not an array or key is not a string.
 */
export const minByProperty = (arr, key) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  if (typeof key !== "string") throw new TypeError("Key must be a string");
  return arr.reduce((min, obj) => (obj[key] < min[key] ? obj : min), arr[0]);
};

/**
 * Checks if two arrays are equal.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {boolean} True if the arrays are equal, otherwise false.
 * @throws {TypeError} If the inputs are not arrays.
 */
export const arraysEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw new TypeError("Expected two arrays");
  return (
    arr1.length === arr2.length &&
    arr1.every((val, index) => val === arr2[index])
  );
};

/**
 * Generates a range of numbers.
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @param {number} [step=1] - The step between numbers in the range.
 * @returns {Array} An array of numbers in the specified range.
 * @throws {TypeError} If start, end, or step are not numbers.
 * @throws {Error} If step is less than or equal to 0.
 */
export const range = (start, end, step = 1) => {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    typeof step !== "number"
  ) {
    throw new TypeError("Start, end, and step must be numbers");
  }
  if (step <= 0) throw new Error("Step must be greater than 0");
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, i) => start + i * step,
  );
};

/**
 * Creates an array excluding all given values.
 *
 * @param {Array} array - The array to filter.
 * @param {...*} values - The values to exclude.
 * @returns {Array} - The new array of filtered values.
 */
export const without = (array, ...values) =>
  array.filter((item) => !values.includes(item));
