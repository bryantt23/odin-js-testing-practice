// Function Definitions

function capitalize(string) {
  // Your implementation here
}

function reverseString(string) {
  // Your implementation here
}

const calculator = {
  add(a, b) {
    // Your implementation here
  },
  subtract(a, b) {
    // Your implementation here
  },
  divide(a, b) {
    // Your implementation here
  },
  multiply(a, b) {
    // Your implementation here
  }
};

function caesarCipher(string, shift) {
  // Your implementation here
}

function analyzeArray(array) {
  // Your implementation here
}

// Jest Tests

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('example')).toBe('Example');
  });

  test('does not change the rest of the string', () => {
    expect(capitalize('testString')).toBe('TestString');
  });
});

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe('caesarCipher', () => {
  test('shifts characters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 1)).toBe('yza');
  });

  test('keeps the same case', () => {
    expect(caesarCipher('AbC', 1)).toBe('BcD');
  });

  test('does not shift punctuation', () => {
    expect(caesarCipher('hello!', 1)).toBe('ifmmp!');
  });
});

describe('analyzeArray', () => {
  test('returns the correct object', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
});
