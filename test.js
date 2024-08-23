const add = require('./tdd');

test('Should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('Should return the number if length is 1', () => {
    expect(add("10")).toBe(10);
});