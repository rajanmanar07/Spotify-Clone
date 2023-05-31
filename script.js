console.log("Welcome to Spotify");
//intialise the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Mortals ft.Laura",
    filePath: "songs/1.mp3",
    coverPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59IuJv2JHhUbl3lG4MhoBXtOwWaFTg7ywz3ejqIEwBQ&s",
  },
  {
    songName: "downfall air",
    filePath: "songs/2.mp3",
    coverPath:
      "https://cdn4.vectorstock.com/i/1000x1000/94/83/music-speakers-background-album-cover-poster-vector-33029483.jpg",
  },
  {
    songName: "cartoon-on & on",
    filePath: "songs/3.mp3",
    coverPath: "https://cdn.wallpapersafari.com/71/70/eItEL0.jpg",
  },
  {
    songName: "royalty",
    filePath: "songs/4.mp3",
    coverPath: "https://wallpaperaccess.com/full/1926577.jpg",
  },
  {
    songName: " Jangi-Heroes tonight",
    filePath: "songs/5.mp3",
    coverPath: "https://cdn.wallpapersafari.com/25/49/roHLzv.jpg",
  },
  {
    songName: "cartoon-We loose",
    filePath: "songs/6.mp3",
    coverPath:
      "https://www.moviehdwallpapers.com/wp-content/uploads/2014/11/hd-abstract-music-wallpapers-hd-desktop-9.jpg",
  },
  {
    songName: "smooting eyes",
    filePath: "songs/7.mp3",
    coverPath:
      "https://c4.wallpaperflare.com/wallpaper/8/141/142/colorful-music-speaker-wallpaper-preview.jpg",
  },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();
//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// listen to events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    myProgressBar.value * audioElement.duration / 100;
})
