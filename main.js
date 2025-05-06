document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === 'admin' && password === '12345') {
        window.location.href = 'admin.html';
    } else {
        document.getElementById('loginMessage').textContent = 'بيانات خاطئة';
    }
});