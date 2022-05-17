AFRAME.registerComponent('change-site', {
    schema: {
        url: { default: '' }
    },

    init: function () {

        var data = this.data;
        var el = this.el;
    
        el.addEventListener("mouseenter", function () {
            setTimeout(function(){
                history.replaceState({page: 1}, "title 1", data.url);
                history.go(0);
            }, 500);
        })
    }

});