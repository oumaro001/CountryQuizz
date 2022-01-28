function reponseQuestions (a , b , c ,result){

    let reponseA ="";
    let reponseB ="";
    let reponseC ="";
    let ligne1  = document.createElement('button');
    let ligne2  = document.createElement('li');
    let ligne3  = document.createElement('li');

    let nameDrapeau = result;

    let tabRep =[a , b ,c ];

    let numA = Math.floor(Math.random() * tabRep.length);
        if(tabRep.indexOf(numA),0,tabRep.length) {
           reponseA = tabRep[numA];
           
        }
    
   let numB = Math.floor(Math.random() * tabRep.length);
   if(tabRep.indexOf(numB),0,tabRep.length){
    reponseB = tabRep[numB];
       
}
  
    let numC = Math.floor(Math.random() * tabRep.length);
    if(tabRep.indexOf(numC),0,tabRep.length){
        if(numC !== numB){
            reponseC = tabRep[numC];
            
            }

        
    }


    let listeReponses = document.getElementById('listeReponses');
    ligne1.appendChild(reponseA);
    listeReponses.innerHTML = "<p>Qui Suis-je ?</p>" + "<br>" +
                                '<li><a href="#">' + ligne1 + "</a></li>" + "<br>" + 
                                '<li><a href="#">' + reponseB + "</a></li>" + "<br>" +
                                '<li><a href="#">' + reponseC + "</a></li>";
    
        listeReponses.addEventListener('click', () => {

        gagnerPerdu(reponseA,nameDrapeau);
        gagnerPerdu(reponseB,nameDrapeau);
        gagnerPerdu(reponseC,nameDrapeau);

    })
    

}

