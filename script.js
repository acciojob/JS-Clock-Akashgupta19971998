let hour=document.getElementsByClassName('hand hour-hand')
let minute=document.getElementsByClassName('hand min-hand')
let second=document.getElementsByClassName('hand second-hand')



function clock(){
   let date_time = new Date()
   let hr = date_time.getHours() 
   let min = date_time.getMinutes()
   let sec = date_time.getSeconds()
   hour.innerHTML = hr;
   min.innerHTML = min;
   hour.innerHTML = sec;
}


setInterval(clock, 1000)
