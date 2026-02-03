document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)


document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        alert('Sorry ! Strictly Not allowed This function for it`s Web Page');
        return false;
    } else {
        return true;
    }
};



var countDownDtae = new Date("12 feb,2026 9:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDtae - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        


    }
}, 1000);

document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body');
    let heart = document.createElement('samp');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';


    let size = Math.random() * 100;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();

    }, 1000)
})

   
    document.addEventListener("touchstart",e=>{
        let body = document.querySelector('body');
        let heart = document.createElement('samp');
        let x = e.offsetX;
        let y = e.offsetY;
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
    
    
        let size = Math.random() * 80;
        heart.style.width = 20 + size + 'px';
        heart.style.height = 20 + size + 'px';
    
        let transformValue = Math.random() * 360;
        heart.style.transform = 'rotate(' + transformValue + 'deg)';
    
        body.appendChild(heart);
    
        setTimeout(function () {
            heart.remove();
    
        }, 1000)
       
        
    

})
document.addEventListener("touchmove",e=>{
    let body = document.querySelector('body');
    let heart = document.createElement('samp');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';


    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();

    }, 1000)
   
    


})
document.addEventListener("touchend",e=>{
    let body = document.querySelector('body');
    let heart = document.createElement('samp');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';


    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();

    }, 1000)
   
    


})





