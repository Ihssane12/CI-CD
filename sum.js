function sum(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array');
    }
  
    return numbers.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        return acc + sum(curr);
      } else if (typeof curr === 'number') {
        return acc + curr;
      } else {
        throw new Error('Array must contain only numbers or nested arrays');
      }
    }, 0);
  }
  
  module.exports = sum;