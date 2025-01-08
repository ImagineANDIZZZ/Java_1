let size = 15;
function Balong(){
    document.getElementById("Balong").style.fontSize = size +"px";
    size++;
    if(size<=30 && size>=30 ){
        document.getElementById("Balong").innerHTML ="💥";
    }
}
