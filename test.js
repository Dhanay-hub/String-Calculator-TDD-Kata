const add = require('./tdd');

test('Should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('Should return the number if length is 1', () => {
    expect(add("10")).toBe(10);
});

test('Should return the sum if length is more than 1', () => {
    expect(add("1,2,3")).toBe(6);
});

test('Should return the sum if length is more than 1', () => {
    expect(add("1,2\n3,4")).toBe(10);
});

test('Should return the sum if length is more than 1 and custom delimeter', () => {
    expect(add("//;\n1;2;4;6" )).toBe(13);
});

test('Should throw an error if there is a negative number', () => {
    try {
        add("1,-2,-3");
      } catch (e) {
        expect(e.message).toBe("Array contains a negative number which is not allowed");
      }
});