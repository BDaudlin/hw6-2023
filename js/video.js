// Main event listener; essentially loads in the video
window.addEventListener("load", function() {
	// Define the video variable to the found video class
    var video = document.querySelector(".video");

    // Disables autoplay for the video variable
    video.autoplay = false;

	// Disables looping from occurring for the video variable
    video.loop = false;

    // Play Button Element
    document.getElementById("play").addEventListener("click", function() {
		// Plays the video
        video.play();
		
		// Update volume information
		document.getElementById("volume").textContent = (video.volume * 100).toFixed(0) + "%";
    });

    // Pause Button Element
    document.getElementById("pause").addEventListener("click", function() {
		// Pauses the video
        video.pause();
    });

    // Slow Down Button Element
    document.getElementById("slower").addEventListener("click", function() {
		// Reduces the playback by 10%
		video.playbackRate -= 0.1;

		// Logs new speed
		console.log("New video speed: " + video.playbackRate.toFixed(1));
    });

    // Speed Up Button Element
    document.getElementById("faster").addEventListener("click", function() {
		// Increases the playback by 10%
		video.playbackRate += 0.1;

		// Logs new speed
        console.log("New video speed: " + video.playbackRate.toFixed(1));
    });

    // Skip Ahead Button Element
    document.getElementById("skip").addEventListener("click", function() {
		// Skip ahead 10 seconds
        video.currentTime += 10;

		// Check whether or not the current time is greater than the duration
        if (video.currentTime > video.duration) {
			// Go back to start of video
            video.currentTime = 0;
        }

		// Log the current location of the video
        console.log("Current video location: " + video.currentTime.toFixed(1));
    });

    // Mute Button Element
    document.getElementById("mute").addEventListener("click", function() {
		// When pressed, reverses the current option
        video.muted = !video.muted;

		// When pressed, reverses the current text
        this.textContent = video.muted ? "Unmute" : "Mute";

    });

    // Volume Slider Elemente
    document.getElementById("slider").addEventListener("input", function() {
		// Updates the volume to the current value of the slider
        video.volume = this.value / 100;


        document.getElementById("volume").textContent = (video.volume * 100).toFixed(0) + "%";
    });

    // Styled - Old School Button Element
    document.getElementById("vintage").addEventListener("click", function() {
		// Updates to old school style
        video.classList.add("oldSchool");

		// Removes original style
        video.classList.remove("original");
    });

    // Styled - Original Button Element
    document.getElementById("orig").addEventListener("click", function() {
		// Updates to original style
		video.classList.add("original");

		// Removes old school style
        video.classList.remove("oldSchool");
    });
});