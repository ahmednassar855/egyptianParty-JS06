$('.fa-xmark').click( function (){
    $('.side-bar').animate({
        right: "100%",
        left : "-100%",
        function : $('.open-nav').animate({
            left : "0"
        }, 500),
    } , 500);   
})


$('.open-nav').click( function(){
    if($('.open-nav').css('left') == '0px'){
        $('.open-nav').animate({
            left : "15%",
            function : $('.side-bar').animate({
                right: "85%",
                left : "0%",
            }, 500)
        },500)
    }
})

// Countdown time
var countDownDate = new Date("12 21, 2022 16:37:52").getTime();
var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days + "d "
    document.querySelector(".hours").innerHTML = hours + "h " 
    document.querySelector(".mins").innerHTML = minutes + "m " 
    document.querySelector(".secs").innerHTML = seconds + "s"
}, 1000)


// remaining character number in text
let x = Number(document.querySelector('.total-of-Char').innerHTML);
let characterSet  =  document.getElementById("textArea");
document.querySelector('.textArea').addEventListener("keydown" , function (e){        
    let y = characterSet.value;
    console.log(y.length);
    
    console.log(e)
    let reamainingChar = x - y.length;
    document.querySelector('.total-of-Char').innerHTML = reamainingChar;

    if ( y.length >= 100 ){
        characterSet.value = "";
        // e.preventDefault();
        console.log((y.length >= 100),"gowa el if");
    }
    console.log((y.length >= 100),"bara el if");
})  


$('.diffrent-bg').css('background' , ' gray');