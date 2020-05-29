
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const ipadMediaScreen = window.matchMedia('screen and (max-width: 767px )'); //Recibe una consulta a los medios

    const showOrHideMenu = () => { 
        menu.classList.toggle('is-active')
    }
    const validation = (event) => { //el event es un objeto que contiene atributos como el estado del matches
        (event.matches) ?
        menuButton.addEventListener('click', showOrHideMenu) : 
        menuButton.removeEventListener('click', showOrHideMenu)
        
    }

    validation(ipadMediaScreen);
    ipadMediaScreen.addListener(validation); //utilizamos el addListener para escuchar la función (validation) a cumplirse la condición del matchMedia

    