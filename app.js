// import functions and grab DOM elements
import { valHP } from './functions.js';
import { valST } from './functions.js';
import { valIT } from './functions.js';
import { valSP } from './functions.js';
import { saveStatsButton } from './functions.js';
import { displayHP } from './functions.js';
import { displayST } from './functions.js';
import { displayIT } from './functions.js';
import { displaySP } from './functions.js';

// set event listeners to update state and DOM

saveStatsButton.addEventListener('click', ()=> {
    if (valHP.value > 7) {
        displayHP.src = './assets/heartfll.png';
    } else if (valHP.value > 3) {
        displayHP.src = './assets/heart.png';
    } else {
        displayHP.src = './assets/heartbrk.png';
    }
});
saveStatsButton.addEventListener('click', ()=> {
    if (valST.value > 7) {
        displayST.src = './assets/ST3.png';
    } else if (valST.value > 3) {
        displayST.src = './assets/ST2.png';
    } else {
        displayST.src = './assets/ST1.png';
    }
});
saveStatsButton.addEventListener('click', ()=> {
    if (valIT.value > 7) {
        displayIT.src = './assets/IT3.png';
    } else if (valIT.value > 3) {
        displayIT.src = './assets/IT2.png';
    } else {
        displayIT.src = './assets/IT1.png';
    }
});
saveStatsButton.addEventListener('click', ()=> {
    if (valSP.value > 7) {
        displaySP.src = './assets/SP3.png';
    } else if (valSP.value > 3) {
        displaySP.src = './assets/SP2.png';
    } else {
        displaySP.src = './assets/SP1.png';
    }
});