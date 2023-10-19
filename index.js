
var list = [
    "Explore JavaScript Projects from Scrach To Pro."
]

var initial = 0;
var initial_index = 0;
var interval;

var text = document.querySelector('#text')
var cursor = document.querySelector("#cursor")



// typing effect

function Type(){
    let display = list[initial].substring(0,initial_index+1)
    text.innerHTML = display
    initial_index++

    if(display === list[initial]){
        //hide cursor
        cursor.style.display = "none"

        clearInterval(interval)
        setTimeout(function (){
            interval = setInterval(Delete, 50)
        },1000)
    }
}

//deleting effect

function Delete(){
    let display = list[initial].substring(0, initial_index + 1)
    text.innerHTML = display
    initial_index++

    if(text===""){
        clearInterval(interval)

        if(initial == (list.length - 1)){
            initial == 0
        }
        else{
            initial++

            initial_index = 0

            setTimeout(function (){
                cursor.style.display = 'inline-block';
                interval = setInterval(Type,100)
            },200)
        }
    }
}

interval = setInterval(Type, 100)