// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, причому на ту кількість яка довжина слова
// Якщо textarea порожня виводити повыдолення про заповнення поля


let badWordsArr = ['React','SCSS','Logos'];

let getSel = (x) => document.querySelector(x);

generateWords();

getSel('.resetBtn').addEventListener('click',resetArray);
getSel('.cenzorBtn').addEventListener('click', textAreaEdit);
getSel('.addBtn').addEventListener('click',addWord);

function generateWords() {
    getSel('.main_words_list').innerText = badWordsArr.join(', ') 
}

function addWord() {
    if(getSel('.addWord').value != '') {
        getSel('.addWord').style.borderColor = 'white';

        badWordsArr.push(getSel('.addWord').value);
        getSel('.addWord').value = '';
        generateWords();
    } else {
        getSel('.addWord').style.borderColor = 'red';
    }
}

function textAreaEdit() {
    if(getSel('#textarea').value != '') { 
        getSel('#textarea').style.borderColor = 'white';
        let a = getSel("#textarea").value; 
        
        a = a.split(' ');  
        
        badWordsArr.forEach((element,index) => { 
            
            for(let i = 0; i < a.length; i++) { 


                if(element.toLocaleLowerCase() == a[i].toLocaleLowerCase()) {

                    let stars = '';

                    for(let j = 0; j < element.length; j++) {
                        stars += '*';
                    }
                    
                    a[i] = stars; 

                    getSel("#textarea").value = a.join(' '); 
                }
            }

        });

    } else {
        getSel('#textarea').style.borderColor = 'red';
    }
    
}

function resetArray() {
    badWordsArr = [];
    generateWords();
}

