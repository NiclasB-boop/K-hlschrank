const audio = new Audio();
audio.src = "sound1.mp3";
const image = document.getElementById("image");
function animation() {
    image.removeEventListener("click", animation);
    image.src = "assets/box.gif?" + new Date().getTime();
    setTimeout(animationEnd, 30 * 120);
}

function animationEnd() {
    image.src = "assets/box_end.png";
    image.addEventListener("click", Sound);
}
function setAudioTime() {
    audio.currentTime = document.getElementById("Zeit").value;
    document.getElementById("zeitLabel").innerText =
        document.getElementById("Zeit").value;
}
function Sound() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
image.addEventListener("click", animation);
