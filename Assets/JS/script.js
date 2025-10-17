document.getElementById('current-time').innerText = Date.now();
// Keep the time running
setInterval(() => {
    document.getElementById('current-time').innerText = Date.now();
}, 1000);