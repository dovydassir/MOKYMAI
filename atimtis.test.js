const atimtis = require('./atimtis');

test('5 - 3 = 2', () => {
    expect(atimtis(5, 3)).toBe(2);
});

test('10 - 5 = 5', () => {
    expect(atimtis(10, 5)).toBe(5);
});

test('7 - 7 = 0', () => {
    expect(atimtis(7, 7)).toBe(0);
});