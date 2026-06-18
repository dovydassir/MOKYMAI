const masyvoIlgis = require('./masyvoIlgis');

test('tuščias masyvas', () => {
    expect(masyvoIlgis([])).toBe(0);
});

test('vienas elementas', () => {
    expect(masyvoIlgis([5])).toBe(1);
});

test('trys elementai', () => {
    expect(masyvoIlgis([1, 2, 3])).toBe(3);
});