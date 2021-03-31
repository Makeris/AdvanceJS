let getSel = (x) => document.querySelector(x);
let getAll = (y) => document.querySelectorAll(y);
let editForm = document.forms['editerForm'];
let allData = [];
let newObj = {};
let userIndex;
getSel('.addUserBtn').addEventListener('click', addUser); //// ADD USER
function addUser() {
    if (getSel('.input_login').value != '' && getSel('.input_password').value != '' && getSel('.input_email').value != '') {
        let a = getSel('.input_login').value;
        let b = getSel('.input_password').value;
        let c = getSel('.input_email').value;
        getSel('.input_login').value = '';
        getSel('.input_password').value = '';
        getSel('.input_email').value = '';
        let obj = {
            login: a,
            password: b,
            email: c
        };
        allData.push(obj);
        render();
    }
    else {
        alert('Enter all fields');
    }
}
function render() {
    getSel('.formEdit').innerHTML = '';
    allData.forEach((element, index, array) => {
        getSel('.formEdit').innerHTML += `<div class="editer_block_item">
                    
        <div class="number">${index + 1}</div>
        
        <div class="login">${allData[index].login}</div>
        
        <div class="password">${allData[index].password}</div>
        
        <div class="email">${allData[index].email}</div>
    
        <div class="editBtn_block">
            <button value='${index}' name="edit" type="button" class="editBtn">Edit</button>
        </div>
    
        <div class="deleteBtn_block">
            <button value='${index}' name="delete" type='button' class="deleteBtn">Delete</button>
        </div>
    
        </div>`;
    });
    deleteUser();
}
function deleteUser() {
    if (editForm.children.length > 1) {
        let deleteButtons = editForm.delete;
        let editButtons = editForm.edit;
        deleteButtons.forEach((element, ind, array) => {
            editForm.delete[ind].addEventListener('click', function () {
                allData.splice(ind, 1);
                render();
                getSel('.editUserBtn').style.display = 'none';
                getSel('.addUserBtn').style.display = 'block';
                getSel('.input_login').value = '';
                getSel('.input_password').value = '';
                getSel('.input_email').value = '';
            });
            editButtons[ind].addEventListener('click', editUser);
        });
    }
    else if (editForm.children.length == 1) {
        getSel('.deleteBtn').addEventListener('click', function () {
            getSel('.editUserBtn').style.display = 'none';
            getSel('.addUserBtn').style.display = 'block';
            getSel('.input_login').value = '';
            getSel('.input_password').value = '';
            getSel('.input_email').value = '';
            allData.splice(0, 1);
            render();
        });
        getSel('.editBtn').addEventListener('click', editUser);
    }
}
function editUser() {
    getSel('.addUserBtn').style.display = 'none';
    getSel('.editUserBtn').style.display = 'block';
    getSel('.input_login').value = allData[this.value].login;
    getSel('.input_password').value = allData[this.value].password;
    getSel('.input_email').value = allData[this.value].email;
    userIndex = this.value;
    getSel('.editUserBtn').addEventListener('click', saveEditUser);
}
function saveEditUser() {
    if (getSel('.input_login').value != '' && getSel('.input_password').value != '' && getSel('.input_email').value != '') {
        getSel('.addUserBtn').style.display = 'block';
        getSel('.editUserBtn').style.display = 'none';
        allData[userIndex] = {
            login: getSel('.input_login').value,
            password: getSel('.input_password').value,
            email: getSel('.input_email').value
        };
        getSel('.input_login').value = '';
        getSel('.input_password').value = '';
        getSel('.input_email').value = '';
        render();
    }
    else {
        alert('Enter fields');
    }
}
