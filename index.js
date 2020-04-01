for(var i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener('click',function(){
   buttonEvent(this.innerHTML);
   keyAnimation(this.innerHTML);
});
}

document.addEventListener("keydown",function(event){
  buttonEvent(event.key);
  keyAnimation(event.key);
});



function buttonEvent(takeEvent){
   switch(takeEvent){
      case 'a':
         var audio1=new Audio('./sounds/tom-1.mp3');
         audio1.play();
         break;
       case 's':
          var audio2=new Audio('./sounds/tom-2.mp3');
          audio2.play();
          break;
       case 'd':
          var audio3=new Audio('./sounds/tom-3.mp3');
          audio3.play();
          break;
       case 'f':
          var audio4=new Audio('./sounds/tom-4.mp3');
          audio4.play(); 
          break;
       case 'g':
          var audio5=new Audio('./sounds/snare.mp3');
          audio5.play();
          break;
       case 'h':
          var audio6=new Audio('./sounds/crash.mp3');
          audio6.play();
          break;
       case 'j':
          var audio7=new Audio('./sounds/kick-bass.mp3');
          audio7.play();
          break;
       default:
          console.log(event.key);
   
     }
}

function keyAnimation(key){
   document.querySelector("."+key).classList.add("pressed");
   setTimeout(function(){
      document.querySelector("."+key).classList.remove("pressed");
   },100);
  

}

