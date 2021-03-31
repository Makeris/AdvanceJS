// Реалізуйте клас Worker(Працівник), який буде мати такі властивості: firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів). Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість відпрацьованих днів days.
// Ось так повинен працювати наш клас:
// const worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.name); // виведе 'Ivan'
// console.log(worker.surname); //виведе 'Ivanov'
// console.log(worker.rate); //виведе 10
// console.log(worker.days); //виведе 31
// console.log(worker.getSalary()); //виведе 310 - тобто 10*31

// За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат.

// class Worker {
//     constructor(firstName,secondName, rate, days) {
//         this.firstName = firstName;
//         this.secondName = secondName;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSellary() {
//         return this.rate * this.days;
//     }
// }

// let worker1 = new Worker('Valera','Cobez', 300,22);

// console.log(worker1.firstName);
// console.log(worker1.secondName);
// console.log(worker1.rate);
// console.log(worker1.days);
// console.log(worker1.getSellary());



// Завдання 2.

// Реалізуйте клас MyString, який матиме наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(), який приймає рядок і робить капіталізації першої літери кожного слова цього рядка.
// Наш клас повинен працювати так:

// const str = new MyString();

// console.log(str.reverse('IVAN')); //виведе 'NAVI'
// console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
// console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'



class MyString {


    reverseString(str) {
        str = str.split('');
        let reverseString = [];
        for (let i = str.length - 1; i >= 0; i--) {
            reverseString.push(str[i]);
        }
        return reverseString.join('');
    }

    ucFirst(str) {
        str = str.split('');
        str[0] = str[0].toUpperCase();
        str = str.join('');
        return str
    }

    ucWords(a) {
    
        a = a.split(' ');
        let b = [];
        a.forEach(element => {
            b.push(element.split(''));
        });
    
        b.forEach(element => {
           element[0] =  element[0].toLocaleUpperCase();   
        });
    
        let c = [];
        
        b.forEach(element => {
           c.push(element.join(''));   
        });
    
        c = c.join(' ');
    
        return c;
    
    }

}

const str = new MyString();

console.log(str.reverseString('Ivan')); // navi
console.log(str.ucFirst('arsenal')); // Arsenal
console.log(str.ucWords('arsenal arsenal arsenal')); // Arsenal Arsenal Arsenal








