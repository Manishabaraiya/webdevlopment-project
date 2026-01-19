let alarm = "";

// show real time
function showTime() {
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    let currentTime = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = currentTime;

    // show time
    if (alarm === h + ":" + m) {
        alert("⏰ Alarm Ringing!");
        alarm = ""; // clear alarm
        document.getElementById("msg").innerText = "";
    }
}

// set alerm
function setAlarm() {
    alarm = document.getElementById("alarmTime").value;
    document.getElementById("msg").innerText =
        "Alarm set for " + alarm;
}
 setInterval(showTime,1000);