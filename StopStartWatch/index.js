let secElapsed = 0;
let interval = null;
let time = document.getElementById("time");
function padStart(value){
    return String(value).padStart(2,"0")
}
function setTime(){
    const minutes = Math.floor(secElapsed/60)
    const seconds = secElapsed%60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}
function timer(){
    secElapsed++;
    setTime()
}

function startClock(){
    if(interval) stopClock()
    interval = setInterval(timer,1000)
}
function stopClock(){
    clearInterval(interval)
}
function resetClock(){
    stopClock()
    secElapsed = 0;
    setTime()
}