function initMap() {

  const loc = { lat: 42.361145, lng: -71.057083};

 
  const map = new google.maps.Map(document.querySelector('.map')
, {
  zoom: 14,
  center: loc

});

 const marker = new google.maps.Marker({ position: loc, map:
  map });

}


 /*NAVIGATION SCROLL*/
 $('a[href*="#"]')
 // Remove links that don't actually link to anything
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
   // On-page links
   if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
     && 
     location.hostname == this.hostname
   ) {
     // Figure out element to scroll to
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     // Does a scroll target exist?
     if (target.length) {
       // Only prevent default if animation is actually gonna happen
       event.preventDefault();
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000, function() {
         // Callback after animation
         // Must change focus!
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) { // Checking if the target was focused
           return false;
         } else {
           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
           $target.focus(); // Set focus again
         };
       });
     }
   }
 });

 window.addEventListener('scroll', function() {
   if (window.scrollY > 150) {
     document.querySelector('#navbar').style.opacity = 0.9
   } else {
     document.querySelector('#navbar').style.opacity = 1;
   }  

 });
   

 
