function reponseQuestions (a , b , c ,result){

    let reponseA ="";
    let reponseB ="";
    let reponseC ="";
    let ligne1  = document.querySelector('ligne1');
    let ligne2  = document.querySelector('ligne2');
    let ligne3  = document.querySelector('ligne3');


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
    listeReponses.innerHTML = "<p>Qui Suis-je ?</p>" + "<br>";
    ligne1.innerHTML = reponseA;
    ligne2.innerHTML = reponseB;
    ligne3.innerHTML = reponseC;
                                
    
        ligne1.addEventListener('click', () => {

        gagnerPerdu(reponseA,nameDrapeau);
        

    })
    

}

