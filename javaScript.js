const videoThumbnails = document.querySelectorAll('.video-thumbnail');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxVideo = document.getElementById('lightbox-video');
const closeLightboxVideo = document.querySelector('.close-btn');

// Function to open lightbox with specified video URL
function openLightBox(videoUrl) {
    lightboxModal.style.display = 'flex';
    lightboxVideo.src = `${videoUrl}?autoplay=1&controls=1`;
}

// Function to close the lightbox
function closeLightBox() {
    lightboxModal.style.display = 'none';
    lightboxVideo.src = ''; // Stop the video
}

// Add event listener to each video thumbnail
videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url');
        openLightBox(videoUrl);
        
       
    });
});

// Close lightbox when 'X' button is clicked
closeLightboxVideo.addEventListener('click', closeLightBox);

// Close lightbox when clicking outside the video content
lightboxModal.addEventListener('click', function(event) {
    if (event.target === lightboxModal) {
        closeLightBox();
    }
});