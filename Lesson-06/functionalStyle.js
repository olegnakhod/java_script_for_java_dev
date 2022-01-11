'use strict'

alert('Functional style');

function Robot(value) {
    let self = this;

    self.nameRobot = value;

    self.setNameRobot = function (name) {
        self.nameRobot = name;
    }

    self.getNameRobot = function () {
        return self.nameRobot;
    }

    self.work = function () {
        console.log('Я ' + self.nameRobot + ' – я просто працюю')
    }
}

function CoffeRobot(value) {
    Robot.call(this);
    let self = this;

    self.nameRobot = value;

    self.work = function () {
        console.log('Я ' + self.nameRobot + ' – я просто варю каву')
    }
}

function RobotDancer(value) {
    Robot.call(this);
    let self = this;

    self.nameRobot = value;

    self.work = function () {
        console.log('Я ' + self.nameRobot + ' – я просто танцюю')
    }
}

function RobotCoocker(value) {
    Robot.call(this);
    let self = this;

    self.nameRobot = value;

    self.work = function () {
        console.log('Я ' + self.nameRobot + ' – я просто готую їжу')
    }
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
