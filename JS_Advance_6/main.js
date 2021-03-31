// ДЗ по localStorage
 
// Потрібно розробити форму для реєстрації, логінування а також блок профайлу.
// Всі дані проходять через localStorage. Основні пункти що має працювати.
// При реєстрації дані попадають в localStorage. Перед добавленням нового користувача провіряємо чи нема у нас вже користувача з такою поштою, якщо є то не добавляти його. Всі дані мають валідуватися регулярними виразами.
// При логінуванні перевіряти чи всі поля заповнені і чи правильний логін та пароль, якщо щось не так виводити відповідне повідомлення. Всі дані беруться з localStorage.
// Якщо правильний логін та пароль то перейти на блок профайлу.
// При натисканні на Sign Out переходимо назад на блок Sign In.


let getSel = (x) => document.querySelector(x);
let a = null;
let fieldTest = 0;

let emailTEST =  /^[a-zA-Z0-9]+@+.{3,99}$/;
let nameTest = /^[a-zA-Z]{1,20}$/;
let sNameTest = /^[a-zA-Z]{1,20}$/;
let passTest = /^[a-zA-Z0-9]{8,25}$/;

class User {
    constructor(first, last , email , password){
        this.firstName = first;
        this.lastName = last;
        this.email = email;
        this.password = password;
    }
}




let users = [];

if(localStorage.length > 0) {
    users = JSON.parse(localStorage.getItem('USERS'));
}

getSel('.createBtn').addEventListener('click', function(){
    fieldTest = 0

    let firstName = getSel('.first_name').value;
    let lastName = getSel('.last_name').value;
    let email = getSel('.createEmail').value;
    let password = getSel('.createPassword').value;
    let user = new User(firstName, lastName, email, password);

    if( emailTEST.test(email) ) {
        
        if(emailTest(email) == true) {
            console.log('Busy');
            getSel('.createEmail').style.borderColor = 'red';
            alert('This email! is already used!');
        } else {
            getSel('.createEmail').style.borderColor = 'gray';
            fieldTest++
        }
    } else {
        getSel('.createEmail').style.borderColor = 'red';
        // alert('Incorrect Email!');
    }

        
    if( nameTest.test(firstName) ) {
        
            fieldTest++
            getSel('.first_name').style.borderColor = 'gray';
        
    } else {
        getSel('.first_name').style.borderColor = 'red';
        // alert('Incorrect name');
    }

    if( sNameTest.test(lastName) ) {
        
            fieldTest++
            getSel('.last_name').style.borderColor = 'gray';
        
    } else {
        getSel('.last_name').style.borderColor = 'red';
        // alert('Incorrect last name!');
    }


    if( passTest.test(password) ) {
        
            fieldTest++
            getSel('.createPassword').style.borderColor = 'gray';
        
    } else {
        getSel('.createPassword').style.borderColor = 'red';
        // alert('Incorrect Password!');
    }

    // console.log(fieldTest);

    if(fieldTest == 4) {

        users.push(user);
        localStorage.setItem('USERS', JSON.stringify(users));
        getSel('.first_name').value = '';
        getSel('.last_name').value = '';
        getSel('.createEmail').value = '';
        getSel('.createPassword').value = '';
        // let user = new User(firstName, lastName, email, password);
    }



        
         
})

let r = localStorage.getItem('USERS');
r = JSON.parse(r);
// console.log(r[0]);

let y = localStorage.key('');
// console.log(y);
let indexOfObj = null;

function emailTest(email) {
    indexOfObj = null;

    let c = false;

    

    for(let i = 0; i < users.length; i++) {
        
         if(email == users[i].email) {
            console.log(i);
            console.log(users[i].email);
            indexOfObj = i;
            
            c = true;

        } 
    }
    
    return c;

}


function passwordTest(password,index) {
    let a = false;

    // if(getSel('.signPassword').value != '' && getSel('.signEmail').value != '') {
    //     getSel('.signEmail').style.borderColor = 'gray';
    //     getSel('.signPassword').style.borderColor = 'gray';
    //     console.log('password is' + password);
    //     console.log('Local storage password =' + users[index].password);
    // } else {
    //     console.log("empty")
    //     getSel('.signEmail').style.borderColor = 'red';
    //     getSel('.signPassword').style.borderColor = 'red';
    // }



    if(password === users[index].password) {
        a = true;
    }
    return a;
}


getSel('.log_in_back').addEventListener('click', function () {
    getSel('.registration').style.display = 'none';
    getSel('.sign_in').style.display = 'block';
})
getSel('.signOut_btn').addEventListener('click', function () {
    getSel('.registration').style.display = 'none';
    getSel('.sign_in').style.display = 'block';
    getSel('.profile').style.display = 'none';
})
getSel('.createNewBtn').addEventListener('click', function () {
    getSel('.registration').style.display = 'block';
    getSel('.sign_in').style.display = 'none';
    getSel('.profile').style.display = 'none';
    getSel('.signPassword').style.borderColor = 'gray';
    getSel('.signPassword').style.borderColor = 'gray';
})




getSel('.signIn_btn').addEventListener('click', function () {

    let email = getSel('.signEmail').value;
    let password = getSel('.signPassword').value;


    if( emailTEST.test(email) ) {
        if(emailTest(email) == true) {
            getSel('.signEmail').style.borderColor = 'gray';
            passwordTest(password,indexOfObj);
            if(passwordTest(password,indexOfObj) == true) {
                getSel('.profile').style.display = 'block';
                getSel('.registration').style.display = 'none';
                getSel('.sign_in').style.display = 'none';
                getSel('.profile_email').innerText = `${users[0].firstName}  ${users[0].lastName}`
            }
        } else {
            
            getSel('.signEmail').style.borderColor = 'red';
        }
    } else {
        getSel('.signEmail').style.borderColor = 'red';
    }


    if( passTest.test(password) ) {
        getSel('.signPassword').style.borderColor = 'gray';
    
    } else {
        getSel('.signPassword').style.borderColor = 'red';
    }

    
})
// console.log(users[0].password);


// function findEmail(email) {
    

// }

// console.log(users[0].firstName)
// console.log(users[0].lastName)