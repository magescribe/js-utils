import {
    hasRequiredKeys,
    isAlpha,
    isAlphanumeric,
    isFloat,
    isInteger,
    isNonEmptyArray,
    isPositiveNumber,
    isValidCreditCard,
    isValidDateString,
    isValidEmail,
    isValidJSON,
    isValidPassword,
    isValidPhoneNumber,
    isValidURL,
    isWhitespace,
} from '../src/validation';

describe('Validation Utilities', () => {
    test('isValidEmail should validate email addresses', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('invalid-email')).toBe(false);
    });

    test('isValidURL should validate URLs', () => {
        expect(isValidURL('https://example.com')).toBe(true);
        expect(isValidURL('invalid-url')).toBe(false);
    });

    test('isValidPhoneNumber should validate phone numbers', () => {
        expect(isValidPhoneNumber('+1234567890')).toBe(true);
        expect(isValidPhoneNumber('12345')).toBe(false);
    });

    test('isInteger should validate integers', () => {
        expect(isInteger(10)).toBe(true);
        expect(isInteger(10.5)).toBe(false);
    });

    test('isFloat should validate floating-point numbers', () => {
        expect(isFloat(10.5)).toBe(true);
        expect(isFloat(10)).toBe(false);
    });

    test('isAlpha should validate alphabetic strings', () => {
        expect(isAlpha('Hello')).toBe(true);
        expect(isAlpha('Hello123')).toBe(false);
    });

    test('isAlphanumeric should validate alphanumeric strings', () => {
        expect(isAlphanumeric('Hello123')).toBe(true);
        expect(isAlphanumeric('Hello@123')).toBe(false);
    });

    test('isValidPassword should validate passwords', () => {
        expect(isValidPassword('Strong1Password')).toBe(true);
        expect(isValidPassword('weak')).toBe(false);
    });

    test('isValidCreditCard should validate credit card numbers', () => {
        expect(isValidCreditCard('4111111111111111')).toBe(true);
        expect(isValidCreditCard('123')).toBe(false);
    });

    test('isValidDateString should validate date strings', () => {
        expect(isValidDateString('2024-12-30')).toBe(true);
        expect(isValidDateString('30-12-2024')).toBe(false);
    });

    test('hasRequiredKeys should validate object keys', () => {
        const obj = {key1: 'value1', key2: 'value2'};
        expect(hasRequiredKeys(obj, ['key1', 'key2'])).toBe(true);
        expect(hasRequiredKeys(obj, ['key1', 'key3'])).toBe(false);
    });

    test('isWhitespace should validate whitespace strings', () => {
        expect(isWhitespace('   ')).toBe(true);
        expect(isWhitespace('text')).toBe(false);
    });

    test('isValidJSON should validate JSON strings', () => {
        expect(isValidJSON('{"key": "value"}')).toBe(true);
        expect(isValidJSON('invalid-json')).toBe(false);
    });

    test('isPositiveNumber should validate positive numbers', () => {
        expect(isPositiveNumber(10)).toBe(true);
        expect(isPositiveNumber(-10)).toBe(false);
    });

    test('isNonEmptyArray should validate non-empty arrays', () => {
        expect(isNonEmptyArray([1, 2, 3])).toBe(true);
        expect(isNonEmptyArray([])).toBe(false);
    });
});