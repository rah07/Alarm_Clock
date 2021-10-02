// Digital Clock



let digitalclock = function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();



    if (hours < 10) {
        hours = "0" + hours;
    }

    if (second < 10) {
        second = "0" + second;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours >= 12) {
        document.getElementById('period').innerHTML = "PM";
    } else {
        document.getElementById('period').innerHTML = "AM";
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = second;

    setTimeout(digitalclock, 500);

}

digitalclock();


// alarm clock


const alarmSubmit = document.getElementById('set_alarm');
alarmSubmit.addEventListener('click', setAlarm);
alarmSubmit.addEventListener('click', display);
var audio = new Audio('./sound.wav');



function ringbell() {

    audio.play();


}

function setAlarm(e) {

    e.preventDefault();

    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);

    console.log(`Settings alarm for ${alarmDate}...`);
    now = new Date();

    console.log(now);


    let timetoAlarm = alarmDate - now;


    console.log(timetoAlarm);


    if (isNaN(timetoAlarm)) {

        alert("INVALID DATE PLEASE WRITE IN FORMAT");


    }

    if (timetoAlarm >= 0) {


        setTimeout(function() {
            console.log("Ringing Now");
            ringbell();
        }, timetoAlarm);

    }
}





function display() {

    if ($("#alarm").val() != "") {


        const find = document.getElementById('alarm');
        value = new Date(find.value);

        value = String(value);

        value = value.slice(0, 25);



        console.log('Display' + value);

        let ele = document.createElement("span");

        ele.className = 'display';

        ele.innerHTML = "<span class='task-text'>" + value + "</span>";




        let delspan = document.createElement('span');
        delspan.classList.add('del');

        let delButton = document.createElement('i');
        delButton.className = "fas fa-trash del-element";
        delspan.appendChild(delButton);
        ele.appendChild(delspan);

        delButton.addEventListener('click', () => {

            audio.pause();
            ele.remove();

        })
        $("#view-area").append(ele);




    }






};