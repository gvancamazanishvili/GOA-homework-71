const time = document.getElementById("timer");



const updateTime = () => {
    const now = new Date();
    time.textContent = now.toLocaleTimeString();
} 


updateTime();
setInterval(updateTime, 1000);