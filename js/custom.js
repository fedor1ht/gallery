
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


 /* Google Map
-----------------------------------------------*/
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.758468, 100.567481),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

$(function(){
  loadGoogleMap();
});


/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});


 /* Navigation Bar
  -----------------------------------------------*/
$(document).ready(function(){ 
    "use strict";

    // Navbar Sticky

    (function() {
        var docElem = document.documentElement,
            didScroll = false,
            stickynav = 50;
            document.querySelector( '.nav-container' );
        function init() {
            window.addEventListener( 'scroll', function() {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 50 );
                }
            }, false );
        }
        
        function scrollPage() {
            var sy = scrollY();
            if ( sy >= stickynav ) {
                $( '.nav-container' ).addClass('sticky');
            }
            else {
                $( '.nav-container' ).removeClass('sticky');
            }
            didScroll = false;
        }
        
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }        
        init();        
    })();

});


$(document).ready(function(){
            
    "use strict";

    $('.menu-container').each(function(index) {
        $(this).find('.circle').attr('menu-link', index);
        $(this).find('.list-menu').clone().appendTo('body').attr('menu-link', index);
    });

    $('.menu-container .circle').click(function() {
        var linkedVideo = $('section').closest('body').find('.list-menu[menu-link="' + $(this).attr('menu-link') + '"]');
        linkedVideo.toggleClass('reveal-modal');
       
    });

    $('section').closest('body').find('.close-iframe').click(function() {
        $(this).closest('.list-menu').toggleClass('reveal-modal');
    });
    
 /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('.header-one').vegas({
        slides: [
            { src: 'images/header-bg.jpg' },
            { src: 'images/profile3.jpeg' },
            { src: 'images/profile1.jpeg' }
        ],
        timer: false,
        transition: [ 'zoomIn', ],
        animation: ['kenburns']
    });
  });

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });



function overlayOn(image) {
    var body = document.body;
    var overlay = document.querySelector('.portfolio-overlay');
    var img_src = image.src;
     
    document.getElementById("single-painting").src = image.src; 
     
    /* Toggle the aria-hidden state on the overlay and the 
    no-scroll class on the body */
    overlay.setAttribute('aria-hidden', 'false');
    body.classList.toggle('noscroll', 'true');
    /* On some mobile browser when the overlay was previously
        opened and scrolled, if you open it again it doesn't 
        reset its scrollTop property */
        overlay.scrollTop = 0;
};


function overlayOff() {
    var body = document.body;
    var overlay = document.querySelector('.portfolio-overlay');
    
    /* Toggle the aria-hidden state on the overlay and the 
    no-scroll class on the body */
    overlay.setAttribute('aria-hidden', 'true');
    body.classList.toggle('noscroll', 'false');
    
        /* On some mobile browser when the overlay was previously
        opened and scrolled, if you open it again it doesn't 
        reset its scrollTop property */
        overlay.scrollTop = 0;  
};


// <script>
//  /* Pass image info when click
//   -----------------------------------------------*/
//   function getSrc(image){
//     var img_src = image.src;
//     //alert(img_src);
//     var img_id = img_src.substring(img_src.lastIndexOf('/')+1,img_src.lastIndexOf('.'));
//     //alert(img_id);
//     document.location="single-project.html?" + img_id;
//   };
  
// </script>

// <script>
//   function eng(){
//       document.getElementById("intro").innerHTML = "Bingqing Lan, born in 1959 in Harbin, China, parents originally from Xiushan County, Chongqing. His father Shibi Lan (1915 - 1984) was a distinctive art graduate from The National University of China in the early 1930s. Guided and recognised by some of the most influential artists in the modern Chinese art history, including Beihong Xu, Junbi Huang, Shuqi Zhang, Fozhi Chen, Baoshi Fu, Shibi mastered many aspects of traditional Chinese art, including 'water-and-ink' paiting of landscape, portrait and figures, flowers and planations, animals etc, together with calligraphy and poetry. Shibi held his own exhibition in Chongqing China in March 1946. Although Bingqing Lan, under the influence of his father, has also developed his artistic mindset and skills in the early years, he did not follow the path of becoming a professional artist. Since the approach of his retirement in recent years, Bingqing has decided to pick up the paint brushes again, research and practise. Starting from tigers, the category that has been practised the most by him and his father, Bingqing is determined to set his foot back on track to explore the beauty of traditional Chinese painting, and wishes to share his journey and outcome with anyone who come across.";
//   };
 
// </script>

