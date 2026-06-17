const daugyba = require('./daugyba');

test('2 * 3 = 6', () => {
    expect(daugyba(2, 3)).toBe(6);
});

test('5 * 0 = 0', () => {
    expect(daugyba(5, 0)).toBe(0);
});

test('10 * 2 = 20', () => {
    expect(daugyba(10, 2)).toBe(20);
});