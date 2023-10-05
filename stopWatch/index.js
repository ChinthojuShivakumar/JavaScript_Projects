console.log("Hello WOrld");



function showTime(){

    let date = new Date()


    let hour = date.getHours()
   
    let minute = date.getMinutes()

    let second = date.getSeconds()

    let day_night = 'AM'


    if(hour > 12){
        day_night = 'PM';
        hour = hour-12
        
    }

    if(hour === 0){
        hour = 12
    }

    if(hour < 10){
        hour = '0'+hour
    }

    if (minute < 10){
        minute = '0' + minute
    }

    if(second < 10){
        second = '0' + second
    }    


    let showTime = document.getElementById('showTime')

    showTime.innerHTML = `${hour} : ${minute} : ${second}  ${day_night} `

    getColor(second)



    







}

// showTime()
setInterval(showTime, 1000)


function getColor() {

    let color = '#'

    let letters = '1234567890ABCDEF'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]

    }

    let body = document.body;
    body.style.backgroundColor = color

    // console.log(color);
    return color


}



