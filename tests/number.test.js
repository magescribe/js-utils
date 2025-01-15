import {
    averageArray,
    calculateMedian,
    calculatePercentage,
    clamp,
    degreesToRadians,
    formatWithCommas,
    isEven,
    isNumber,
    isOdd,
    isPrime,
    radiansToDegrees,
    randomInRange,
    roundToDecimals,
    sumArray,
    toOrdinal,
} from "../src/number";

test("roundToDecimals", () => {
    expect(roundToDecimals(1.2345, 2)).toBe(1.23);
    expect(roundToDecimals(1.2355, 2)).toBe(1.24);
    expect(roundToDecimals("abc", 2)).toBeNaN();
    expect(roundToDecimals(1.2345, "2")).toBeNaN();
});

test("degreesToRadians", () => {
    expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
    expect(degreesToRadians(90)).toBeCloseTo(Math.PI / 2);
    expect(degreesToRadians("abc")).toBeNaN();
});

test("radiansToDegrees", () => {
    expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
    expect(radiansToDegrees(Math.PI / 2)).toBeCloseTo(90);
    expect(radiansToDegrees("abc")).toBeNaN();
});

test("calculatePercentage", () => {
    expect(calculatePercentage(25, 100)).toBe(25);
    expect(calculatePercentage(30, 200)).toBe(15);
    expect(calculatePercentage(25, 0)).toBeNaN();
    expect(calculatePercentage(25, "abc")).toBeNaN();
});

test("clamp", () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp("abc", 0, 10)).toBeNaN();
});

test("isEven", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
    expect(isEven("abc")).toBe(false);
});

test("isOdd", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
    expect(isOdd("abc")).toBe(false);
});

test("randomInRange", () => {
    const result = randomInRange(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
    expect(randomInRange(10, 1)).toBeNaN();
});

test("sumArray", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
    expect(sumArray([])).toBe(0);
    expect(sumArray(["a", 2, 3])).toBeNaN();
});

test("averageArray", () => {
    expect(averageArray([1, 2, 3, 4])).toBe(2.5);
    expect(averageArray([])).toBeNaN();
    expect(averageArray(["a", 2, 3])).toBeNaN();
});

test("isNumber", () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber("abc")).toBe(false);
    expect(isNumber(NaN)).toBe(false);
});

test("formatWithCommas", () => {
    expect(formatWithCommas(1234567)).toBe("1,234,567");
    expect(formatWithCommas("abc")).toBe("");
});

test("toOrdinal", () => {
    expect(toOrdinal(1)).toBe("1st");
    expect(toOrdinal(2)).toBe("2nd");
    expect(toOrdinal(3)).toBe("3rd");
    expect(toOrdinal(4)).toBe("4th");
    expect(toOrdinal("abc")).toBe("");
});

test("isPrime", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(13)).toBe(true);
    expect(isPrime("abc")).toBe(false);
});

test("calculateMedian", () => {
    expect(calculateMedian([1, 2, 3])).toBe(2);
    expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
    expect(calculateMedian([])).toBeNaN();
    expect(calculateMedian(["a", 2, 3])).toBeNaN();
});
