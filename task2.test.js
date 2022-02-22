const reverseString = require('./task-2');

describe('reverseString', function () {
  it('reverses a single word', function () {
    const word = 'Jest';

    const reversedWord = reverseString(word);

    expect(reversedWord).toEqual('tseJ');
  });

  it('reverses multiple words with symbols', function () {
    const string = 'This is my 2nd test!';

    const reversedString = reverseString(string);

    expect(reversedString).toEqual('!tset dn2 ym si sihT');
  });

  it('reverses an empty string', function () {
    const emptyString = '';

    const reversedString = reverseString(emptyString);

    expect(reversedString).toEqual('');
  });
});
