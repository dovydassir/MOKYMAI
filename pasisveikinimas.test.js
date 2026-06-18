const pasisveikinimas = require('./pasisveikinimas');

test('Jonas', () => {
    expect(pasisveikinimas('Jonas')).toBe('Labas, Jonas!');
});

test('Petras', () => {
    expect(pasisveikinimas('Petras')).toBe('Labas, Petras!');
});

test('Ona', () => {
    expect(pasisveikinimas('Ona')).toBe('Labas, Ona!');
});