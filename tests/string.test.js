import {
    base64Decode,
    base64Encode,
    camelToKebab,
    capitalizeFirstLetter,
    capitalizeWords,
    countOccurrences,
    endsWith,
    escapeHTML,
    isEmpty,
    isNumeric,
    isPalindrome,
    kebabToCamel,
    padEnd,
    padStart,
    removeSpecialCharacters,
    replaceAll,
    reverseString,
    slugify,
    startsWith,
    toTitleCase,
    trimAll,
    truncateString,
    unescapeHTML,
} from "../src/string";

test("capitalizeFirstLetter capitalizes the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
});

test("capitalizeWords capitalizes the first letter of each word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
});

test("reverseString reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("trimAll removes all whitespace from a string", () => {
    expect(trimAll(" h e l l o ")).toBe("hello");
});

test("slugify converts a string to a URL-friendly slug", () => {
    expect(slugify("Hello World!")).toBe("hello-world");
});

test("isEmpty returns true for empty or whitespace-only strings", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("   ")).toBe(true);
    expect(isEmpty("hello")).toBe(false);
});

test("isPalindrome returns true for palindromes", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
});

test("isNumeric returns true for strings containing only numbers", () => {
    expect(isNumeric("12345")).toBe(true);
    expect(isNumeric("123a")).toBe(false);
});

test("replaceAll replaces all occurrences of a substring", () => {
    expect(replaceAll("hello world", "o", "a")).toBe("hella warld");
});

test("truncateString truncates a string to the specified length", () => {
    expect(truncateString("hello world", 5)).toBe("hello...");
    expect(truncateString("hello", 10)).toBe("hello");
});

test("removeSpecialCharacters removes special characters from a string", () => {
    expect(removeSpecialCharacters("hello@world!")).toBe("helloworld");
});

test("camelToKebab converts camelCase to kebab-case", () => {
    expect(camelToKebab("helloWorld")).toBe("hello-world");
});

test("kebabToCamel converts kebab-case to camelCase", () => {
    expect(kebabToCamel("hello-world")).toBe("helloWorld");
});

test("countOccurrences counts occurrences of a substring", () => {
    expect(countOccurrences("hello world", "o")).toBe(2);
});

test("startsWith checks if a string starts with a prefix", () => {
    expect(startsWith("hello", "he")).toBe(true);
    expect(startsWith("hello", "lo")).toBe(false);
});

test("endsWith checks if a string ends with a suffix", () => {
    expect(endsWith("hello", "lo")).toBe(true);
    expect(endsWith("hello", "he")).toBe(false);
});

test("toTitleCase converts a string to title case", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
});

test("padStart pads the start of a string", () => {
    expect(padStart("hello", 10, "-")).toBe("-----hello");
});

test("padEnd pads the end of a string", () => {
    expect(padEnd("hello", 10, "-")).toBe("hello-----");
});

test("base64Encode encodes a string to Base64", () => {
    expect(base64Encode("hello")).toBe("aGVsbG8=");
});

test("base64Decode decodes a Base64 string", () => {
    expect(base64Decode("aGVsbG8=")).toBe("hello");
});

test("escapeHTML escapes HTML entities", () => {
    expect(escapeHTML("<div>Hello & World</div>")).toBe(
        "&lt;div&gt;Hello &amp; World&lt;/div&gt;"
    );
});

test("unescapeHTML unescapes HTML entities", () => {
    expect(unescapeHTML("&lt;div&gt;Hello &amp; World&lt;/div&gt;")).toBe(
        "<div>Hello & World</div>"
    );
});
