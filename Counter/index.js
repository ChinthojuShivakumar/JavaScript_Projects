let incre = document.getElementById('incre')
let decre = document.getElementById('decre')
let show = document.getElementById('showCount')


let count = 0



incre.addEventListener('click', function(e){
    e.preventDefault()

    count++

    show.innerHTML = count
})


decre.addEventListener('click', function (e) {
    e.preventDefault()
    if(count <= 0){
        alert("You have reached 0 please click '+' increase count Number")
        return count
    }

    count--

    show.innerHTML = count
})