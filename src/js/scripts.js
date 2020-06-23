$(document).ready(function(){
    var date_input=$('input[name="date"]');
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      orientation:"top left",
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
  })

let anchors =  Array.from(document.querySelectorAll("a[href*='#']")).filter((e)=> e.classList[1] !== "carousel");

for (let anchor of anchors) {
  
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substr(1);
      smoothScroll(blockID)
    })
  }



function currentYPosition() {
   if (self.pageYOffset) return self.pageYOffset;
   if (document.documentElement && document.documentElement.scrollTop)
       return document.documentElement.scrollTop;
   if (document.body.scrollTop) return document.body.scrollTop;
   return 0;
}


function elmYPosition(eID) {
   var elm = document.getElementById(eID);
   var y = elm.offsetTop;
   var node = elm;
   while (node.offsetParent && node.offsetParent != document.body) {
       node = node.offsetParent;
       y += node.offsetTop;
   } return y;
}


function smoothScroll(eID) {
   var startY = currentYPosition();
   var stopY = elmYPosition(eID);
   var distance = stopY > startY ? stopY - startY : startY - stopY;
   if (distance < 100) {
       scrollTo(0, stopY); return;
   }
   var speed = Math.round(distance / 100);
   if (speed >= 20) speed = 20;
   var step = Math.round(distance / 25);
   var leapY = stopY > startY ? startY + step : startY - step;
   var timer = 0;
   if (stopY > startY) {
       for ( var i=startY; i<stopY; i+=step ) {
           setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
           leapY += step; if (leapY > stopY) leapY = stopY; timer++;
       } return;
   }
   for ( var i=startY; i>stopY; i-=step ) {
       setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
       leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
   }
}

let btn = document.querySelector(".btn");
let contact = document.querySelector("#contact")

window.addEventListener('scroll', function() {
      btn.hidden = (pageYOffset < document.documentElement.clientHeight)
      
});

window.onload =  window.scrollBy(0,2);


