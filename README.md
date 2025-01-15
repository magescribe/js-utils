# js-utils

**js-utils** is a lightweight and powerful JavaScript utility library designed to simplify everyday coding tasks. It
provides a comprehensive collection of commonly used functions for arrays, objects, strings, numbers, dates, and more,
all in one place. Whether you need to manipulate data structures, validate input, or optimize your code, `js-utils` has
you covered.

With a focus on simplicity, performance, and developer productivity, `js-utils` is the perfect companion for modern
JavaScript and TypeScript projects. Say goodbye to repetitive code and embrace clean, reusable utilities that just work.

## Features

- 🚀 **Comprehensive**: Covers utilities for arrays, objects, strings, numbers, dates, and more.
- 🛠️ **Developer-Friendly**: Clear function signatures, well-documented APIs, and intuitive usage.
- 🌟 **Lightweight**: Minimal dependency footprint.
- 📦 **Modular**: Import only what you need to keep your bundle size small.
- ⚡ **Optimized**: Built for performance and reliability.

## Installation

```bash
  npm install js-utils
```

## Usage

```javascript
import { removeDuplicates, capitalize } from "js-utils";

// Remove duplicates from an array
const unique = removeDuplicates([1, 2, 2, 3]);
console.log(unique); // [1, 2, 3]

// Capitalize a string
const capitalized = capitalize("hello");
console.log(capitalized); // "Hello"
```

## Array Utility Functions

#### `removeDuplicates`

Removes duplicate elements from an array.

**Parameters:**

- `arr` (Array): The array to remove duplicates from.

**Returns:**

- (Array): A new array with duplicates removed.

**Throws:**

- `TypeError`: If the input is not an array.

#### `flattenArray`

Flattens a nested array up to the specified depth.

**Parameters:**

- `arr` (Array): The nested array to flatten.
- `depth` (number) [default=1]: The depth level to flatten the array.

**Returns:**

- (Array): A flattened array.

**Throws:**

- `TypeError`: If the input is not an array or depth is not a valid number.

#### `chunkArray`

Splits an array into chunks of the specified size.

**Parameters:**

- `arr` (Array): The array to split into chunks.
- `size` (number): The size of each chunk.

**Returns:**

- (Array[]): An array of chunks.

**Throws:**

- `TypeError`: If the input is not an array or size is not a valid number.
- `Error`: If size is less than or equal to 0.

#### `arrayIntersection`

Returns elements present in both arrays.

**Parameters:**

- `arr1` (Array): The first array.
- `arr2` (Array): The second array.

**Returns:**

- (Array): An array of elements present in both arrays.

**Throws:**

- `TypeError`: If the inputs are not arrays.

#### `arrayDifference`

Returns elements in the first array that are not in the second array.

**Parameters:**

- `arr1` (Array): The first array.
- `arr2` (Array): The second array.

**Returns:**

- (Array): An array of elements in the first array not in the second.

**Throws:**

- `TypeError`: If the inputs are not arrays.

#### `uniqueByProperty`

Removes duplicates from an array of objects based on a specific property.

**Parameters:**

- `arr` (Array): The array of objects.
- `key` (string): The property to determine uniqueness.

**Returns:**

- (Array): A new array with duplicates removed.

**Throws:**

- `TypeError`: If the input is not an array or key is not a string.

#### `groupBy`

Groups elements of an array by a specified property.

**Parameters:**

- `arr` (Array): The array of objects to group.
- `key` (string): The property to group by.

**Returns:**

- (Object): An object where keys are the property values and values are arrays of objects.

**Throws:**

- `TypeError`: If the input is not an array or key is not a string.

#### `findDuplicates`

Finds duplicate elements in an array.

**Parameters:**

- `arr` (Array): The array to find duplicates in.

**Returns:**

- (Array): An array of duplicate elements.

**Throws:**

- `TypeError`: If the input is not an array.

#### `removeFalsyValues`

Removes falsy values (e.g., 0, "", null, undefined) from an array.

**Parameters:**

- `arr` (Array): The array to filter.

**Returns:**

- (Array): A new array with falsy values removed.

**Throws:**

- `TypeError`: If the input is not an array.

#### `randomElement`

Returns a random element from an array.

**Parameters:**

- `arr` (Array): The array to select a random element from.

**Returns:**

- (*): A random element from the array.

**Throws:**

- `TypeError`: If the input is not an array.
- `Error`: If the array is empty.

#### `shuffleArray`

Shuffles the elements of an array randomly.

**Parameters:**

- `arr` (Array): The array to shuffle.

**Returns:**

- (Array): A new array with elements shuffled.

**Throws:**

- `TypeError`: If the input is not an array.

#### `arrayToObject`

Converts an array of key-value pairs into an object.

**Parameters:**

- `arr` (Array): The array of key-value pairs.

**Returns:**

- (Object): An object created from the key-value pairs.

**Throws:**

- `TypeError`: If the input is not an array.

#### `objectToArray`

Converts an object into an array of key-value pairs.

**Parameters:**

- `obj` (Object): The object to convert.

**Returns:**

- (Array): An array of key-value pairs.

**Throws:**

- `TypeError`: If the input is not an object.

#### `rotateArray`

Rotates the array by n positions (positive for right, negative for left).

**Parameters:**

- `arr` (Array): The array to rotate.
- `n` (number): The number of positions to rotate.

**Returns:**

- (Array): A new array with elements rotated.

**Throws:**

- `TypeError`: If the input is not an array or n is not a number.

#### `partitionArray`

Splits an array into two based on a predicate function.

**Parameters:**

- `arr` (Array): The array to partition.
- `predicate` (Function): The predicate function to partition by.

**Returns:**

- (Array[]): A 2D array with two subarrays: [elements that pass, elements that fail].

**Throws:**

- `TypeError`: If the input is not an array or predicate is not a function.

#### `countOccurrences`

Counts the occurrences of each element in an array.

**Parameters:**

- `arr` (Array): The array to count occurrences in.

**Returns:**

- (Object): An object where keys are array elements and values are their counts.

**Throws:**

- `TypeError`: If the input is not an array.

#### `sortByProperty`

Sorts an array of objects by a specified property.

**Parameters:**

- `arr` (Array): The array of objects to sort.
- `key` (string): The property to sort by.

**Returns:**

- (Array): A new array sorted by the specified property.

**Throws:**

- `TypeError`: If the input is not an array or key is not a string.

#### `maxByProperty`

Finds the object with the maximum value for a specified property.

**Parameters:**

- `arr` (Array): The array of objects.
- `key` (string): The property to find the maximum value by.

**Returns:**

- (Object): The object with the maximum value for the specified property.

**Throws:**

- `TypeError`: If the input is not an array or key is not a string.

#### `minByProperty`

Finds the object with the minimum value for a specified property.

**Parameters:**

- `arr` (Array): The array of objects.
- `key` (string): The property to find the minimum value by.

**Returns:**

- (Object): The object with the minimum value for the specified property.

**Throws:**

- `TypeError`: If the input is not an array or key is not a string.

#### `arraysEqual`

Checks if two arrays are equal.

**Parameters:**

- `arr1` (Array): The first array.
- `arr2` (Array): The second array.

**Returns:**

- (boolean): True if the arrays are equal, otherwise false.

**Throws:**

- `TypeError`: If the inputs are not arrays.

#### `range`

Generates a range of numbers.

**Parameters:**

- `start` (number): The starting number of the range.
- `end` (number): The ending number of the range.
- `step` (number) [default=1]: The step between numbers in the range.

**Returns:**

- (Array): An array of numbers in the specified range.

**Throws:**

- `TypeError`: If start, end, or step are not numbers.
- `Error`: If step is less than or equal to 0.

#### `without`

Creates an array excluding all given values.

**Parameters:**

- `array` (Array): The array to filter.
- `...values` (*): The values to exclude.

**Returns:**

- (Array): The new array of filtered values.

## Object Utilities Functions

### `deepClone`

Deeply clones an object.

**Parameters:**

- `obj` (Object): The object to clone.

**Returns:**

- (Object): A deep clone of the object, or null if the input is not an object.

### `deepEqual`

Checks if two objects are deeply equal.

**Parameters:**

- `obj1` (Object): The first object.
- `obj2` (Object): The second object.

**Returns:**

- (boolean): True if the objects are deeply equal, false otherwise.

### `mergeObjects`

Merges two or more objects into one.

**Parameters:**

- `...objs` (Object): The objects to merge.

**Returns:**

- (Object): The merged object.

### `omitKeys`

Removes specified keys from an object.

**Parameters:**

- `obj` (Object): The source object.
- `keys` (string[]): The keys to remove.

**Returns:**

- (Object): A new object without the specified keys.

### `pickKeys`

Picks specified keys from an object.

**Parameters:**

- `obj` (Object): The source object.
- `keys` (string[]): The keys to pick.

**Returns:**

- (Object): A new object with only the specified keys.

### `isEmptyObject`

Checks if an object is empty (has no keys).

**Parameters:**

- `obj` (Object): The object to check.

**Returns:**

- (boolean): True if the object is empty, false otherwise.

### `freezeObject`

Freezes an object to make it immutable.

**Parameters:**

- `obj` (Object): The object to freeze.

**Returns:**

- (Object): The frozen object.

### `getValueAtPath`

Gets the value at a specified path in an object.

**Parameters:**

- `obj` (Object): The source object.
- `path` (string): The path to the value (e.g., "a.b.c").

**Returns:**

- (*): The value at the specified path, or undefined if not found.

### `setValueAtPath`

Sets a value at a specified path in an object.

**Parameters:**

- `obj` (Object): The source object.
- `path` (string): The path to set the value (e.g., "a.b.c").
- `value` (*): The value to set.

**Returns:**

- (Object): The updated object.

### `isPlainObject`

Validates if a value is a plain object.

**Parameters:**

- `value` (*): The value to validate.

**Returns:**

- (boolean): True if the value is a plain object, false otherwise.

### `flattenObject`

Flattens a nested object into a single level.

**Parameters:**

- `obj` (Object): The object to flatten.
- `prefix` (string) [optional]: The prefix for nested keys.

**Returns:**

- (Object): The flattened object.

### `unflattenObject`

Expands a flattened object back to its nested structure.

**Parameters:**

- `obj` (Object): The flattened object.

**Returns:**

- (Object): The nested object.

## String Utilities Functions

### `capitalizeFirstLetter`

Capitalizes the first letter of a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): String with the first letter capitalized.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `capitalizeWords`

Capitalizes the first letter of each word in a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): String with each word capitalized.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `reverseString`

Reverses a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): Reversed string.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `trimAll`

Removes all whitespace from a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): String without whitespace.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `slugify`

Converts a string to a URL-friendly slug.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): Slugified string.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `isEmpty`

Checks if a string is empty or contains only whitespace.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (boolean): True if the string is empty, false otherwise.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `isPalindrome`

Checks if a string is a palindrome.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (boolean): True if the string is a palindrome, false otherwise.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `isNumeric`

Checks if a string contains only numeric characters.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (boolean): True if the string is numeric, false otherwise.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `replaceAll`

Replaces all occurrences of a substring in a string.

**Parameters:**

- `str` (string): The input string.
- `find` (string): The substring to find.
- `replace` (string): The substring to replace with.

**Returns:**

- (string): Modified string.

**Throws:**

- `TypeError`: Throws if any input is not a string.

### `truncateString`

Truncates a string to a specified length and appends a suffix if truncated.

**Parameters:**

- `str` (string): The input string.
- `length` (number): Maximum length of the string.
- `suffix` (string) [optional]: Suffix to append if truncated.

**Returns:**

- (string): Truncated string.

**Throws:**

- `TypeError`: Throws if the input is not valid.

### `removeSpecialCharacters`

Removes special characters from a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): String without special characters.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `camelToKebab`

Converts a camelCase string to kebab-case.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): Kebab-case string.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `kebabToCamel`

Converts a kebab-case string to camelCase.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): CamelCase string.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `countOccurrences`

Counts the occurrences of a substring in a string.

**Parameters:**

- `str` (string): The input string.
- `substring` (string): The substring to count.

**Returns:**

- (number): Number of occurrences.

**Throws:**

- `TypeError`: Throws if the input is not valid.

### `startsWith`

Checks if a string starts with a specified substring.

**Parameters:**

- `str` (string): The input string.
- `prefix` (string): The prefix to check.

**Returns:**

- (boolean): True if the string starts with the prefix, false otherwise.

**Throws:**

- `TypeError`: Throws if the input is not valid.

### `endsWith`

Checks if a string ends with a specified substring.

**Parameters:**

- `str` (string): The input string.
- `suffix` (string): The suffix to check.

**Returns:**

- (boolean): True if the string ends with the suffix, false otherwise.

**Throws:**

- `TypeError`: Throws if the input is not valid.

### `toTitleCase`

Converts a string to title case.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): Title-cased string.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `padStart`

Pads the start of a string with a specified character.

**Parameters:**

- `str` (string): The input string.
- `targetLength` (number): Desired length of the string.
- `padChar` (string) [optional]: Character to pad with.

**Returns:**

- (string): Padded string.

**Throws:**

- `TypeError`: Throws if the input is not valid.

### `padEnd`

Pads the end of a string with a specified character.

**Parameters:**

- `str` (string): The input string.
- `targetLength` (number): Desired length of the string.
- `padChar` (string) [optional]: Character to pad with.

**Returns:**

- (string): Padded string.

**Throws:**

- `TypeError`: Throws if the input is not valid.

### `base64Encode`

Base64 encodes a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): Base64 encoded string.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `base64Decode`

Base64 decodes a string.

**Parameters:**

- `str` (string): The Base64 encoded string.

**Returns:**

- (string): Decoded string.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `escapeHTML`

Escapes HTML entities in a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): String with HTML entities escaped.

**Throws:**

- `TypeError`: Throws if the input is not a string.

### `unescapeHTML`

Unescapes HTML entities in a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): String with HTML entities unescaped.

**Throws:**

- `TypeError`: Throws if the input is not a string.

## Number Utility Functions

### `roundToDecimals`

Rounds a number to the specified number of decimal places.

**Parameters:**

- `value` (number): The number to round.
- `decimals` (number): The number of decimal places to round to.

**Returns:**

- (number): The rounded number, or NaN if the input is invalid.

### `degreesToRadians`

Converts degrees to radians.

**Parameters:**

- `degrees` (number): The value in degrees.

**Returns:**

- (number): The value in radians, or NaN if the input is invalid.

### `radiansToDegrees`

Converts radians to degrees.

**Parameters:**

- `radians` (number): The value in radians.

**Returns:**

- (number): The value in degrees, or NaN if the input is invalid.

### `calculatePercentage`

Calculates a percentage of a value.

**Parameters:**

- `part` (number): The part value.
- `total` (number): The total value.

**Returns:**

- (number): The percentage, or NaN if inputs are invalid.

### `clamp`

Clamps a number within a specified range.

**Parameters:**

- `value` (number): The number to clamp.
- `min` (number): The minimum allowable value.
- `max` (number): The maximum allowable value.

**Returns:**

- (number): The clamped number, or NaN if inputs are invalid.

### `isEven`

Checks if a number is even.

**Parameters:**

- `value` (number): The number to check.

**Returns:**

- (boolean): True if the number is even, false otherwise.

### `isOdd`

Checks if a number is odd.

**Parameters:**

- `value` (number): The number to check.

**Returns:**

- (boolean): True if the number is odd, false otherwise.

### `randomInRange`

Generates a random number within a specified range.

**Parameters:**

- `min` (number): The minimum value.
- `max` (number): The maximum value.

**Returns:**

- (number): A random number within the range, or NaN if inputs are invalid.

### `sumArray`

Sums an array of numbers.

**Parameters:**

- `numbers` (number[]): The array of numbers to sum.

**Returns:**

- (number): The sum, or NaN if the input is invalid.

### `averageArray`

Calculates the average of an array of numbers.

**Parameters:**

- `numbers` (number[]): The array of numbers to average.

**Returns:**

- (number): The average, or NaN if the input is invalid.

### `isNumber`

Validates if a value is a number.

**Parameters:**

- `value` (*): The value to validate.

**Returns:**

- (boolean): True if the value is a number, false otherwise.

### `formatWithCommas`

Formats a number with commas as thousands separators.

**Parameters:**

- `value` (number): The number to format.

**Returns:**

- (string): The formatted number, or an empty string if the input is invalid.

### `toOrdinal`

Converts a number to its ordinal representation (e.g., 1 -> "1st").

**Parameters:**

- `value` (number): The number to convert.

**Returns:**

- (string): The ordinal representation, or an empty string if the input is invalid.

### `isPrime`

Checks if a number is prime.

**Parameters:**

- `value` (number): The number to check.

**Returns:**

- (boolean): True if the number is prime, false otherwise.

### `calculateMedian`

Calculates the median of an array of numbers.

**Parameters:**

- `numbers` (number[]): The array of numbers.

**Returns:**

- (number): The median, or NaN if the input is invalid.

## Date Utility Functions

#### `getCurrentDate`

Gets the current date in a specified format.

**Parameters:**

- `format` (string): The desired format (e.g., "YYYY-MM-DD", "MM/DD/YYYY").

**Returns:**

- (string): The formatted date string.

#### `addDays`

Adds or subtracts days from a date.

**Parameters:**

- `date` (Date): The starting date.
- `days` (number): The number of days to add (use negative for subtraction).

**Returns:**

- (Date): The resulting date.

#### `differenceInDays`

Calculates the difference in days between two dates.

**Parameters:**

- `date1` (Date): The first date.
- `date2` (Date): The second date.

**Returns:**

- (number): The difference in days.

#### `isPastDate`

Checks if a date is in the past.

**Parameters:**

- `date` (Date): The date to check.

**Returns:**

- (boolean): True if the date is in the past, false otherwise.

#### `formatDate`

Formats a date into a readable string.

**Parameters:**

- `date` (Date): The date to format.
- `locale` (string): The locale for formatting (e.g., "en-US").
- `options` (Object): Formatting options.

**Returns:**

- (string): The formatted date string.

#### `parseDate`

Converts a date string to a Date object.

**Parameters:**

- `dateString` (string): The date string (e.g., "2024-12-30").

**Returns:**

- (Date): The resulting Date object.

#### `getStartOfDay`

Gets the start of the day for a given date.

**Parameters:**

- `date` (Date): The date.

**Returns:**

- (Date): The start of the day (midnight).

#### `getEndOfDay`

Gets the end of the day for a given date.

**Parameters:**

- `date` (Date): The date.

**Returns:**

- (Date): The end of the day (23:59:59).

#### `isValidDate`

Validates if a value is a valid Date object.

**Parameters:**

- `value` (*): The value to validate.

**Returns:**

- (boolean): True if the value is a valid Date object, false otherwise.

#### `timestampToDate`

Converts a timestamp to a Date object.

**Parameters:**

- `timestamp` (number): The timestamp (in milliseconds).

**Returns:**

- (Date): The resulting Date object.

#### `getCurrentTime`

Gets the current time as a formatted string.

**Parameters:**

- `format` (string): The desired format (e.g., "HH:mm:ss", "HH:mm").

**Returns:**

- (string): The formatted time string.

#### `addMonths`

Adds or subtracts months from a date.

**Parameters:**

- `date` (Date): The starting date.
- `months` (number): The number of months to add (use negative for subtraction).

**Returns:**

- (Date): The resulting date.

#### `isSameDay`

Checks if two dates are on the same day.

**Parameters:**

- `date1` (Date): The first date.
- `date2` (Date): The second date.

**Returns:**

- (boolean): True if the dates are on the same day, false otherwise.

## Validation Functions

### `isValidEmail`

Validates if a value is an email address.

**Parameters:**

- `email` (string): The email address to validate.

**Returns:**

- (boolean): True if the value is a valid email address, false otherwise.

### `isValidURL`

Validates if a value is a URL.

**Parameters:**

- `url` (string): The URL to validate.

**Returns:**

- (boolean): True if the value is a valid URL, false otherwise.

### `isValidPhoneNumber`

Validates if a value is a phone number.

**Parameters:**

- `phone` (string): The phone number to validate.

**Returns:**

- (boolean): True if the value is a valid phone number, false otherwise.

### `isInteger`

Validates if a value is a valid integer.

**Parameters:**

- `value` (*): The value to validate.

**Returns:**

- (boolean): True if the value is a valid integer, false otherwise.

### `isFloat`

Validates if a value is a valid float.

**Parameters:**

- `value` (*): The value to validate.

**Returns:**

- (boolean): True if the value is a valid float, false otherwise.

### `isAlpha`

Validates if a string contains only alphabetic characters.

**Parameters:**

- `str` (string): The string to validate.

**Returns:**

- (boolean): True if the string contains only alphabetic characters, false otherwise.

### `isAlphanumeric`

Validates if a string contains only alphanumeric characters.

**Parameters:**

- `str` (string): The string to validate.

**Returns:**

- (boolean): True if the string contains only alphanumeric characters, false otherwise.

### `isValidPassword`

Validates if a string is a valid password.
Criteria: At least 8 characters, includes one uppercase letter, one lowercase letter, and one number.

**Parameters:**

- `password` (string): The password to validate.

**Returns:**

- (boolean): True if the password meets the criteria, false otherwise.

### `isValidCreditCard`

Validates if a value is a valid credit card number.

**Parameters:**

- `cardNumber` (string): The credit card number to validate.

**Returns:**

- (boolean): True if the value is a valid credit card number, false otherwise.

### `isValidDateString`

Validates if a value is a valid date string (YYYY-MM-DD).

**Parameters:**

- `date` (string): The date string to validate.

**Returns:**

- (boolean): True if the value is a valid date, false otherwise.

### `hasRequiredKeys`

Validates if an object has all the required keys.

**Parameters:**

- `obj` (Object): The object to validate.
- `keys` (string[]): The required keys.

**Returns:**

- (boolean): True if the object contains all required keys, false otherwise.

### `isWhitespace`

Validates if a string contains only whitespace.

**Parameters:**

- `str` (string): The string to validate.

**Returns:**

- (boolean): True if the string contains only whitespace, false otherwise.

### `isValidJSON`

Validates if a value is a valid JSON string.

**Parameters:**

- `jsonString` (string): The string to validate.

**Returns:**

- (boolean): True if the string is valid JSON, false otherwise.

### `isPositiveNumber`

Validates if a value is a positive number.

**Parameters:**

- `value` (number): The number to validate.

**Returns:**

- (boolean): True if the value is a positive number, false otherwise.

### `isNonEmptyArray`

Validates if a value is a non-empty array.

**Parameters:**

- `array` (Array): The array to validate.

**Returns:**

- (boolean): True if the array is non-empty, false otherwise.

## General Utility Functions

#### `sanitizeHTML`

Escapes special HTML characters in a string to prevent XSS attacks.

**Parameters:**

- `str` (string): The string to sanitize.

**Returns:**

- (string): The sanitized string.

#### `isSafeSQLInput`

Checks if a string contains potential SQL injection patterns.

**Parameters:**

- `input` (string): The string to validate.

**Returns:**

- (boolean): True if the input is safe, false otherwise.

#### `createSecureCookie`

Creates a secure cookie string.

**Parameters:**

- `name` (string): The cookie name.
- `value` (string): The cookie value.
- `options` (Object): Additional options (e.g., maxAge, httpOnly).

**Returns:**

- (string): The secure cookie string.

#### `debounce`

Creates a debounced function that delays invoking the provided function until after a specified delay.

**Parameters:**

- `func` (Function): The function to debounce.
- `delay` (number): The delay in milliseconds.

**Returns:**

- (Function): The debounced function.

#### `throttle`

Creates a throttled function that only invokes the provided function at most once per specified delay.

**Parameters:**

- `func` (Function): The function to throttle.
- `delay` (number): The delay in milliseconds.

**Returns:**

- (Function): The throttled function.

