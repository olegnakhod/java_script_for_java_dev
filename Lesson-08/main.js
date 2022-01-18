'use strict'

hideText.onclick = function () {
    let textId = document.getElementById('text');
    if (textId.getAttribute('class').includes('hider') == true) {
        textId.classList.remove('hider');
        hideText.innerText = 'Hide text'
    } else {
        textId.classList.add('hider');
        hideText.innerText = 'Show text'
    }
};

hideButton.onclick = function () {
    document.getElementById('hideButton').classList.add('hider');
}

menuTitle.onclick = function(){
    let arrLi = document.getElementById('menu').querySelectorAll('li');
    for (let i = 0; i < arrLi.length; i++){
        let currentValue = arrLi[i];
        if(currentValue.getAttribute('class').includes('hider') == false){
            currentValue.classList.add('hider');
        }else{
            currentValue.classList.remove('hider');
        }
    }
}

