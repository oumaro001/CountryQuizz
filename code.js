/*----les Buttons navigation----------------------*/
let europe = document.getElementById('europe');
let amerique = document.getElementById('amerique');
let afrique = document.getElementById('afrique');
let asie = document.getElementById('asie');
let oceanie = document.getElementById('oceanie');
let monde = document.getElementById('monde');


/*-------La section---------------------------*/
let section = document.querySelector('sectionGame');

/*-----Le block image---------------*/
let afficheDrapeau = document.getElementById("afficheDrapeau");



function showCounttryByContinents(continent) {
    let tabCountry = [];
    let nameCountry = "";

    let req = new XMLHttpRequest();
    if (continent == "Europe") {
        req.open("get", 'https://restcountries.com/v3.1/subregion/europe');

    } else if (continent == "America") {
        req.open("get", 'https://restcountries.com/v3.1/subregion/america');

    } else if (continent == "Africa") {
        req.open("get", 'https://restcountries.com/v3.1/subregion/africa');

    } else if (continent == "Asia") {
        req.open("get", 'https://restcountries.com/v3.1/subregion/asia');

    } else if (continent == "Oceania") {
        req.open("get", 'https://restcountries.com/v3.1/region/oceania');

    } else if (continent == "all") {
        req.open("get", 'https://restcountries.com/v3.1/all');

    }


    req.responseType = 'json';


    req.send();
    req.onload = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            if (req.status == 200) {
                let world = req.response;

                let randomCountry = Math.floor(Math.random() * world.length);
                if (world.indexOf(randomCountry, 0, world.length)) {
                    let result = world[randomCountry];
                    let countryName = document.createElement('div');
                    countryName.classList.add("countryDrapeau")
                    afficheDrapeau.appendChild(countryName);
                    let drapeau = result.flags.png;
                    countryName.innerHTML = '<img src = ' + drapeau + '>';
                    nameCountry = result.name.common;

                }


            }

        }

    }
    return nameCountry;
    return drapeau;


}



europe.addEventListener('click', () => {

    afficheDrapeau.innerHTML = " ";
    showCounttryByContinents("Europe");


});

afrique.addEventListener('click', () => {

 afficheDrapeau.innerHTML = " ";
    showCounttryByContinents("Africa");


});

amerique.addEventListener('click', () => {

    afficheDrapeau.innerHTML = " ";
    showCounttryByContinents("America");


});
asie.addEventListener('click', () => {

    afficheDrapeau.innerHTML = " ";
    showCounttryByContinents("Asia");


});

oceanie.addEventListener('click', () => {

    afficheDrapeau.innerHTML = " ";
    showCounttryByContinents("Oceania");


});

monde.addEventListener('click', () => {
    
    afficheDrapeau.innerHTML = " ";
    showCounttryByContinents("all");


});