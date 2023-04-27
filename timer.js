var time = document.getElementById('timer');
var min = 00;
var sec = 00;
function timer() {
    sec++;
    if (sec==60) {
        sec=sec-60;
        min++;
    }
    time.textContent=min+":"+sec;
    setTimeout(timer, 1000);
}
timer();



