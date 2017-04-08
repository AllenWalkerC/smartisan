var $ = require('jquery');

function lazyLoad(){
	this.init = function(){
		this.show();
		this.bind();
	}
	this.init();
}
lazyLoad.prototype = {
	checkShow: function($img){
		var windowHeight = $(window).height();
		var scroll = $(window).scrollTop();
        if($img.offset().top <= (windowHeight+scroll)){
            return true;
        }else{
        	return false;
        }
	},
	isLoad: function($img){
        return $img.attr('src') === '';
	},
	loadImg: function($img){
		$img.attr('src', $img.attr('data-src0'))
	},
	show: function(){
		var _this = this;
		$('img').each(function(){
			if(_this.checkShow($(this)) && _this.isLoad($(this))){
                _this.loadImg($(this));
			}
		})
	},
	bind: function(){
		var _this = this;
		$(window).on('scroll',function(){
			_this.show()
		})
	}
}
var lazyLoad = new lazyLoad();
module.exports.lazyLoad = lazyLoad;