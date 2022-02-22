const Calculator = require('./task3');

describe('add', function () {
  beforeEach(() => {
    calc = new Calculator();
  });

  it('adds two numbers', function () {
    const x = 1;
    const y = 2;

    const result = calc.add(x, y);

    expect(result).toEqual(3);
  });

  it('adds negative numbers', function () {
    const x = -2;
    const y = 2;

    const result = calc.add(x, y);

    expect(result).toEqual(0);
  });

  it('throws error if one of the two arguments is not defined', function () {
    const x = 1;
    let y;

    expect(() => calc.add(x, y)).toThrowError(
      'ARG 1 IS UNDEFINED',
    );
  });

  it('throws error if onr of the two arguments is NAN', function () {
    const x = 1;
    let y = 'NAN';

    expect(() => calc.add(x, y)).toThrowError(
      'ARG 1 IS NAN',
    );
  });
});


describe('subtract', function () {
  beforeEach(() => {
    calc = new Calculator();
  });

  it('subtract two numbers', function () {
    const x = 1;
    const y = 2;

    const result = calc.subtract(x, y);

    expect(result).toEqual(-1);
  });

  it('works with negative numbers', function () {
    const x = 2;
    const y = -2;

    const result = calc.subtract(x, y);

    expect(result).toEqual(4);
  });

  it('throws error if one of the two arguments is not defined', function () {
    const x = 1;
    let y;

    expect(() => calc.subtract(x, y)).toThrowError(
      'ARG 1 IS UNDEFINED',
    );
  });

  it('throws error if onr of the two arguments is NAN', function () {
    const x = 1;
    let y = 'NAN';

    expect(() => calc.subtract(x, y)).toThrowError(
      'ARG 1 IS NAN',
    );
  });
});
