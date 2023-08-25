const toggleMenu = () => {
    const navigation = document.querySelector('.navbar');

    const burgerMenu = document.querySelector('.menu_icon');
    const src = burgerMenu.getAttribute('src');

    const isBurger = src === 'images/ham.png';
    const iconName = isBurger ?
    'images/cross.png': 'images/ham.png';

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
