console.log("Welcome to Spotify");

// variables initialization
let songIndex = 0;
let audioElement = new Audio("songs/1.m4a");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
  {
    songName: "Khatta FLow",
    filePath: "songs/1.m4a",
    coverPath: "logos/img1.jpeg",
  },
  {
    songName: "Brand New",
    filePath: "songs/2.m4a",
    coverPath: "logos/img2.jpeg",
  },
  {
    songName: "Lukka Chupi",
    filePath: "songs/2.m4a",
    coverPath: "logos/img3.jpeg",
  },
  {
    songName: "Fanne Khan",
    filePath: "songs/2.m4a",
    coverPath: "logos/img4.jpeg",
  },
  {
    songName: "Asal G",
    filePath: "songs/2.m4a",
    coverPath: "logos/img5.jpeg",
  },
];

//Handle Play Pause
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      index = parseInt(e.target.id);

      e.target.classList.remove("fa-circle-pause");
      e.target.classList.add("fa-circle-play");

      audioElement.src = `songs/${index + 1}.m4a`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 4) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.m4a`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 4;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.m4a`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

// hamburger
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('nav ul li').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});
