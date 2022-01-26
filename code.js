let europe = document.getElementById('europe');
let amerique = document.getElementById('amerique');
let afrique = document.getElementById('afrique');
let asie = document.getElementById('asie');
let oceanie = document.getElementById('oceanie');
let monde = document.getElementById('monde');





function showCounttryByContinents(continent) {

    let req = new XMLHttpRequest();
    req.open("GET", "https://restcountries.com/v3.1/lang/french");
    req.responseType = `json`;
    req.send();

    req.onload = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            if (req.status == 200) {
                let world = req.response;
            }
        }
    }
}