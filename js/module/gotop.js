var $ = require('jquery');
function Gotop(){
	this.init = function(){
		this.bind();
	}
	this.init();
}
Gotop.prototype = {
	show: function(){
		$('.gotop').animate({
			bottom: '50px'
		},200)
	},
	hide: function(){
		$('.gotop').animate({
			bottom: '-50px'
		},100)
	},
	bind: function(){
		var _this = this;
		$(window).on('scroll',function(){
			if($(this).scrollTop() > 300 ){
				_this.show()
			}else{
				_this.hide();
			}
		})
		$('.gotop').on('click',function(){
			$(window).scrollTop(0);
		})
	}
}
var gotop = new Gotop();
module.exports.gotop = gotop;
