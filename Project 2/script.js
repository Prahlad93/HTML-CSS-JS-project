const endDate = "15 March 2024 10:46 AM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");
const shows = document.getElementById("show");

function clock() {
    let end = new Date(endDate);
    let now = new Date();

    let diff = (end - now)/1000;
    if(diff<0){
        shows.innerText = "time is over";
        return;
    }

    let days = Math.floor((diff/3600)/24);
    let hours = Math.floor((diff/3600)%24);
    let min = Math.floor((diff/60)%60);
    let sec = Math.floor(diff%60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = min;
    inputs[3].value = sec;  
}
setInterval(clock,1000);