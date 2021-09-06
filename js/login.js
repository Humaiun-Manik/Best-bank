document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userEmailText = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const userPasswordText = userPassword.value;
    if (userEmailText == 'sontan@baap.com' && userPasswordText == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        document.getElementById('error-mass').style.display = 'block';
    }
})