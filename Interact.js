// Play et stop de son grace aux boutons
    //1

function playAudio1() {
  var audio = document.getElementById("audio1");
  audio.play();
}

function stopAudio1() {
  var audio = document.getElementById("audio1");
    audio.pause();
    audio.currentTime = 0;
}

    //2

function playAudio2() {
  var audio = document.getElementById("audio2");
  audio.play();
}

function stopAudio2() {
  var audio = document.getElementById("audio2");
    audio.pause();
    audio.currentTime = 0;
}

    //3

function playAudio3() {
  var audio = document.getElementById("audio3");
  audio.play();
}

function stopAudio3() {
  var audio = document.getElementById("audio3");
    audio.pause();
    audio.currentTime = 0;
}

// apparition, disparition via hover
    //1


document.getElementById("partie1").onmouseenter = function() {mouseEnter1()};
document.getElementById("partie1").onmouseleave = function() {mouseLeave1()};

function mouseEnter1(){
    document.getElementById('overlay1').style.visibility = 'visible';
}

function mouseLeave1() {
    document.getElementById('overlay1').style.visibility = 'hidden';
}

    //2


document.getElementById("partie2").onmouseenter = function() {mouseEnter2()};
document.getElementById("partie2").onmouseleave = function() {mouseLeave2()};

function mouseEnter2(){
    document.getElementById('overlay2').style.visibility = 'visible';
}

function mouseLeave2() {
    document.getElementById('overlay2').style.visibility = 'hidden';
}

    //3


document.getElementById("partie3").onmouseenter = function() {mouseEnter3()};
document.getElementById("partie3").onmouseleave = function() {mouseLeave3()};

function mouseEnter3(){
    document.getElementById('overlay3').style.visibility = 'visible';
}

function mouseLeave3() {
    document.getElementById('overlay3').style.visibility = 'hidden';
}
