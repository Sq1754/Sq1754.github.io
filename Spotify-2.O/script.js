
console.log("JavaScript Wrting");
let currentSong = new Audio();
let songs;
let currFolder;


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getSongs(folder){
    currFolder = folder;
    // let a = await fetch(`http://127.0.0.1:5500/${folder}`);
    let a = await fetch(`/${folder}/`);
    let response = await a.text();
    let div =  document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            let songName = element.href.split(`/${folder}/`)[1];
            songs.push(songName);
        }
    }
    
        // Put All and Show Songs in library
        let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
        songUL.innerHTML = ""
        for (const song of songs) {
            songUL.innerHTML = songUL.innerHTML + `<li> <img class="invert" src="assets/music.svg" alt="">
                                                        <div class="info">
                                                            <div> ${song.replaceAll("%20"," ")}</div>
                                                            
                                                        </div>
                                                        <div class="playNow">
                                                            <span>Play Now</span>
                                                            <img class="invert" src="assets/playbutton.svg" alt="">
                                                        </div>
                                                    </li>` ;
        }
    
        // Attach AN eventListner to each Song
        Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
                e.addEventListener("click", element=>{
                    playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
                })
        })

    return songs;
}

const playMusic = (track, pause = false)=>{
    currentSong.src = `/${currFolder}/` + track.replaceAll("%20", " ");
    if(!pause){
        currentSong.play();
        play.src = "assets/pause.svg";
    }
    document.querySelector(".songInfo").innerHTML = track.replaceAll("%20", " ")
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

//this function works while open on live server

async function displayAlbums() {
    console.log("displaying albums")
    let a = await fetch(`/songs/`)
    let response = await a.text(); 
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-1)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json();  
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" fill="black" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
        </div>

            <img src="/songs/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }

  

}

async function main(){
    
    // Get THe list of songs
    await getSongs(`songs/songs`);
    playMusic(songs[0],true)

    // Display all the ALBUM
    await displayAlbums();

      //LOad the playlist when card is clicked
        Array.from(document.getElementsByClassName("card")).forEach(e=>{
        e.addEventListener("click", async item=>{
            console.log(item.currentTarget.dataset.folder)
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
            playMusic(songs[0]);
        })
    })

    // Attach an eventListener to play next and previous
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src = "assets/pause.svg"
            
        }else{
            currentSong.pause();
            play.src = "assets/playbutton.svg"
        }
    })

    // Listen for Time Update event
    currentSong.addEventListener("timeupdate",()=>{
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration)*100 +"%";
        const seekbar = document.querySelector(".seekbar");
        const circlePosition = (currentSong.currentTime / currentSong.duration) * 100;
    if (circlePosition <= 100) {
        seekbar.style.background = `linear-gradient(to right, #e0209b ${circlePosition}%, black ${circlePosition}%)`;
    }

    })
    
    //Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100;  // percentage of how much the song is moved 
        document.querySelector(".circle").style.left = percent +"%";
        currentSong.currentTime = ((currentSong.duration)*percent)/100;
    })

    // Add event listener for menubuton
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "0";
    })

    // Add event listener for close
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "-100%";
    })

    //Add eventlistener to previous and next button

    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        console.log("Current song index:", index);
        if (index > 0) {
            playMusic(songs[index - 1]);
        } else {
            console.log("Reached the first song, playing the last song.");
            playMusic(songs[songs.length - 1]); // Play the last song
        }
    });
    
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        console.log("Current song index:", index);
        if (index < songs.length - 1 ) {
            playMusic(songs[index + 1]);
        } else {
            console.log("Reached the last song, playing the first song.");
            playMusic(songs[0]); // Play the first song
        }
    });
    
    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    console.log("Setting volume to", e.target.value, "/ 100")
    currentSong.volume = parseInt(e.target.value) / 100
    if (currentSong.volume >0){
        document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("assets/mute.svg", "assets/volume.svg")
    }
})

    // Add event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("assets/volume.svg")){
            e.target.src = e.target.src.replace("assets/volume.svg", "assets/mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("assets/mute.svg", "assets/volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })
    
}

main();

