const turnOn = document.getElementById('turnOn');
const turnOFF = document.getElementById('turnOFF');
const lamp = document.getElementById ('lampada');
const trocaLamp = document.getElementById ('trocarLamp');

function  lampOn(){
    lamp.src = './img/acesa.jpg';
}

function lampOFF(){
    lamp.src = './img/apagada.jpg';
}

function quebrada(){
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOFF.addEventListener('click', lampOFF);
lampada.addEventListener('dblclick', quebrada);
lampada.addEventListener('mouseover',lampOn);
trocarLamp.addEventListener('click', lampOFF);
