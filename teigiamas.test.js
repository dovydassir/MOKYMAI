const teigiamas = require('./teigiamas');

test('5 yra teigiamas', () => {
    expect(teigiamas(5)).toBe(true);
});

test('-2 nėra teigiamas', () => {
    expect(teigiamas(-2)).toBe(false);
});

test('0 nėra teigiamas', () => {
    expect(teigiamas(0)).toBe(false);
});