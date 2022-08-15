let countDate = new Date("Jan 1, 2022 00:00:00").getTime();



function newYear(){
    let now = new Date().getTime();
        gap = countDate - now;


        let second = 1000;
        let minute = second * 60;
        let hour = minute *60;
        let day = hour *24;

        let d = Math.floor(gap /(day));
        let h = Math.floor((gap %(day))/(hour));
        let m = Math.floor((gap %(hour))/(minute));
        let s = Math.floor((gap %(minute))/second);



        document.getElementById('days').innerHTML = d;
        document.getElementById('hours').innerHTML = h;
        document.getElementById('minutes').innerHTML = m;
        document.getElementById('seconds').innerHTML = s;
}

setInterval(function(){
    newYear();
},1000);





// let current = new Date("2021-12-31 23:59:58").getTime();


// let interval = setInterval(()=>{
//     let distance = countdown -current;

//     if (distance <=0) {
//         clearInterval(interval);

//     }
//     document.getElementById('days').getElementsByClassName('nuber')[0].innerHTML = pad(parseInt(distance /day));
//     document.getElementById('hours').getElementsByClassName('nuber')[0].innerHTML =pad( parseInt((distance % day) / hour));
//     document.getElementById('minutes').getElementsByClassName('nuber')[0].innerHTML =pad( parseInt((distance %hour)/minute));
//     document.getElementById('seconds').getElementsByClassName('nuber')[0].innerHTML =pad( parseInt((distance %minute)/ second));
//     current += second;
// }, second);


// function pad(n){
//     return (n<10 ? '0' : '')+n;
// }

// gsap.set('.feriwork',{opacity:0,y:50});




// function playAnim(){
//     let tl = gsap.timeline();

//     tl.to('.time-counter', {duration: 0.3, opacity:0})
//     .to('.feriwork',{duration:2,opacity:1,y:0,stagger:0.2,ease:'power4.outs'})
//     .to('.feriwork',{duration:1,opacity:0,y:0,ease:'power4.outs'}) ;
// }