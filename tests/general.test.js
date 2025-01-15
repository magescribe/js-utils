import {createSecureCookie, debounce, isSafeSQLInput, throttle} from "../src/general";

test("isSafeSQLInput detects SQL injection patterns", () => {
    expect(isSafeSQLInput("SELECT * FROM users;")).toBe(false);
    expect(isSafeSQLInput("DROP TABLE users --")).toBe(false);
    expect(isSafeSQLInput("xp_cmdshell")).toBe(false);
    expect(isSafeSQLInput("normal text")).toBe(true);
    expect(isSafeSQLInput("12345")).toBe(true);
});

test("createSecureCookie generates secure cookie strings", () => {
    expect(createSecureCookie("sessionId", "abc123")).toBe(
        "sessionId=abc123;"
    );
    expect(
        createSecureCookie("sessionId", "abc123", {maxAge: 3600, secure: true})
    ).toBe("sessionId=abc123; Max-Age=3600; Secure;");
    expect(
        createSecureCookie("sessionId", "abc123", {
            maxAge: 3600,
            domain: "example.com",
            path: "/",
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
        })
    ).toBe(
        "sessionId=abc123; Max-Age=3600; Domain=example.com; Path=/; HttpOnly; Secure; SameSite=Strict;"
    );
    expect(createSecureCookie("testCookie", "value")).toBe("testCookie=value;");
});

jest.useFakeTimers();

test("debounce delays execution until the specified delay has passed since the last call", () => {
    const mockFunc = jest.fn();
    const debouncedFunc = debounce(mockFunc, 200);

    // Call the debounced function multiple times
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // Fast-forward time by less than the delay
    jest.advanceTimersByTime(100);
    expect(mockFunc).not.toHaveBeenCalled();

    // Fast-forward time to the delay
    jest.advanceTimersByTime(100);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    // Call the debounced function again
    debouncedFunc();
    jest.advanceTimersByTime(200);
    expect(mockFunc).toHaveBeenCalledTimes(2);
});

test("throttle ensures the function is executed at most once in the specified delay period", () => {
    const mockFunc = jest.fn();
    const throttledFunc = throttle(mockFunc, 200);

    // Call the throttled function multiple times
    throttledFunc();
    throttledFunc();
    throttledFunc();

    // Fast-forward time less than the delay
    jest.advanceTimersByTime(100);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    // Fast-forward time to the delay and call again
    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(mockFunc).toHaveBeenCalledTimes(2);

    // Ensure throttled behavior holds
    jest.advanceTimersByTime(50);
    throttledFunc();
    expect(mockFunc).toHaveBeenCalledTimes(2); // No additional call
});