'use strict'

alert('Prototype style');

function Robot(value) {

    this.nameRobot = value;
}
Robot.prototype.setNameRobot = function (name) {
    this.nameRobot = name;
}

Robot.prototype.getNameRobot = function () {
    return this.nameRobot;
}

Robot.prototype.work = function () {
    console.log('Я ' + this.nameRobot + ' – я просто працюю')
}

function CoffeRobot(value) {
    this.nameRobot = value;
}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

CoffeRobot.prototype.work = function () {
    console.log('Я ' + this.nameRobot + ' – я просто варю каву')
}

function RobotDancer(value) {
    this.nameRobot = value;
}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.work = function () {
    console.log('Я ' + this.nameRobot + ' – я просто танцюю')
}

function RobotCoocker(value) {

    this.nameRobot = value;
}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

RobotCoocker.prototype.work = function () {
    console.log('Я ' + this.nameRobot + ' – я просто готую їжу')
}



let robot = new Robot('Robot');
let coffeRobot = new CoffeRobot('CoffeRobot');
let dancerRobot = new RobotDancer('RobotDancer');
let coockerRobot = new RobotCoocker('RobotCoocker');

robot.work();
coffeRobot.work();
dancerRobot.work();
coockerRobot.work();

alert('Array with objects Robot');

let arrWithRobot = [];
arrWithRobot.push(robot, coffeRobot, dancerRobot, coockerRobot);

for (let i = 0; i < arrWithRobot.length; i++) {
    arrWithRobot[i].work();
}

function alert(massage) {
    console.log('-------------------------------------');
    console.log(massage);
    console.log('-------------------------------------');
}
