const play = document.getElementById("play");
const image = document.getElementById("play_png");
const podcast = new Audio("podcast1.mp4");
const twitter = document.getElementById("twitter");
const progressbar = document.getElementById("hp_range");
let duree = document.getElementById("duree");


// Met en route le fichier lorsque le bouton play est cliqué et met en pause lorsque le 
// bouton pause est cliqué
function changeImage(){
    if(image.src=="file:///C:/Users/BRAIK/Documents/30DaysOfReact/playpng.png"){
        image.src="file:///C:Users/BRAIK/Documents/30DaysOfReact/pausepng.png";
        podcast.play();
    }
    else {
        image.src="file:///C:/Users/BRAIK/Documents/30DaysOfReact/playpng.png";
        podcast.pause();
    }
}

function twitterPage(){
    window.open("https://twitter.com/siriuswhitee");
}


podcast.addEventListener("timeupdate", function(){
    var cT = podcast.currentTime
    var dur = podcast.duration  
    progressbar.style.width = ((cT +.25)/dur*100)+'%';
    duree.innerHTML = (cT/60).toFixed(2)+":"+(dur/60).toFixed(2);
});




