const lyginis = require('./lyginis');

test('4 yra lyginis', () => {
    expect(lyginis(4)).toBe(true);
});

test('7 yra nelyginis', () => {
    expect(lyginis(7)).toBe(false);
});

test('0 yra lyginis', () => {
    expect(lyginis(0)).toBe(true);
});