window.onload = initialize;

function initialize(){
    document.querySelector("#sound-button").addEventListener("click", toggleSound);
}

function toggleSound(event){
    var mySky = document.querySelector("#my-sky");
    var soundImg = document.querySelector("#sound-img");
    
    var sounding = mySky.getAttribute("sounding");

    if(sounding == "true"){
        mySky.setAttribute("sounding", false);
        soundImg.src = "img/icons/sound-off.png"
        mySky.components.sound.stopSound();
    }else{
        mySky.setAttribute("sounding",true);
        soundImg.src = "img/icons/sound-on.png"
        mySky.components.sound.playSound();
    }
}