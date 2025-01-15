import {
    addDays,
    addMonths,
    differenceInDays,
    formatDate,
    getCurrentDate,
    getCurrentTime,
    getEndOfDay,
    getStartOfDay,
    isPastDate,
    isSameDay,
    isValidDate,
    parseDate,
    timestampToDate,
} from "../src/date";

test("getCurrentDate returns the current date in specified format", () => {
    const currentDate = new Date();
    const expected = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
    expect(getCurrentDate()).toBe(expected);
    expect(getCurrentDate("MM/DD/YYYY")).toBe(`${String(currentDate.getMonth() + 1).padStart(2, "0")}/${String(currentDate.getDate()).padStart(2, "0")}/${currentDate.getFullYear()}`);
});

test("addDays adds days to a date correctly", () => {
    const date = new Date("2024-01-01");
    expect(addDays(date, 5)).toEqual(new Date("2024-01-06"));
    expect(addDays(date, -5)).toEqual(new Date("2023-12-27"));
});

test("differenceInDays calculates the correct difference", () => {
    const date1 = new Date("2024-01-01");
    const date2 = new Date("2024-01-10");
    expect(differenceInDays(date1, date2)).toBe(9);
    expect(differenceInDays(date2, date1)).toBe(9);
});

test("isPastDate checks if the date is in the past", () => {
    const pastDate = new Date("2000-01-01");
    const futureDate = new Date("3000-01-01");
    expect(isPastDate(pastDate)).toBe(true);
    expect(isPastDate(futureDate)).toBe(false);
});

test("formatDate formats a date correctly", () => {
    const date = new Date("2024-12-30");
    expect(formatDate(date, "en-US")).toBe("December 30, 2024");
});

test("parseDate converts a string to a Date object", () => {
    const dateString = "2024-12-30";
    expect(parseDate(dateString)).toEqual(new Date(dateString));
});

test("getStartOfDay returns the start of the day", () => {
    const date = new Date("2024-12-30T15:30:00");
    expect(getStartOfDay(date)).toEqual(new Date("2024-12-30T00:00:00"));
});

test("getEndOfDay returns the end of the day", () => {
    const date = new Date("2024-12-30T15:30:00");
    expect(getEndOfDay(date)).toEqual(new Date("2024-12-30T23:59:59"));
});

test("isValidDate checks if a value is a valid Date object", () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate("not-a-date")).toBe(false);
});

test("timestampToDate converts a timestamp to a Date object", () => {
    const timestamp = 1704067200000; // Timestamp for "2024-12-30T00:00:00.000Z"
    const result = timestampToDate(timestamp);
    expect(result).toBeInstanceOf(Date); // Ensure it returns a Date object
    expect(result.getTime()).toBe(timestamp); // Ensure the timestamp matches
});

test("getCurrentTime returns the current time in specified format", () => {
    const timePattern = /^\d{2}:\d{2}:\d{2}$/;
    expect(getCurrentTime()).toMatch(timePattern);
    expect(getCurrentTime("HH:mm")).toMatch(/^\d{2}:\d{2}$/);
});

test("addMonths adds months to a date correctly", () => {
    const date = new Date("2024-01-01");
    expect(addMonths(date, 2)).toEqual(new Date("2024-03-01"));
    expect(addMonths(date, -2)).toEqual(new Date("2023-11-01"));
});

test("isSameDay checks if two dates are on the same day", () => {
    const date1 = new Date("2024-12-30T10:00:00");
    const date2 = new Date("2024-12-30T20:00:00");
    const differentDate = new Date("2024-12-31");
    expect(isSameDay(date1, date2)).toBe(true);
    expect(isSameDay(date1, differentDate)).toBe(false);
});