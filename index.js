
var list = [
    "Explore JavaScript Projects from Scrach To Pro."
]

var initial = 0;
var initial_index = 0;
var interval;

var text = document.querySelector('#text')
var cursor = document.querySelector("#cursor")


let hamburger = document.getElementById("hamburger")
let navbar = document.getElementById("navbar")
let navItems = document.getElementById("nav-items")
let navbarBrand = document.getElementById("navbar-brand")
let closeIcon = document.getElementById("closee")

hamburger.addEventListener("click", e=>{
    // navbar.style.height = '550px'
    // navbar.style.flexDirection = "column"
    // navbar.style.transition = "all 0.3s ease-in-out"
    // navItems.style.display = "block"
    // hamburger.style.display = "none"
    // closeIcon.style.display = "block"
    navbar.classList.add("navbarJavaScript")
    navItems.classList.add("navItemJavaScript")
    hamburger.classList.add("hamburgerJavaScript")
    closeIcon.classList.add("closeJavaScript")
    
})

closeIcon.addEventListener("click", ()=>{
    navbar.classList.remove("navbarJavaScript")
    navItems.classList.remove("navItemJavaScript")
    hamburger.classList.remove("hamburgerJavaScript")
    closeIcon.classList.remove("closeJavaScript")
})

 



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