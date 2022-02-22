const stringLength = require('./task1');

describe('stringLength', function () {
  it('returns the length of the string', function () {
    const string = 'Jest';

    const length = stringLength(string);

    expect(length).toEqual(4);
  });

  it('throws an error if the length of the string is less than 1', function () {
    const emptyString = '';

    expect(() => stringLength(emptyString)).toThrowError(
      'STRING LENGTH ERROR',
    );
  });
});
