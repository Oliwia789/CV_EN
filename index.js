//Rounded letters 
new CircleType(document.getElementById('curved'))
  .radius(215);
//Smooth move to sections from nav click
document.querySelectorAll(".move").forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    })
  })
});

//Move to next page on scroll
(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByClassName('getThere');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    
    if(i >= 0 && i < a.length) {
      $('html,body').animate({
        scrollTop: a[i].offsetTop
      });
    }
  });
})();
console.clear();

//Burger menu for mobile 
let menu = document.querySelector('#navbarMobile');
let nav = document.querySelector('#navMobile');
var burgerMenu = document.getElementById('burgerMenu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  //overlay.classList.toggle("overlay");
  menu.classList.toggle("pad");
  nav.classList.toggle("dis");
});
