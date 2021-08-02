function opennav(){
    var b = document.getElementById('navp');
    var a = document.getElementById('nab-bar');

    if(a.style.display==="none"){
        b.style.display="block";
        a.style.display="flex";
    }else{
        b.style.display="block";
        a.style.display="none";

        return false ;
    }
}







