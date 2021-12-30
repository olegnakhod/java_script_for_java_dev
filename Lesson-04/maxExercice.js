'use strict'

function alert(array){
    console.log(array);
    console.log('--------------------------------------------')
}

let student_1 = {yearOfStuding: 2 ,facultyName: 'Finace'};
let student_2 = {yearOfStuding: 1 ,facultyName: 'Engineering'};
let student_3 = {yearOfStuding: 3 ,facultyName: 'Filology'};
let student_4 = {yearOfStuding: 5 ,facultyName: 'Finace'};
let student_5 = {yearOfStuding: 4 ,facultyName: 'Filology'};
let student_6 = {yearOfStuding: 1 ,facultyName: 'Engineering'};
let student_7 = {yearOfStuding: 1 ,facultyName: 'Finace'};
let student_8 = {yearOfStuding: 5 ,facultyName: 'Filology'};
let student_9 = {yearOfStuding: 3,facultyName: 'Finace'};
let student_10 = {yearOfStuding: 4 ,facultyName: 'Engineering'};

let arrayWithStudents = [];
arrayWithStudents.push(student_1,student_2,student_3,student_4,student_5,student_6,student_7,student_8,student_9,student_10);


//first exercice
let studentsFacultet = [];

function getFacultet(obj,array){
    array.push(obj.facultyName);
}

function addElementToMassive(item){
    getFacultet(item,studentsFacultet)
}

arrayWithStudents.forEach(addElementToMassive)
alert(studentsFacultet);

//second exercice

function sumStudentsYears(sumOfYears, currentObj) {
	return sumOfYears + currentObj.yearOfStuding;
}

let yearsSum = arrayWithStudents.reduce(sumStudentsYears, 0);
alert(yearsSum);