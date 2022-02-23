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

  it('throws error if one of the two arguments is NAN', function () {
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

  it('throws error if one of the two arguments is NAN', function () {
    const x = 1;
    let y = 'NAN';

    expect(() => calc.subtract(x, y)).toThrowError(
      'ARG 1 IS NAN',
    );
  });
});

describe('multiply', function () {
  beforeEach(() => {
    calc = new Calculator();
  });

  it('multiply two numbers', function () {
    const x = 2;
    const y = 2;

    const result = calc.multiply(x, y);

    expect(result).toEqual(4);
  });

  it('works with negative numbers', function () {
    const x = 3;
    const y = -2;

    const result = calc.multiply(x, y);

    expect(result).toEqual(-6);
  });

  it('throws error if one of the two arguments is not defined', function () {
    const x = 1;
    let y;

    expect(() => calc.multiply(x, y)).toThrowError(
      'ARG 1 IS UNDEFINED',
    );
  });

  it('throws error if one of the two arguments is NAN', function () {
    const y = 4;
    let x = 'NAN';

    expect(() => calc.multiply(x, y)).toThrowError(
      'ARG 0 IS NAN',
    );
  });
});

describe('divide', function () {
  beforeEach(() => {
    calc = new Calculator();
  });

  it('divides two numbers', function () {
    const x = 2;
    const y = 2;

    const result = calc.divide(x, y);

    expect(result).toEqual(1);
  });

  it('works with negative numbers', function () {
    const x = 4;
    const y = -2;

    const result = calc.divide(x, y);

    expect(result).toEqual(-2);
  });

  it('throws error if one of the two arguments is not defined', function () {
    const x = 1;
    let y;

    expect(() => calc.divide(x, y)).toThrowError(
      'ARG 1 IS UNDEFINED',
    );
  });

  it('throws error if one of the two arguments is NAN', function () {
    const y = 4;
    let x = 'NAN';

    expect(() => calc.divide(x, y)).toThrowError(
      'ARG 0 IS NAN',
    );
  });

  it('throws error if the denominator is zero', function () {
    const x = 4;
    const y = 0;

    expect(() => calc.divide(x, y)).toThrowError(
      'DENOMINATOR IS ZERO',
    );
  });
});
