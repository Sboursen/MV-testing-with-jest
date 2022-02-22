class Calculator {
  add(x, y) {
    console.log(arguments);
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
    console.log(arguments);
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
    console.log(arguments);
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
}

module.exports = Calculator;
