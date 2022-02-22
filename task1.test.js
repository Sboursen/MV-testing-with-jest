const stringLength = require('./task1');

describe('stringLength', function () {
  it('returns the length of the string', function () {
    const string = 'Jest';

    const length = stringLength(string);

    expect(length).toEqual(4);
  });
});
