const removeFromArray = function(array, ...itemsToRemove) {
   
  for (item of itemsToRemove) {
    while (array.indexOf(item) !== -1){
    let index = array.indexOf(item);
    array.splice(index, 1);
    } 
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
