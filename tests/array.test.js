import {
    arrayDifference,
    arrayIntersection,
    arraysEqual,
    arrayToObject,
    chunkArray,
    countOccurrences,
    findDuplicates,
    flattenArray,
    groupBy,
    maxByProperty,
    minByProperty,
    objectToArray,
    partitionArray,
    randomElement,
    range,
    removeDuplicates,
    removeFalsyValues,
    rotateArray,
    shuffleArray,
    sortByProperty,
    uniqueByProperty,
    without,
} from "../src/array";

test("removeDuplicates removes duplicate values", () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
});

test("flattenArray flattens nested arrays", () => {
    expect(flattenArray([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
});

test("chunkArray chunks the array correctly", () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
    ]);
});

test("arrayIntersection finds common elements", () => {
    expect(arrayIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
});

test("arrayDifference finds unique elements in the first array", () => {
    expect(arrayDifference([1, 2, 3], [2, 4])).toEqual([1, 3]);
});

test("uniqueByProperty ensures uniqueness by property", () => {
    expect(uniqueByProperty([{id: 1}, {id: 2}, {id: 1}], "id")).toEqual([
        {id: 1},
        {id: 2},
    ]);
});

test("groupBy groups elements by a property", () => {
    expect(
        groupBy([{group: "A"}, {group: "B"}, {group: "A"}], "group")
    ).toEqual({
        A: [{group: "A"}, {group: "A"}],
        B: [{group: "B"}],
    });
});

test("findDuplicates finds duplicate elements", () => {
    expect(findDuplicates([1, 2, 2, 3, 3, 3])).toEqual([2, 3]);
});

test("removeFalsyValues removes falsy values", () => {
    expect(removeFalsyValues([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

test("randomElement gets a random element", () => {
    const input = [1, 2, 3, 4];
    expect(input).toContain(randomElement(input));
});

test("shuffleArray shuffles the array", () => {
    const input = [1, 2, 3, 4];
    const result = shuffleArray(input);
    expect(result.sort()).toEqual(input.sort());
});

test("arrayToObject converts array to object", () => {
    expect(
        arrayToObject([
            ["a", 1],
            ["b", 2],
        ])
    ).toEqual({a: 1, b: 2});
});

test("objectToArray converts object to array", () => {
    expect(objectToArray({a: 1, b: 2})).toEqual([
        ["a", 1],
        ["b", 2],
    ]);
});

test("rotateArray rotates the array correctly", () => {
    expect(rotateArray([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
});

test("partitionArray partitions the array based on predicate", () => {
    expect(partitionArray([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([
        [2, 4],
        [1, 3],
    ]);
});

test("countOccurrences counts occurrences correctly", () => {
    expect(countOccurrences([1, 2, 2, 3, 3, 3])).toEqual({1: 1, 2: 2, 3: 3});
});

test("sortByProperty sorts by a property", () => {
    expect(
        sortByProperty([{age: 30}, {age: 20}, {age: 25}], "age")
    ).toEqual([{age: 20}, {age: 25}, {age: 30}]);
});

test("maxByProperty finds max by property", () => {
    expect(maxByProperty([{score: 50}, {score: 75}], "score")).toEqual({
        score: 75,
    });
});

test("minByProperty finds min by property", () => {
    expect(minByProperty([{score: 50}, {score: 75}], "score")).toEqual({
        score: 50,
    });
});

test("arraysEqual checks array equality", () => {
    expect(arraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
});

test("range generates a range of numbers", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
});

test("without removes specified values from the array", () => {
    expect(without([1, 2, 3, 4, 5], 2, 4)).toEqual([1, 3, 5]);
});

test("without returns the original array if no values are excluded", () => {
    expect(without([1, 2, 3], 4, 5)).toEqual([1, 2, 3]);
});

test("without returns an empty array if all elements are excluded", () => {
    expect(without([1, 2, 3], 1, 2, 3)).toEqual([]);
});

test("without handles cases with only one element to exclude", () => {
    expect(without([1, 2, 3, 4], 2)).toEqual([1, 3, 4]);
});

test("without returns the same array if the values to exclude are not present", () => {
    expect(without([1, 2, 3], 4)).toEqual([1, 2, 3]);
});

test("without handles an empty array correctly", () => {
    expect(without([], 1, 2, 3)).toEqual([]);
});

test("without handles no values to exclude", () => {
    expect(without([1, 2, 3])).toEqual([1, 2, 3]);
});
