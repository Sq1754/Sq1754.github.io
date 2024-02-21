const toggleMenu = () => {
    const navigation = document.querySelector('.navbar');

    const burgerMenu = document.querySelector('.menu_icon');
    const src = burgerMenu.getAttribute('src');

    const isBurger = src === 'images/ham.png';
    const iconName = isBurger ?
    'images/cross.png': 'images/ham.png';


/* Animate On Scroll
    * ------------------------------------------------------ */
var ssAOS = function() {     
    AOS.init( {
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 300,
        once: true,
        disable: 'mobile'
    });
};

/* Preloader
    * -------------------------------------------------- */
var ssPreloader = function() {
        
    $("html").addClass('ss-preload');

    $WIN.on('load', function() {

        //force page scroll position to top at page refresh
        $('html, body').animate({ scrollTop: 0 }, 'normal');

        // will first fade out the loading animation 
        $("#loader").fadeOut("slow", function() {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        }); 
        
        // for hero content animations 
        $("html").removeClass('ss-preload');
        $("html").addClass('ss-loaded');
    
    });
};


    burgerMenu.setAttribute(
        'src' , iconName
    );

    if(!isBurger){
        navigation.classList.add("navigation--mobile--fadeout");
        setTimeout(() =>{
            navigation.classList.toggle('navigation--mobile');
        },300);
    }else{
        navigation.classList.remove("navigation--mobile--fadeout");
        navigation.classList.toggle('navigation--mobile');
    }
};
