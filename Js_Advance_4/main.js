// Завдання 1. 
// Для виконання цього завдання використайте prototype.

// Напишіть функцію CoffeeMake, яка буде мати в прототипах 2 методи: on(),off().
// Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина, які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний.


    function CoffeMake() {};


    CoffeMake.prototype.on = function() {
        console.log('CoffeMake - On');
    }
    CoffeMake.prototype.off = function() {
        console.log('CoffeMake - Off');
    }

    const coffeMaker = new CoffeMake();

    coffeMaker.on();
    coffeMaker.off();

    function DropCoffe() {};

    DropCoffe.prototype = CoffeMake.prototype;
    const myDropCoffe = new DropCoffe();

    DropCoffe.prototype.makeDropCoffe = function() {
        console.log('MakeDropCoffe')
    };
    DropCoffe.prototype.makeExpressiveCoffe = function() {
        console.log('MakeExpressiveCoffe')
    };
    DropCoffe.prototype.makeLiteCoffe = function() {
        console.log('MakeLiteCoffe')
    };

    function ConeCoffe() {};

    ConeCoffe.prototype = DropCoffe.prototype;
    const myConeCoffe = new ConeCoffe();
    ConeCoffe.prototype.makeSugarCoffe = function() {
        console.log('Make a sugar coffe');
    };


    function CoffeMachine () {};

    CoffeMachine.prototype = CoffeMake.prototype;

    const myCoffeMachine = new CoffeMachine();

    CoffeMachine.prototype.makeCapuchino = function() {
        console.log('Capuchino');
    }
    myCoffeMachine.off();
    myCoffeMachine.makeCapuchino();

