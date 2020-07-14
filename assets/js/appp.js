var popup = document.querySelector('.popup');
var open = document.querySelector('.button-one');
popup.style.display = 'none'


open.addEventListener("click",      function() {

    if(popup.style.display == 'none')  popup.style.display = 'block';
    else popup.style.display = 'none'
    
});


  document.getElementById('hider').onclick = function() {
   document.getElementById('hider').hidden = true;
    }

/*НАВИГАЦИЯ*/
nav_icon.onclick = function myFunction() {
  var x = document.getElementById('myTopnav');

  if (x.className === "header__menu") {
    x.className += " responsive";
  } else {
    x.className = "header__menu";
  }
}

var invisible = document.querySelector('.invisible');
var open = document.querySelector('.button-two');
invisible.style.display = 'none'

    open.addEventListener("click",      function() {

      if(nvisible.style.display == 'none')  nvisible.style.display = 'block';
      else invisible.style.display = 'none'
      
  });
  
    document.getElementById('hide').onclick = function() {
     document.getElementById('hide').hidden = true;
      }
  

  