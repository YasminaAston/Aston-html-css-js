var thumbs=document.getElementById('thumbs')
var noflock=document.getElementsByClassName('flock selected')
var flock=document.getElementsByClassName('flock')
var badgesSelector=document.getElementById('badgesSelector')
var quantité=document.getElementById('quantité')
var compteurPrix=0
var PRIX=120
function int(){
    thumbs.addEventListener('click', choixPhoto)
    noflock.addEventListener('click', noflockselection)
    flock.addEventListener('click',flockselection)
    badgesSelector.addEventListener('click',choixBadge)
    quantité.addEventListener('click',choixQuantité)
}
function choixPhoto(){
    if(thumbs.click===true){
        return(thumbs)
    }
}
function noflockselection(){
    if (flock.click===true) {
        noflock.disabled;
        
    }
}
function flockselection(){
    if (folk.click===true) {
        compteurPrix=compteurPrix+10
        return(compteurPrix)
        
    }
    if (noflock.click===true) {
        var nom=document.createElement('div')
        var numéro=document.createElement('div')
        nom.addEventListener('keyup')
        numéro.addEventListener('keyup')
        return(numéro,nom)
        flock.disabled;
        
    }

}
function choixBadge(){
   var clique=document.createElement('div')
   var badgenumber=document.createElement('div')
   badgenumber=badgesSelector.classList.length;
   for(var i; i<badgenumber;i++){
       clique=clique+1
       compteurPrix=compteurPrix+10
       return(compteurPrix)
   }
}
function choixQuantité(){
    var clique=document.createElement('div')
   var quantiténumber=document.createElement('div')
   quantiténumber=quantité.classList.length;
   for(var i; i<quantiténumber;i++){
       clique=clique+1
       compteurPrix=compteurPrix+10
       return(compteurPrix)
   }

}
function total(){
    
}
