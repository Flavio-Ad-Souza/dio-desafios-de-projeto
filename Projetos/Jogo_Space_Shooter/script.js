const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');

// Moviento e tiro da Nave

function flyShip(event) {

    if (event.key === 'ArrowUp') {

        event.PreventDefault();
        moveUp();

    } else if (event.key === 'ArrowDown') {

        event.PreventDefault();
        moveDown();

    } else if (event.key === " ") {

        event.PreventDefault();
        fireLaser();
    }
} 

// Função de subir

function moveUp() {
    
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');

    if (topPosition === "0px") {
        return

    } else {

        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }    
}

