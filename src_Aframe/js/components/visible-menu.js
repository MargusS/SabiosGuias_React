AFRAME.registerComponent('visible-menu', {
    init: function () {
        var menu = document.querySelector('#menu');
        var controlMenu = document.querySelector('#menu-control');
        var video = document.querySelector('#home-video');
        var controlVideo = document.querySelector('#video-control');
        controlVideo.addEventListener('mouseenter', function () {
            if (video.paused) {
                
                video.play();
                controlVideo.setAttribute('src', '#pause');
            } else {
                video.pause();
                controlVideo.setAttribute('src', '#play');
            }
        })
        this.el.addEventListener('mouseenter', function () {
            if (menu.getAttribute('visible') == true) {
                video.pause();
                menu.setAttribute('visible', 'false')
                controlVideo.removeAttribute('class');
                controlMenu.setAttribute('src', '#menu-buttom');
            } else {
                menu.setAttribute('visible', 'true')
                controlVideo.setAttribute('class', 'clickable')
                controlMenu.setAttribute('src', '#close');
            }
        })
        
    }
})