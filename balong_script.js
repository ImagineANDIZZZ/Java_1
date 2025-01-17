let size = 20;
function Balong(){
    
    if(size > 150 ){
        document.getElementById("Balong").innerHTML ="💥";
        return;
    }
    size += 10;
    document.getElementById("Balong").style.fontSize = size +"px";
}
