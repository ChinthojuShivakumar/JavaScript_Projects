let loc = document.querySelector('form')

loc.addEventListener('submit',function(e){
        e.preventDefault()
        console.log(e);

        console.log(e.target[0].value);

        const weth = document.getElementById('search').value

        console.log(weth);

        location(weth)
        // async function location(city){

        // apiKey = '15bdce8ec646007cb5ddc9daf3274014'

        // await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        // .then(val=>val.json())
        // .then(val=>{
        // console.log(val);
        // let c = val.main.temp
        // let d = val.main.humidity
        // let e = val.wind.speed
        // document.getElementById('temp').innerHTML = c +"C"
        // document.getElementById('humidity').innerHTML = d +"%"
        // document.getElementById('wind').innerHTML = e +"Km/H"
        // })
        // }

        function location(city){

        apiKey = '15bdce8ec646007cb5ddc9daf3274014'

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(val=>val.json())
        .then(val=>{
        console.log(val);
        let c = val.main.temp
        let d = val.main.humidity
        let e = val.wind.speed
        document.getElementById('temp').innerHTML = c +"C"
        document.getElementById('humidity').innerHTML = d +"%"
        document.getElementById('wind').innerHTML = e +"Km/H"
        })
        }

        
})


