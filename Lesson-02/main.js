'use strict'

let user = {
    name: "Пилип",
    surName: "Шевченко"
};

console.log(user);

user.name = "Сергій";
console.log(user);

delete user.name;
console.log(user);

let employeeSalaries ={
    petersSalary: 1000,
    olgasSalary: 800,
    mMikesSalary: 1100
};

for(let salary in employeeSalaries){
    console.log(salary + " --> " + employeeSalaries[salary] + " USD");
}

function calculator(valueOne,valueTwo,operation){
    try{
        switch(operation){
            case "+":
                return valueOne + valueTwo;
                break;
            
            case "-":
                return valueOne - valueTwo;
                break;
            
            case "*":
                return valueOne * valueTwo;
                break;
            
            case "/":
                return valueOne / valueTwo;
                break;
            default: 
            throw new SyntaxError('Введений не коректний оператор');
        }
    
    }
    catch(err){
        console.log("упс!!!щось не так --> " + err);
    }
}
console.log("Результат = " + calculator(1,5,"/"));