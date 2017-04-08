var $ = require('jquery');
function ThreeD(){
	this.init()
};
ThreeD.prototype = {
	init: function(){
        $(".bg").mouseenter(function() {
            var thisPX = $(this).offset().left;
            var thisPY = $(this).offset().top;
            var boxWidth = $(this).outerWidth();
            var boxHeight = $(this).outerHeight();
            $(this).addClass("move");
            $(".move").mousemove(function(event) {
                var mouseX = event.pageX - thisPX;
                var mouseY = event.pageY - thisPY;
                var X;
                var Y;               
                X = mouseX - boxWidth / 2;
                Y = boxHeight / 2 - mouseY;
                $(".move").css({
                    "transform": "rotateY(" + X/200  + "deg) " + "rotateX(" + Y/200  + "deg)"
                });
            });
        });
        $(".bg").mouseleave(function() {
            $(this).removeClass("move");
            $(this).css({
                "transform": "rotateY(0deg) rotateX(0deg)"
            });
        });

	}
}
var threeD = new ThreeD()
module.exports.ThreeD = threeD;