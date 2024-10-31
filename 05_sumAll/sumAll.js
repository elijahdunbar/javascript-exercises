const sumAll = function(a, b) {
  let result = 0;
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    result = 'ERROR';
  } else {
    if (b > a) {
        for (let i = a; i <= b; i++) {
          result += i;
        }
    } else if (a > b) {
      for (let i = b; i <= a; i++) {
        result += i;
      }
    } 
    
  }
  return result;
};

// console.log(Number.isInteger('99'));

// Do not edit below this line
module.exports = sumAll;
