var counter=1;
setInterval(function(){
    document.getElementById('raadio' + counter).checked=true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
})