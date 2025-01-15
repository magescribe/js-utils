import {
    deepClone,
    deepEqual,
    flattenObject,
    freezeObject,
    getValueAtPath,
    isEmptyObject,
    isPlainObject,
    mergeObjects,
    omitKeys,
    pickKeys,
    setValueAtPath,
    unflattenObject,
} from "../src/object";

test("deepClone creates a deep copy of an object", () => {
    const obj = {a: 1, b: {c: 2}};
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj); // Ensure it's a new object
});

test("deepEqual checks for deep equality of objects", () => {
    expect(deepEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}})).toBe(true);
    expect(deepEqual({a: 1}, {a: 2})).toBe(false);
    expect(deepEqual(null, null)).toBe(true);
});

test("mergeObjects merges multiple objects", () => {
    expect(mergeObjects({a: 1}, {b: 2}, {c: 3})).toEqual({a: 1, b: 2, c: 3});
});

test("omitKeys removes specified keys from an object", () => {
    expect(omitKeys({a: 1, b: 2, c: 3}, ["a", "c"])).toEqual({b: 2});
});

test("pickKeys selects specified keys from an object", () => {
    expect(pickKeys({a: 1, b: 2, c: 3}, ["a", "c"])).toEqual({a: 1, c: 3});
});

test("isEmptyObject checks if an object is empty", () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({a: 1})).toBe(false);
});

test("freezeObject makes an object immutable", () => {
    const obj = {a: 1};
    const frozen = freezeObject(obj);
    expect(Object.isFrozen(frozen)).toBe(true);
});

test("getValueAtPath retrieves value at specified path", () => {
    const obj = {a: {b: {c: 2}}};
    expect(getValueAtPath(obj, "a.b.c")).toBe(2);
    expect(getValueAtPath(obj, "a.b.x")).toBeUndefined();
});

test("setValueAtPath sets value at specified path", () => {
    const obj = {a: {b: {c: 2}}};
    setValueAtPath(obj, "a.b.d", 3);
    expect(obj.a.b.d).toBe(3);
});

test("isPlainObject checks if a value is a plain object", () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(null)).toBe(false);
});

test("flattenObject flattens a nested object", () => {
    expect(flattenObject({a: {b: {c: 2}}, d: 3})).toEqual({
        "a.b.c": 2,
        d: 3,
    });
});

test("unflattenObject expands a flattened object", () => {
    expect(
        unflattenObject({
            "a.b.c": 2,
            d: 3,
        })
    ).toEqual({a: {b: {c: 2}}, d: 3});
});