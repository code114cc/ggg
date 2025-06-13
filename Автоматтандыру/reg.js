// Тіркелу және кіру функциялары
function showRegister() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('login-username').value = '';
    document.getElementById('login-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function register() {
    let username = document.getElementById('username').value;
    if (username.trim() !== "") {
        localStorage.setItem('user', username);
        document.getElementById('user-name').innerText = username;
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
    } else {
        alert("Аты-жөніңізді енгізіңіз!");
    }
}

function login() {
    let username = document.getElementById('login-username').value;
    if (localStorage.getItem('user') === username) {
        document.getElementById('user-name').innerText = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
    } else {
        alert("Қате кіру мәліметтері!");
    }
}
