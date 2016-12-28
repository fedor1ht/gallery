/* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets

    var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
    if (lang == "zh-Hans") {
        document.getElementById('body').style.fontFamily = '"Hiragino Sans GB W6", "helvetica-normal", sans-serif';
    } else if (lang == "en") {
        document.getElementById('body').style.fontFamily = '"helvetica-normal", "Hiragino Sans GB W6", sans-serif';
    }

});
 
 
/* Body Font
-----------------------------------------------*/

 
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
            { src: 'https://fedor1ht.github.io/gallery/images/profile2.jpeg' },
            { src: 'https://fedor1ht.github.io/gallery/images/profile3.jpeg' },
            { src: 'https://fedor1ht.github.io/gallery/images/profile4.jpeg' }
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
 
 
/* Overlay
-----------------------------------------------*/ 
function overlayOn(image) {
    var body = document.body;
    var overlay = document.querySelector('.portfolio-overlay');
    var img_src = image.src;
    var img_alt = image.alt;
    var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
    
    document.getElementById("single-painting").src = image.src;
    document.getElementById("single-painting").alt = image.alt;
    document.getElementById("img-id").href = image.src;
 
    if (lang == "zh-Hans") {
        if (img_alt == "up1") {
            document.getElementById("name").innerHTML = "上山虎 I";
            document.getElementById("date").innerHTML = "2016.04";
            document.getElementById("size").innerHTML = "135 x 70 cm";
 
        } else if (img_alt == "down1") {
            document.getElementById("name").innerHTML = "下山虎 I";
            document.getElementById("date").innerHTML = "2015.09";
            document.getElementById("size").innerHTML = "135 x 70 cm";
 
        } else if (img_alt == "down2") {
            document.getElementById("name").innerHTML = "下山虎 II";
            document.getElementById("date").innerHTML = "2015.08";
            document.getElementById("size").innerHTML = "135 x 70 cm";
 
        } else if (img_alt == "lay1") {
            document.getElementById("name").innerHTML = "卧虎 I";
            document.getElementById("date").innerHTML = "2015.08";
            document.getElementById("size").innerHTML = "96 x 50 cm";
 
        } else if (img_alt == "down3") {
            document.getElementById("name").innerHTML = "下山虎 III";
            document.getElementById("date").innerHTML = "2015.09";
            document.getElementById("size").innerHTML = "135 x 70 cm";
 
        } else if (img_alt == "down4") {
            document.getElementById("name").innerHTML = "下山虎 IV";
            document.getElementById("date").innerHTML = "2015.09";
            document.getElementById("size").innerHTML = "135 x 70 cm";
        } else {
            alert ("Image not found!");
        }
    } else if (lang = "en") {
        if (img_alt == "up1") {
            document.getElementById("name").innerHTML = "Tiger going uphill I";
            document.getElementById("date").innerHTML = "2016.04";
            document.getElementById("size").innerHTML = "135 x 70 cm";
 
        } else if (img_alt == "down1") {
            document.getElementById("name").innerHTML = "Tiger going downhill I";
            document.getElementById("date").innerHTML = "2015.09";
            document.getElementById("size").innerHTML = "135 x 70 cm";
 
        } else if (img_alt == "down2") {
            document.getElementById("name").innerHTML = "Tiger going downhill II";
            document.getElementById("date").innerHTML = "2015.08";
            document.getElementById("size").innerHTML = "135 x 70 cm";
 
        } else if (img_alt == "lay1") {
            document.getElementById("name").innerHTML = "Tiger sitting still I";
            document.getElementById("date").innerHTML = "2015.08";
            document.getElementById("size").innerHTML = "96 x 50 cm";
 
        } else if (img_alt == "down3") {
            document.getElementById("name").innerHTML = "Tiger going downhill III";
            document.getElementById("date").innerHTML = "2015.09";
            document.getElementById("size").innerHTML = "135 x 70 cm";
 
        } else if (img_alt == "down4") {
            document.getElementById("name").innerHTML = "Tiger going downhill IV";
            document.getElementById("date").innerHTML = "2015.09";
            document.getElementById("size").innerHTML = "135 x 70 cm";
        } else {
                                                alert ("Image not found!");
                                }
    }
    
    /* Toggle the aria-hidden state on the overlay and the
    no-scroll class on the body */
    overlay.setAttribute('aria-hidden', false);
    body.classList.toggle('noscroll', true);
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
    overlay.setAttribute('aria-hidden', true);
    body.classList.toggle('noscroll', false);
   
    /* On some mobile browser when the overlay was previously
    opened and scrolled, if you open it again it doesn't
    reset its scrollTop property */
    overlay.scrollTop = 0; 
};
