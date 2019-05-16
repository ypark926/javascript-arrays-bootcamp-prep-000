var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element) {
  var newArray = [];
  newArray = arr.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr = arr.unshift(element);
  return arr;
}