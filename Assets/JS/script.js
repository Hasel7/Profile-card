document.getElementById('current-time').innerText = Date.now();

setInterval(() => {
    document.getElementById('current-time').innerText = Date.now();
}, 1000);