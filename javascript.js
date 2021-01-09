// {/* <script>

function startTimer() {
    var timeleft = 5;

    var downloadTimer = setInterval(function (){
        
    document.getElementById("countdown").innerHTML = timeleft + "&nbsp"+"seconds remaining";

    timeleft -= 1;

    if(timeleft < -1){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);
}

var startButtonEl = document.querySelector('#gameStart');

startButtonEl.addEventListener('click', startTimer)

//     {/* // console.log(countdown);*/


// {/* <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
// console.log(onclick) */}


// function sayHi() {
//     prompt('Hello');
//   }
  
//   setTimeout(sayHi, 3000);
//   console.log(sayHi)