let audioList = [
   
    {
        img:'./images/image2.jpg',
        audio:'./audios/audio2.mp3',
        songName:'Second Song',
        singerName:'SPB'
    },
    {
        img:'./images/image3.jpg',
        audio:'./audios/audio3.mp3',
        songName:'Third Song',
        singerName:'Sid Sriram'
    },
    {
        img:'./images/image4.jpg',
        audio:'./audios/audio4.mp3',
        songName:'Fourth Song',
        singerName:'Hariharan'
    }
]
const myImage = document.querySelector('img');
let myAudio = document.querySelector("audio");
const myH2 = document.querySelector('h2');
const myH3 = document.querySelector('h3');

const myPlayIcon = document.querySelector('#play');
const forwardIcon = document.querySelector('#forward');
const backwardIcon = document.querySelector('#backward');
const shuffleIcon = document.querySelector('#shuffle');
const heartIcon = document.querySelector('#heart');

let audioPlaying = false;

function playAudio(){
    myAudio.play()
    audioPlaying = true;
    myPlayIcon.classList.replace('fa-play','fa-pause');


}
function pauseAudio() {
    myAudio.pause();
    audioPlaying = false;
    myPlayIcon.classList.replace('fa-pause','fa-play');

}
//events

myPlayIcon.addEventListener("click",function(){
    if(audioPlaying){
        pauseAudio()
    } else {
        playAudio();
    }

})
let songIndex = 0;
function songsList(audioList){
    myImage.src = audioList.img;
    myAudio.src = audioList.audio;
    myH2.textContent = audioList.songName;
    myH3.textContent = audioList.singerName

}
forwardIcon.addEventListener("click", function(){
    if(songIndex > audioList.length - 1){
        songIndex = 0;
    }
    songsList(audioList[songIndex]);
        playAudio()
        songIndex++;
})
backwardIcon.addEventListener("click", function(){
    songIndex--;

    if(songIndex < 0){
        songIndex = audioList.length -1;
    }
    songsList(audioList[songIndex]);
    playAudio()
    

})

shuffleIcon.addEventListener("click", function() {
    let randomNumberIndex = Math.floor(Math.random() * 3)
    songsList(audioList[randomNumberIndex]);
    playAudio();
})

heartIcon.addEventListener("click",function() {
    heartIcon.style.color = 'red';
    localStorage.setItem(myH2.textContent,myH3.textContent);
})

heartIcon.addEventListener("dblclick",function() {
    heartIcon.style.color = 'black';
    localStorage.removeItem(myH2.textContent,myH3.textContent);
})

const myTotalTime = document.querySelector(".totaltime")
const myCurrentTime = document.querySelector(".currenttime")
const innerProgress = document.querySelector(".innerprogress")

myAudio.addEventListener("timeupdate", function(event){

    let currentTimeFromEvent = event.target.currentTime;
    let duration = event.target.duration;

    let audioPlayedDuration = currentTimeFromEvent/duration * 100
    innerProgress.style.width = `${audioPlayedDuration}%`

    let totalTimeInMins = Math.floor(duration/60);
    let totalTimeInSecs = Math.floor(duration % 60);

    myTotalTime.textContent = `${totalTimeInMins}:${totalTimeInSecs}`
    let currentTimeInMins = Math.floor(currentTimeFromEvent/60);
    let currentTimeInSecs = Math.floor(currentTimeFromEvent % 60);

    mycurrentTime.textContent = `${currentTimeInMins}:${currentTimeInSecs}`

})


