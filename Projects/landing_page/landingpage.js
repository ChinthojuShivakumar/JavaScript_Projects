let btnn = document.getElementById('btn')

let starting_time = 0

let time = 30

let coun = document.getElementById('countDown')

let interval = setInterval(updateCount,1000)


function updateCount(){
  const minutes = Math.floor(time/60)
  let seconds = time%60

  coun.innerHTML = `${minutes}:${seconds}`;
  time--
  
if(time==-1){
  clearInterval(interval)
  btnn.innerHTML = 'Book Now'
  coun.style.display = 'none'
  
}
}