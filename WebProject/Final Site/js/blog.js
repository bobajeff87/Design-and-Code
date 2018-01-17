$(document).ready(function() {

    $(".design").hover(function() {
        $(".designpopup").css("visibility", "visible");
    });

    $(".design").mouseleave(function() {
        $(".designpopup").css("visibility", "hidden");
    });

    $(".photography").hover(function() {
        $(".photopopup").css("visibility", "visible");
    });

    $(".photography").mouseleave(function() {
        $(".photopopup").css("visibility", "hidden");
    });

    $(".branding").hover(function() {
        $(".brandingpopup").css("visibility", "visible");
    });

    $(".branding").mouseleave(function() {
        $(".brandingpopup").css("visibility", "hidden");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function sslider() {
      
      var current = 0,
          i,
          slider = document.querySelector('[data-js="sslide"]'),
          allImages =  slider.querySelectorAll('img'),
          imgWidth = Math.ceil(100 / allImages.length),
          sliderWidth = allImages.length * 100;
      
      slider.style.width = sliderWidth + '%';
      
      for(i = 0; i <= allImages.length - 1; i++) {
         allImages[i].style.width = imgWidth + '%';
      }
  
    function animateRight(cur) {
        var i = imgWidth,
            time = 50;
        var animate = setInterval(function() {
        if(i <= sliderWidth) {
          allImages[cur].style.marginLeft = "-" + i + "%";
          i--;
        } else {
          clearInterval(animate);
        }
        }, time);  
     } 
      
      function reset() {
        for(i = 0; i <= allImages.length - 1; i++) {
          animateRight(i);
        }
        // resseting the current image to the first image
        current = 0;
      }    
      
      function animateLeft(cur) {
        var i = 0,
            time = 50;
        var animate = setInterval(function() {
        if(i <= imgWidth) {
          allImages[cur].style.marginLeft = "-" + i  + "%";
          i++;
        } else {
          clearInterval(animate);
        }
        }, time);  
     }
      
      setInterval(function () {
        if(current <= allImages.length - 2) {
          animateLeft(current);
          current++;
          
        } else {
          reset();
        }
      }, 3000);
  }
   sslider();
  });