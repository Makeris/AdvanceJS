// ДЗ по XMLHttpRequest
 
// Потрібно за допомогою XMLHttpRequest витягнути дані з OMDb API.
// Витягуємо дані по імені фільму
// Дані розпарсуємо на сторінці
// При натисканні на More Details має відкритися модалка з усіма даними про той фільм.
// Все має працювати.



let getSel = (x) => document.querySelector(x);
let page = 1;

let pageCount = 1;

let form = document.forms['main_form'];

let type = '';

let year = '';


getSel('.search_button').addEventListener('click', request);

// console.log(form.children[1].value);

function  request() {
    
    let filmInfo = getSel('.film_info').value;
     type = getSel('.typeSelector').value;
     
     year = getSel('.searchYear').value;
     
    
        // if(filmInfo != '') {

            console.log(myPromise())

            function myPromise() {
                return new Promise((resolve, reject) => {
                    const xml = new XMLHttpRequest();

                    xml.open('GET',`http://www.omdbapi.com/?s=${filmInfo}&plot=full&type=${type}&y=${year}&page=${page}&apikey=5399dfd7`);

                    xml.onload = () => resolve(xml.responseText);
                    xml.onerror = () => reject(xml.statusText);
                    xml.send();
                })
            }

            myPromise()
                .then(succes =>  {
                    
                    
                    let result = JSON.parse(succes);
                    getSel('.errorText').style.display = "none";
                    getSel('.main_form').style.display = "flex";
                    getSel('.page_list').style.display = "flex";
                    // getSel('.film_info').value = '';

                    console.log(result.response);
                    
                    let countOfFilms = result.Search.length;
                
                    getSel('.main_form').innerHTML = '';
                    for(let i = 0; i < countOfFilms; i++) {
                        
                        getSel('.main_form').innerHTML += `<div class="card">
                        <div class="poster"><img class="poster_image" src=${result.Search[i].Poster}></div>
                        <div class="movies_name"><p class="card_title">${result.Search[i].Title}</p></div>
                        <div class="type">${result.Search[i].Type}</div>
                        <div class="year">${result.Search[i].Year}</div>
                        <button value="${result.Search[i].imdbID}" class="card_button" name="formButton" type="button">View more</button>
                        </div>`;

                        
                        
                    }
                
                let a = setTimeout(createButtons, 10);
                function createButtons() {


                    if(countOfFilms > 1) {

                        for(let i = 0; i < countOfFilms; i++) {
                            
                            form.formButton[i].addEventListener('click',function(){
                                
                                requestFilmInfo(form.formButton[i].value);
    
                            })
                        }
                    } else {
                        form.formButton.addEventListener('click',function(){
                                
                            requestFilmInfo(form.formButton.value);

                        })
                    }
                    
                }

                getSel('.page_list').style.visibility = 'visible';
                getSel('.current_page').innerText = pageCount;
                
                getSel('.count_of_pages').innerText = Math.ceil(result.totalResults/10);

                }
                
                )
                .catch(data => {

                    getSel('.errorText').style.display = "block";
                    getSel('.main_form').style.display = "none";
                    getSel('.page_list').style.display = "none";
                    // console.log(data);
                    getSel('.film_info').value = '';
                })
                

        // } else {
        //     console.log('Empty');
        // }

    
    
}




function requestFilmInfo(id) {
    
    const xml = new XMLHttpRequest();

    
    xml.open('GET',`http://www.omdbapi.com/?i=${id}&plot=full&apikey=5399dfd7`, false);

    xml.onreadystatechange = function(){
        let result = xml.responseText
        result = JSON.parse(result);
        console.log(result);
        
        getSel('.raiting').innerText = '';
        getSel('.description_title').innerText = result.Title;
        getSel('.description_type').innerText = result.Genre;
        getSel('.description_text').innerText = result.Plot;
        getSel('.starring').innerText = result.Actors;
        getSel('.writtenBy').innerText = result.Director;
        getSel('.directedBy').innerText = result.Production;
        getSel('.boxOffice').innerText = `${result.BoxOffice}`;
        getSel('.awards').innerText = result.Awards;
        getSel('.descrition_poster_image').style.backgroundImage = `url(${result.Poster})`;
        closer();
        

        for(let i = 0; i < result.Ratings.length; i++ ) {
            getSel('.raiting').innerHTML += `${result.Ratings[i].Source} ${result.Ratings[i].Value} <br>`;
            
        }
        

    }
    xml.send();

    

}

function closer() {
    
    

    getSel('.film_description').style.display = 'flex';

    getSel('.film_description').addEventListener('click', function(){
        getSel('.film_description').style.display = 'none';
    })
    
};


getSel('.countDown').addEventListener('click', function () {
   
    if(getSel('.current_page').innerText > 1) {
        pageCount--
        getSel('.current_page').innerText = pageCount;
        page = pageCount;
        request();
        
        
    }
})
getSel('.countUp').addEventListener('click', function () {
    
    pageCount++
    getSel('.current_page').innerText = pageCount;
    page = pageCount;
    request();
    
    
    
       
})



