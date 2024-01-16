let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let conPwd = document.getElementById('conPwd').value;
let form = document.getElementById('myform');

function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let conPwd = document.getElementById('conPwd').value;


    let error1 = document.getElementById('E1');
    if (username === '') {
        error1.innerHTML = "*User name can not be empty"
        error1.style.visibility = "visible"
        return false;

    }
    else if (username.length < 7) {
        error1.innerHTML = "*User name should be 10 characters long"
        error1.style.visibility = "visible"
        return false;

    }
    // validation for Email
    let error2 = document.getElementById('E2');
    if (email === '') {
        error2.innerHTML = "*Email required"
        error2.style.visibility = "visible"
        return false;

    }
    else if (email.length > 25) {
        error2.innerHTML = "*Email should not be 25 characters long"
        error2.style.visibility = "visible"
        return false;

    }
    // validation for password
    let error3 = document.getElementById('E3');
    if (password === '') {
        error3.innerHTML = "*Email required"
        error3.style.visibility = "visible"
        return false;

    }
    else if (password.length < 5) {
        error3.innerHTML = "*password should contain 5 numbers"
        error3.style.visibility = "visible"
        return false;

    }
    // validation for confirmpassword password
    let error4 = document.getElementById('E4');
    if (conPwd !== password) {
        error4.innerHTML = "*Password does not match..";
        error4.style.visibility = "visible"
        return false;
    }


}

// if (username < 5) {
//     error1.innerHTML = "username should be more then 5 characters"
//     error1.style.visibility = "visible"
// }
// return false;




