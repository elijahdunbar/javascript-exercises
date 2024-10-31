const reverseString = function(str) {
  let strArray = Array.from(str);
  let strReversed = '';
  
  for (let i = -1; i > -(strArray.length + 1); i--) {
    strReversed += strArray.at(i);
  }
  return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
