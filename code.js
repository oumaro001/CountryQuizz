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



/*----- La barre compteur -------*/

let compteurBarre = document.querySelector('.compteurBarre');
compteurBarre.style.display = "none";

/*---------function qui compare les reponses -------*/
function gagnerPerdu(clickrep, result) {


    let gagné = '<p style="color: green">T\'as Gagné !!!</p>';
    let perdu = '<p style="color: red">T\'as Perdu !!!</p>';
    let nameComparer = result.name.common;



    if (clickrep == nameComparer) {

        listeReponses.innerHTML = " ";
        listeReponses.innerHTML = gagné;
    } else {

        listeReponses.innerHTML = " ";
        listeReponses.innerHTML = perdu;
    }
}
/*---------function pour afficher les reponses -------*/
function reponseQuestions(a, b, c, result) {

    let reponseA = "";
    let reponseB = "";
    let reponseC = "";

    let nameDrapeau = result;

    let tabRep = [a, b, c];

    let numA = Math.floor(Math.random() * tabRep.length);
    if (tabRep.indexOf(numA), 0, tabRep.length) {
        reponseA = tabRep[numA];

    }

    let numB = Math.floor(Math.random() * tabRep.length);
    if (tabRep.indexOf(numB), 0, tabRep.length) {
        if (numB !== numA) {
            reponseB = tabRep[numB];
        } else {
            numB++
            reponseB = tabRep[numB];
        }

    }

    let numC = Math.floor(Math.random() * tabRep.length);
    if (tabRep.indexOf(numC), 0, tabRep.length) {
        if (numC !== numB) {
            reponseC = tabRep[numC];

        } else if (numC !== numA) {
            reponseC = tabRep[numC];

        } else {

            reponseC = tabRep[numC];
        }


    }


    let listeReponses = document.getElementById('listeReponses');
    listeReponses.innerHTML = "<p>Qui Suis-je ?</p>" + "<br>" +
        '<li id = "ligne1"><a href="#">' + reponseA + "</a></li>" + "<br>" +
        '<li id = "ligne2"><a href="#">' + reponseB + "</a></li>" + "<br>" +
        '<li id = "ligne3"><a href="#">' + reponseC + "</a></li>";


    let ligne1 = document.getElementById('ligne1');
    let ligne2 = document.getElementById('ligne2');
    let ligne3 = document.getElementById('ligne3');

    ligne1.addEventListener('click', () => {

        gagnerPerdu(reponseA, nameDrapeau);

    })
    ligne2.addEventListener('click', () => {

        gagnerPerdu(reponseB, nameDrapeau);

    })
    ligne3.addEventListener('click', () => {

        gagnerPerdu(reponseC, nameDrapeau);

    })


}


/*--------- afficher les drapeau des pays en fonction du continent --------*/

function showCounttryByContinents(continent) {


    /*--les reponses a la question--*/
    let nameReponse1 = "";
    let nameReponse2 = "";
    let nameReponse3 = "";


    /*--les requetes pour avoir les pays par continent--*/
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

                /*--prendre un pays aleatoire et le mettre dans randomCountry3--- */
                let randomCountry2 = Math.floor(Math.random() * world.length);

                if (world.indexOf(randomCountry2, 0, world.length)) {
                    let result2 = world[randomCountry2];
                    nameReponse2 = result2.name.common;
                }

                /* randomCountry3--- */
                let randomCountry3 = Math.floor(Math.random() * world.length);
                if (world.indexOf(randomCountry3, 0, world.length)) {
                    let result3 = world[randomCountry3];
                    nameReponse3 = result3.name.common;
                }


                /* randomCountry1 et afficher le drapeau--- */

                let randomCountry1 = Math.floor(Math.random() * world.length);

                if (world.indexOf(randomCountry1, 0, world.length)) {
                    let result = world[randomCountry1];
                    nameReponse1 = result.name.common;


                    let countryName = document.createElement('div');
                    countryName.classList.add("countryDrapeau")
                    afficheDrapeau.appendChild(countryName);
                    let drapeau = result.flags.png;
                    countryName.innerHTML = '<img src = ' + drapeau + '>';

                    reponseQuestions(nameReponse1, nameReponse2, nameReponse3, result)


                }



            }


        }
    }

    compteurBarre.style.display = "block";


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