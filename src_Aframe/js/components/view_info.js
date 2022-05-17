AFRAME.registerComponent('view-info', {
    init: function () {

        var el = this.el;
        var info = document.querySelector('#info-menu');
        
        el.addEventListener('mouseenter', function () {
            if (info.getAttribute('visible') == true) {
               info.setAttribute('visible', 'false'); 
               el.setAttribute('src', '#info');
               
            } else {
                info.setAttribute('visible', 'true');
                el.setAttribute('src', '#close');
            }
        })
        
    }
})