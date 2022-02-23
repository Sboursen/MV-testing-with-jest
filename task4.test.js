const capitalize = require('./task4');

describe('capitalize', function () {
  it('works for one word', function () {
    const string = 'jest';

    const capitalizedString = capitalize(string);

    expect(capitalizedString).toEqual('Jest');
  });

  it('works for multiple words with space between them', function () {
    const string = 'jest is beautiful';

    const capitalizedString = capitalize(string);

    expect(capitalizedString).toEqual('Jest Is Beautiful');
  });
});
