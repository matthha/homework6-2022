var video = document.querySelector(".video");
let speed = 1;

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false
	video.load()

	
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector('#volume').textContent= (video.volume * 100) + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log(video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log(video.playbackRate)
});
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log(video.currentTime)
});
const mu = document.querySelector('#mute');
mu.addEventListener("click", function() {
	if (mu.textContent == 'Mute') {
		video.muted = true;
		mu.textContent = 'Unmute'
	} else {
		video.muted = false;
		mu.textContent = 'Mute'
	}
});
document.querySelector('#slider').addEventListener("change", function() {
	video.volume = (this.value)/100;
	document.querySelector('#volume').textContent=this.value + '%';
});
document.querySelector('#vintage').addEventListener("click", function() {
	video.classList = "video oldSchool";
});
document.querySelector('#orig').addEventListener("click", function() {
	video.classList = "video";
});
