var chocolateBars = ['snickers, hundred grand, kitkat, skittles'];
var array = []

function addElementToBeginningOfArray(array, element){
  return ['element',...array];
}


function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}


function addElementToEndOfArray(array, element){
  return [...array, 'element'];
}

function destructivelyAddElementToEndOfArray(){
    return  array.push(element);
}