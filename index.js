for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
function handleclick(){
     var buttonInnerHTML=this.innerHTML;
     makesound(buttonInnerHTML);
     
    }
     


}

document.addEventListener("keydown".function(Event))
{
    makesound(Event.key)

}
function makesound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
    
        default:console.log(buttonInnerHTML)
            break;
    }
     

}
