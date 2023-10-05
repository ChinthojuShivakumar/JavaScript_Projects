



let btn = document.getElementById('btn')

let storeColorId = document.getElementById('storeColorId')


function getColor(){

let color = '#'

let letters = '1234567890ABCDEF'

for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]

}

    storeColorId.innerHTML = `color id is  ${color}`
console.log(color);
return color


}


btn.addEventListener('click',()=>{

    let body = document.body

    let getRandomBackground = getColor()
   
    body.style.backgroundColor = getRandomBackground
 
})


















































// document.cookie = 'name=shiva';
// document.cookie = "name1= kumarswamy";



// let c = document.cookie.split(";")
// console.log(c);
// let d = c[0].split('=')

// console.log(d[1]);

// let e = c[1].split('=')
// console.log(e[1]);

// function parseCookies() {
//   var cookies = {};
//   document.cookie.split(";").forEach(function(cookie) {
//     var parts = cookie.trim().split("=");
//     var name = parts[0];
//     var value = parts[1];
//     cookies[name] = value;
//   });
//   return cookies;
// }

// var cookies = parseCookies();
// console.log(cookies.name1);    // Output: "shiva"
// console.log(cookies.name);   // Output: "kumarswamy"







