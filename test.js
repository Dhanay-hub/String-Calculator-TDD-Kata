const add = require('./tdd');

test('Should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});