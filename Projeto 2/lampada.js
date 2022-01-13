const turnOn = document.getElementById('turnOn');
const turnOFF = document.getElementById('turnOFF');
const lamp = document.getElementById ('lampada');
const trocaLamp = document.getElementById ('trocarLamp');

function lampQuebrada(){
    return lamp.src.indexOf ('quebrada') >-1
}

function  lampOn(){
    if (!lampQuebrada ()){
    lamp.src = './img/acesa.jpg';
    }
}

function lampOFF(){
    if (!lampQuebrada ()){
    lamp.src = './img/apagada.jpg';
    }
}

function quebrada(){
    lamp.src = './img/quebrada.jpg';
}

function trocalamp (){
    lamp.src = './img/apagada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOFF.addEventListener('click', lampOFF);
lampada.addEventListener('dblclick', quebrada);
lampada.addEventListener('mouseover',lampOn);
trocarLamp.addEventListener('click', trocalamp);
