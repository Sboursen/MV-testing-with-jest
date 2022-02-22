const Calculator = require('./task3');

beforeAll(() => {
  const calc = new Calculator();
});

describe('add', function () {
  it('adds two numbers', function () {
    const x = 1;
    const y = 2;

    const result = calc.add(x, y);

    expect(result).toEqual(3);
  });

  it('adds negative numbers', function () {
    const x = 1;
    const y = 2;

    const result = calc.add(x, y);

    expect(result).toEqual(3);
  });

  it('throws error if the two arguments are not defined', function () {
    const x = 1;
    let y;

    expect(() => calc.add(x, y)).toThrowError(
      'ARG NOT DEFINED',
    );
  });

  it('throws error if the two arguments are not numbers', function () {
    const x = 1;
    let y;

    expect(() => calc.add(x, y)).toThrowError(
      'ARG NOT NUMBERS',
    );
  });
});
