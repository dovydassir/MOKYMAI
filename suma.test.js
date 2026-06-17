const suma = require('./suma');

test('2 + 3 = 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('10 + 5 = 15', () => {
    expect(suma(10, 5)).toBe(15);
});

test('0 + 0 = 0', () => {
    expect(suma(0, 0)).toBe(0);
});

