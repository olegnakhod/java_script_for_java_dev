'use strict'


ageGET.onchange = function () {
    let userAge = document.getElementById('ageGET');
    if (userAge.value < 1 || userAge.value > 100 || isNaN(userAge.value)) {
        userAge.value = 'Incorect data'
        throw console.error('Incorect data');
    }
}

buttonGET.onclick = function() {
    let userData = {
        userName: document.getElementById('fNameGET').value,
        userSurname: document.getElementById('lNameGET').value,
        userAge: document.getElementById('ageGET').value,
        userAddress: document.getElementById('addressGET').value
    }

    console.log(userData)

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/formGet?userName=" + userData.userName + "&userSurname=" + userData.userSurname + "&userAge=" + userData.userAge + "&userAddress=" + userData.userAddress);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}


agePOST.onchange = function () {
    let userAge = document.getElementById('agePOST');
    if (userAge.value < 1 || userAge.value > 100 || isNaN(userAge.value)) {
        userAge.value = 'Incorect data'
        throw console.error('Incorect data');
    }
}

buttonPOST.onclick = function() {
    let userData = {
        userName: document.getElementById('fNamePOST').value,
        userSurname: document.getElementById('lNamePOST').value,
        userAge: document.getElementById('agePOST').value,
        userAddress: document.getElementById('addressPOST').value
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/formPOST");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(userData));
}