const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');
const favWeb = document.getElementById('url');
const submitInput = document.getElementById('submitButton');

submitButton.addEventListener('click', () => 
{
    const getUsername = document.getElementById('username').value;
    const getPassword = document.getElementById('password').value;
    const getEmail = document.getElementById('email').value;
    const getTel = document.getElementById('tel').value;
    const getFavWeb = document.getElementById('url').value;
    

    document.getElementById("show-text1").innerHTML = "Your Username: " + getUsername;
    document.getElementById("show-text2").innerHTML = "Your Password: " + getPassword;
    document.getElementById("show-text3").innerHTML = "Your Email: " + getEmail;
    document.getElementById("show-text4").innerHTML = "Your Telephone: " + getTel;
    document.getElementById("show-text5").innerHTML = "Your Favorite Website: " + getFavWeb;
});


document.addEventListener('mouseover', () =>
{
    document.body.style.backgroundColor = "rgb(182, 224, 224)";
});