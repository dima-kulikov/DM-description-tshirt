const videos = document.querySelectorAll(".video");


for (const video of videos) {
    video.addEventListener('mouseover', function() { video.play() }, false);
    video.addEventListener('mouseout', function() { video.pause() }, false);
}

