'use strict'

//first exercice

let array = [5,63,-46,458,3,812,-587,47,69,2,-465,15,8,2,-51,47,365,82,6,-7,-45,237,2,6,68];

function outArray(array){
    console.log(array);
    console.log('--------------------------------------------')
}

function sortedFromSmallestToLargest(a,b){
    return a - b;
}

let sortedArray = array.sort(sortedFromSmallestToLargest);
outArray(sortedArray);

function sortedFromLargestToSmallest(a,b){
    return b - a;
}

let reverseSortedArray = array.sort(sortedFromLargestToSmallest);
outArray(reverseSortedArray);

function filterByPositiveNumb(number) {
	return number > 0;
}

let arrayWithPositiveNumber = array.filter(filterByPositiveNumb);
outArray(arrayWithPositiveNumber);

function filterByNegativeNumb(number) {
	return number < 0;
}

let arrayWithNegativeNumber = array.filter(filterByNegativeNumb);
outArray(arrayWithNegativeNumber);
