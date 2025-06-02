var togglebtn = document.querySelector("#toggleBtn");
var navbar = document.querySelector(".container nav ul")
var menuoverlay = document.querySelector(".menu-overlay")


togglebtn.addEventListener(
    "click",
    function () {
        navbar.classList.add("open");
        menuoverlay.classList.add("bg-overlay-open");
    }
)

menuoverlay.addEventListener(
    "click",
    function(){
        navbar.classList.remove("open");
        menuoverlay.classList.remove("bg-overlay-open");
    }
)

document.addEventListener(
    "scroll",
    function(e){
        if(window.scrollY>49){
            document.body.classList.add("stick")
        }else{
            document.body.classList.remove("stick")

        }
    }
)


$('.solid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.solid').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });


