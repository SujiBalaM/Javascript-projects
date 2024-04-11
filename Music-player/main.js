
let audioList = [
   
    {
        img:'./images/mookuthi-amman-movie-poster.webp',
        audio:'./audios/Paarthene Amman Song.mp3',
        songName:'Paarthene Amman Song',
        singerName:'Hariharan'
    },
    {
        img:'./images/master-movie-poster.webp',
        audio:'./audios/Azhagiya Puyale.mp3',
        songName:'Master The blasterAzhagiya Puyale',
        singerName:'GV Prakash'
    },
    {
        img:'./images/soorarai-pottru-movie-poster.webp',
        audio:'./audios/Kayilae Aagasam.mp3',
        songName:'Kayile Aagasam',
        singerName:'Pradeep'
    },
    {
        img:'./images/soorarai-pottru-movie-poster.webp',
        audio:'./audios/Maara Theme.mp3',
        songName:'Maara Theme',
        singerName:'Hariharan'
    },
    {
        img:'./images/netrikann-movie-poster.webp',
        audio:'./audios/Idhuvum Kadandhu Pogum The Healing Song.mp3',
        songName:'Idhuvum Kadandhu Pogum',
        singerName:'Pradeep'
    }, {
        img:'./images/teddy-movie-poster.webp',
        audio:'./audios/Teddy Bear Rhyme.mp3',
        songName:'Teddy Bear',
        singerName:'GV Prakash'
    },
    {
        img:'./images/jai-bhim-movie-poster.webp',
        audio:'./audios/Thala Kodhum.mp3',
        songName:'Thala Kodhum',
        singerName:'Pradeep'
    },
    {
        img:'./images/pushpa-the-rise-movie-poster.webp',
        audio:'./audios/Srivalli.mp3',
        songName:'Srivalli',
        singerName:'Sid Sriram'
    },
    {
        img:'./images/thunivu-movie-poster.webp',
        audio:'./audios/Nenjame.mp3',
        songName:'Nenjame',
        singerName:'Hariharan'
    },
    {
        img:'./images/ponniyin-selvan-part-1-movie-poster.webp',
        audio:'./audios/Ponni Nadhi.mp3',
        songName:'Ponni Nadhi',
        singerName:'The Legend'
    },
    {
        img:'./images/varisu-movie-poster.webp',
        audio:'./audios/Thee Thalapathy.mp3',
        songName:'Thee Thalapathy',
        singerName:'Anirudh'
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
    console.log(audioPlaying);
    if(audioPlaying){
        pauseAudio()
        // myAudio.loop = false;
    
    } else {
        playAudio();
        // myAudio.loop = true;
        // songsList(audioList[songIndex]);
        // songIndex++;
        // myAudio.play()

    }

})
myPlayIcon.addEventListener('ended', function () {
    i = ++i < audioList.length ? i : 0;
    console.log(i)
    myAudio.src = audioList.audio[i];
    playAudio();
}, true);
let songIndex = 0;
function songsList(audioList){
    console.log(audioList);
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
    let randomNumberIndex = Math.floor(Math.random() * 12)
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
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;

    let audioPlayedDuration = currentTime/duration * 100
    innerProgress.style.width = `${audioPlayedDuration}%`

    let totalTimeInMins = Math.floor(duration/60);
    let totalTimeInSecs = Math.floor(duration % 60);

    myTotalTime.textContent = `${totalTimeInMins}:${totalTimeInSecs}`


    let currentTimeInMins = Math.floor(currentTime/60);
    let currentTimeInSecs = Math.floor(currentTime % 60);

    myCurrentTime.textContent = `${currentTimeInMins}:${currentTimeInSecs}`

})


