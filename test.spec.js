// Function Definitions

function capitalize(string) {
  // Your implementation here
  return string.substring(0, 1).toUpperCase() + string.substring(1);
}

function reverseString(string) {
  // Your implementation here
  return string.split('').reverse().join('');
}

const calculator = {
  add(a, b) {
    // Your implementation here
    return a + b;
  },
  subtract(a, b) {
    // Your implementation here
    return a - b;
  },
  divide(a, b) {
    // Your implementation here
    return a / b;
  },
  multiply(a, b) {
    // Your implementation here
    return a * b;
  }
};
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}
function caesarCipher(string, shift) {
  // Your implementation here
  let res = '';
  for (const c of string.split('')) {
    if (!isLetter(c)) {
      res += c;
    } else {
      const next = c.charCodeAt(0);
      if (isLowerCase(c)) {
        res += String.fromCharCode(((next + shift - 97) % 26) + 97);
      } else {
        res += String.fromCharCode(((next + shift - 65) % 26) + 65);
      }
    }
  }
  return res;
}

function analyzeArray(array) {
  // Your implementation here
  const length = array.length;
  let average = array.reduce((prev, cur) => prev + cur, 0) / length,
    min = Math.min(...array),
    max = Math.max(...array);
  return { length, average, min, max };
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
