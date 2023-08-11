console.log("Its Working")

// Initialize the Variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: 'Its always Blue',filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: 'Trap',filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: 'They Mad',filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: 'Rich The Kid',filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: 'Sunshine',filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: 'Safety Dance',filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: 'Back It Up',filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: 'Despacito',filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: 'Butter',filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: 'True Love',filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
]


// audioElement.paly()
//Handle Play pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
    audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);  // duration converted to percentage
    myProgressBar.value= progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})

const makeAllPlay =() =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex=0;
    }else{
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex=0;
    }else{
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})