'use strict'

//first exercice
let products = [];

function getLastElement(array){
    return array[array.length - 1]
}

products = [ 'Apple', 'Orange', 'Cherry' ];

console.log(getLastElement(products));


//second exercice
let styles = ['Jazz', 'Blues'];
styles.push('Classic');
console.log(styles);

styles.splice((styles.length - 2),1,'Rock');
console.log(styles);

console.log(styles.shift());

styles.unshift('Rap', 'Reggae')
console.log(styles);

//third exercice

function find(array,value){
    let element = 0;
    for (let i = 0; i < array.length; i++){
        let flag = value === array[i];
        if(flag == true){
            element = i;
        }
    }
    if(element != 0){
        return element;
    }else{
        return -1;
    }
}
let name = 'Classic';
let result = find(styles,name);
console.log(result);

// fourth exercice

function filterRange(array, a, b){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if(a < array[i] & b > array[i]){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let firstArray = [1,2,465,463,63,723,5,1235,12,35,1,532,3634,621,36,2343,6723,3,652,3467];
let secondArray = filterRange(firstArray,1,500);
console.log(secondArray);

//fifth exercice
function camelize(str){
    let array = str.split('-');
    let newArray = [];
    newArray.push(array[0]);
     for(let i = 1; i < array.length; i++){
         let secondArray =  array[i].split('');
        secondArray.splice(0,1,secondArray[0].toUpperCase());
        newArray.push(secondArray.join(''));
    }
    let newStr = newArray.join('');
    return newStr;
}

let str = 'my-short-string';
console.log(camelize(str));