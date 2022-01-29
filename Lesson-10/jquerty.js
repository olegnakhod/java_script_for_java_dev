$(document).ready(function () {
    $('#ageGET').bind('change', function () {
        let userAge = $('#ageGET').val();
        console.log(userAge);
        if (userAge < 1 || userAge > 100 || isNaN(userAge)) {
            $('#ageGET').val('Incorect data')
            throw console.error('Incorect data');
        }
    });

    $('#buttonGET').bind('click', function () {
        $.ajax({
            type: 'GET',
            data: {
                userName: $('#fNameGET').val(),
                userSurname: $('#lNameGET').val(),
                userAge: $('#ageGET').val(),
                userAddress: $('#addressGET').val()
            },
            contentType: 'application/json',
            url: '/userGet',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });
    });

    $('#agePOST').bind('change', function () {
        let userAge = $('#agePOST').val();
        console.log(userAge);
        if (userAge < 1 || userAge > 100 || isNaN(userAge)) {
            $('#agePOST').val('Incorect data')
            throw console.error('Incorect data');
        }
    });

    $('#buttonPOST').bind('click', function () {
        let userData = {
            userName: $('#fNamePOST').val(),
            userSurname: $('#lNamePOST').val(),
            userAge: $('#agePOST').val(),
            userAddress: $('#addressPOST').val()
        }
        $.ajax({
            type: 'POST',
            data: JSON.stringify(userData),
            contentType: 'application/json',
            url: 'http://localhost:3000/userPost',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });
    });

});
