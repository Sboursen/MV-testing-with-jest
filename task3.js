class Calculator {
  add(x, y) {
    Object.keys(arguments).forEach((arg) => {
      if (arguments[arg] === undefined) {
        throw new Error(`ARG ${arg} IS UNDEFINED`);
      }
    });

    Object.keys(arguments).forEach((arg) => {
      if (isNaN(arguments[arg])) {
        throw new Error(`ARG ${arg} IS NAN`);
      }
    });

    return x + y;
  }

  subtract(x, y) {
    Object.keys(arguments).forEach((arg) => {
      if (arguments[arg] === undefined) {
        throw new Error(`ARG ${arg} IS UNDEFINED`);
      }
    });

    Object.keys(arguments).forEach((arg) => {
      if (isNaN(arguments[arg])) {
        throw new Error(`ARG ${arg} IS NAN`);
      }
    });

    return x - y;
  }

  multiply(x, y) {
    Object.keys(arguments).forEach((arg) => {
      if (arguments[arg] === undefined) {
        throw new Error(`ARG ${arg} IS UNDEFINED`);
      }
    });

    Object.keys(arguments).forEach((arg) => {
      if (isNaN(arguments[arg])) {
        throw new Error(`ARG ${arg} IS NAN`);
      }
    });

    return x * y;
  }

  divide(x, y) {
    Object.keys(arguments).forEach((arg) => {
      if (arguments[arg] === undefined) {
        throw new Error(`ARG ${arg} IS UNDEFINED`);
      }
    });

    Object.keys(arguments).forEach((arg) => {
      if (isNaN(arguments[arg])) {
        throw new Error(`ARG ${arg} IS NAN`);
      }
    });

    if (arguments[1] === 0) {
      throw new Error(`DENOMINATOR IS ZERO`);
    }

    return x / y;
  }
}

module.exports = Calculator;
