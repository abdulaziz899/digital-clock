

setInterval(showTime,500 )

function showTime() {
    var date = new Date();
    var hours= date.getHours();
    var minutes = date.getMinutes();
    var seconds= date.getSeconds();
    var  em = "AM"
    if(hours>12)
        {
            hours=hours-12;
            em="PM"
        }
    if (hours==0) {
        hours=12;
    }

    if (hours<10) {
        
        hours='0'+hours;
    }
    if (minutes<10) {
        
      minutes='0'+minutes;
    }
    if (seconds<10) {
        
        seconds='0'+seconds;
    }


    document.getElementById("hours").innerHTML= hours ;
    document.getElementById("minutes").innerHTML= minutes ;
    document.getElementById("seconds").innerHTML= seconds ;
    document.getElementById("AM/PM").innerHTML= em;
}
