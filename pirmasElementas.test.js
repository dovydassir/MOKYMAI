const pirmasElementas = require('./pirmasElementas');

test('pirmas skaičius', () => {
    expect(pirmasElementas([1, 2, 3])).toBe(1);
});

test('pirmas žodis', () => {
    expect(pirmasElementas(['labas', 'rytas'])).toBe('labas');
});

test('vienas elementas', () => {
    expect(pirmasElementas([5])).toBe(5);
});