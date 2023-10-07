console.log('Welcome To Spotify Clone')

let songIndex =0;
let coverIndex =0;
let audioElement = new Audio('songs/1.mp3');
let coverImg = document.getElementById('coverImg');
let cover = document.getElementById('cover');
let audioPlay = document.getElementById('middle');
let audioBackward = document.getElementById('left');
let audioForward = document.getElementById('right');


let songs =[
    {songName:"You Lie In April", filepath: "songs/1.mp3", coverPath: "covers/Cover1.jpg"},
    {songName:"Kaguya Sama: Love Is War", filepath: "songs/2.mp3", coverPath: "covers/Cover2.jpg"},
    {songName:"Domestic Girlfriend", filepath: "songs/3.mp3", coverPath: "covers/Cover3.jpg"},
    {songName:"Summertime", filepath: "songs/4.mp3", coverPath: "covers/Cover4.jpg"},
    {songName:"Demon Slayer", filepath: "songs/5.mp3", coverPath: "covers/Cover5.jpg"},
    {songName:"Hunter x Hunter", filepath: "songs/6.mp3", coverPath: "covers/Cover6.jpg"},
    {songName:"Kamisama Hajimamashte", filepath: "songs/7.mp3", coverPath: "covers/Cover7.jpg"},
    {songName:"Seven Deadly Sins", filepath: "songs/8.mp3", coverPath: "covers/Cover8.jpg"},
    {songName:"Bunny Girl Senpai", filepath: "songs/9.mp3", coverPath: "covers/Cover9.jpg"},
    {songName:"Rent A Girlfriend", filepath: "songs/10.mp3", coverPath: "covers/Cover10.jpg"},
]

// audioElement.play();

const randomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

const gradient = () => {
    const color1 = randomColor();
    const color2 = randomColor();
    document.body.style.backgroundImage = `linear-gradient(to left top, #${color1},#${color2})`;
}
gradient();

audioPlay.addEventListener('click',()=>{
    if(audioElement.paused){
        audioElement.play();
        middle.classList.remove('fa-play');
        middle.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        middle.classList.add('fa-play');
        middle.classList.remove('fa-pause');
    }

});

audioElement.addEventListener('timeupdate', ()=>{
    progressBar.value = parseInt((audioElement.currentTime / audioElement.duration)* 100);
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration / 100 ;
})


audioForward.addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
      songIndex+=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    coverImg.src = `covers/Cover${songIndex+1}.jpg`;
    cover.innerText = songs[songIndex].songName;
    gradient();
    audioElement.currentTime=0;
    audioElement.play();
    middle.classList.add('fa-pause');
    middle.classList.remove('fa-play');
})

audioBackward.addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
      songIndex-=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    coverImg.src = `covers/Cover${songIndex+1}.jpg`;
    cover.innerText = songs[songIndex].songName;
    gradient();
    audioElement.currentTime=0;
    audioElement.play();
    middle.classList.add('fa-pause');
    middle.classList.remove('fa-play');
})