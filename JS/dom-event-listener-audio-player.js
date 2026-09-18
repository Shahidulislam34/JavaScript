let myAudios = document.querySelector("#audios");
let audioTitle = document.querySelector("#audio-title");

let numOfAudio = myAudios.children.length;
let currentAudio = null;
let currentAnim = null;
for (let i = 0; i < numOfAudio; ++i) {
    myAudios.children[i].addEventListener("click", function(){
        let text = this.innerHTML;
        if (i < numOfAudio - 1) {
            audioPlay(text);
            addAnimation(i);
        }
        else if (i == numOfAudio - 1 && currentAudio != null) {
            currentAudio.pause();
            myAudios.children[currentAnim].classList.remove("button-animation");
            audioTitle.innerHTML = "Play Audios";
            currentAudio = null;
            currentAnim = null;
        }
    })
}

function audioPlay(text) {
    switch(text) {
        case "Audio 1":
            if (currentAudio != null) currentAudio.pause();
            currentAudio = new Audio("Data/Audio/audio1.mp3");
            currentAudio.play();
            audioTitle.innerHTML = "Audio 1 is playling";
            break;
        case "Audio 2":
            if (currentAudio != null) currentAudio.pause();
            currentAudio = new Audio("Data/Audio/audio2.mp3");
            audioTitle.innerHTML = "Audio 2 is playling";
            currentAudio.play();
            break;
        case "Audio 3":
            if (currentAudio != null) currentAudio.pause();
            currentAudio = new Audio("Data/Audio/audio3.mp3");
            audioTitle.innerHTML = "Audio 3 is playling";
            currentAudio.play();
            break;
    }
}

function addAnimation(i){
    if (currentAnim != null) 
        myAudios.children[currentAnim].classList.remove("button-animation");
    currentAnim = i;
    myAudios.children[currentAnim].classList.add("button-animation");
    
    //Animation remove after 1000ms automatically
    // setTimeout(() => {
    //     myAudios.children[currentAnim].classList.remove("button-animation");
    // }, 1000);
}