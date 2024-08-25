
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval( ()=>{
    let clock = new Date();
    hour.innerHTML = (clock.getHours()<10?"0":"" ) + clock.getHours();
    min.innerHTML = (clock.getMinutes()<10?"0":"" ) + clock.getMinutes();
    sec.innerHTML = (clock.getSeconds()<10?"0":"" ) + clock.getSeconds();
    }
    , 1000);



