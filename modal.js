// Global variable to keep track of the currently playing video
var currentVideo = null;

// Open the modal for the specified work
function openModal(work) {
    var modal = document.getElementById("modal-" + work);
    modal.style.display = "block";
    
    // Pause any currently playing video
    if (currentVideo) {
        currentVideo.pause();
        currentVideo = null;
    }
    
    // Lock the main scrollbar
    document.body.style.overflow = "hidden";
}

// Close the modal when the close button is clicked
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
        var modal = this.parentElement.parentElement;
        modal.style.display = "none";
        
        // Unlock the main scrollbar
        document.body.style.overflow = "auto";
        
        // Pause the video inside the closed modal
        var video = modal.querySelector("video");
        if (video) {
            video.pause();
        }
    }
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
            
            // Unlock the main scrollbar
            document.body.style.overflow = "auto";
            
            // Pause the video inside the closed modal
            var video = modals[i].querySelector("video");
            if (video) {
                video.pause();
            }
        }
    }
}

// Function to handle video play
function playVideo(video) {
    // Pause any currently playing video
    if (currentVideo && currentVideo !== video) {
        currentVideo.pause();
    }
    // Set the current video
    currentVideo = video;
    // Play the video
    video.play();
}
