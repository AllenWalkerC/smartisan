var $ = require('jquery');
function Main(){
	this.init = function(){
		this.bind();
	}
	this.init()
}
Main.prototype = {
	bind: function(){
		$('.shopping-cart').on('mouseenter',function(){
			$(this).find('.wrap').show();
			$(this).find('.ct').show();
			$('.dropdown').animate({
				height: '0',
				opacity: '0'
			})
			$('.dropdown').css({
				display: 'none',
				top: '190px'
			})
		});
		$('.shopping-cart').on('mouseleave',function(){
			$(this).find('.wrap').hide();
			$(this).find('.ct').hide()
		});
		$('.wrap').on('mouseenter',function(){
			$(this).show();
		});
		$('.wrap').on('mouseleave',function(){
			$(this).hide();
		});
		$(window).on('scroll',function(){
			if($(this).scrollTop() > 145){
				$('.hover-nav').css({
					display: 'block'
				});
				$('.hover-nav').animate({
					height: '60px'
			    })
			}else{
				$('.hover-nav').hide();
			}
		});
		$('.phone').on('mouseenter',function(){
			$('.dropdown').css({
				display: 'block'
			})
			$('.dropdown').animate({
				height: '350px',
				opacity: '1'
			})
		});
		$('.phone-hover').on('mouseenter',function(){
			var scroll = $(window).scrollTop();
			$('.dropdown').css({
				display: 'block',
				top: ( scroll+60 )+ 'px'
			})
			$('.dropdown').animate({
				height: '350px',
				opacity: '1'
			})
		});
		$('.dropdown').on('mouseleave',function(){
			$(this).animate({
				height: '0',
				opacity: '0'
			})
			$(this).css({
				display: 'none',
				top: '190px'
			})
		});
		$('header').on('mouseenter',function(){
			$('.dropdown').animate({
				height: '0',
				opacity: '0'
			})
			$('.dropdown').css({
				display: 'none',
				top: '190px'
			})
		});
		$('.hot-list>li').on('mouseenter',function(){
             $(this).find('.tooltip').show();
             $(this).find('.price').css({
             	opacity: 0
             })
		});
		$('.hot-list>li').on('mouseleave',function(){
             $(this).find('.tooltip').hide();
             $(this).find('.price').css({
             	opacity: 1
             })
		});
		$('.list-of-goods>li').on('mouseenter',function(){
             $(this).find('.tooltip').show();
             $(this).find('.price').css({
             	opacity: 0
             })
		});
		$('.list-of-goods>li').on('mouseleave',function(){
             $(this).find('.tooltip').hide();
             $(this).find('.price').css({
             	opacity: 1
             })
		});
		$('.apps>ul>li').on('mouseenter',function(){
             $(this).find('.app-tooltip').show();
             $(this).find('.common-tooltip').show();
             $(this).find('.common-tooltip').siblings('div').css({
             	opacity: 0
             });
             $(this).find('.app-tooltip').siblings('div').css({
             	opacity: 0
             });
		});
		$('.apps>ul>li').on('mouseleave',function(){
             $(this).find('.app-tooltip').hide();
             $(this).find('.common-tooltip').hide();
             $(this).find('.app-tooltip').siblings('div').css({
             	opacity: 1
             });
             $(this).find('.common-tooltip').siblings('div').css({
             	opacity: 1
             });
		});
		$('.choose').on('mouseenter',function(){
			$(this).siblings('div').removeClass('choose-hover');
			$(this).addClass('choose-hover');
			$(this).siblings('div').find('.choose-items').removeClass('choose-items-hover'); 
			$(this).find('.choose-items').addClass('choose-items-hover');
			var chooseItems =  $(this).find('.choose-items-hover');
			var index = chooseItems.attr('data-num');  
			var img = chooseItems.parents('.choose-list').siblings('img');
			var tooltip = chooseItems.parents('.choose-list').siblings('.tooltip');
			img.attr('src',img.attr('data-src'+index));
			if($(this).find('.circle-green').hasClass('choose-items-hover')){
				tooltip.find('div').last().text("已售罄");
			    tooltip.find('div').last().addClass("tooltip-sellout");
			}else if($(this).find('.circle-black').hasClass('choose-items-hover') && $(this).find('.circle-black').attr('data-num') === "3"){
                tooltip.find('div').last().text("已售罄");
			    tooltip.find('div').last().addClass("tooltip-sellout");
			}else{
				tooltip.find('div').last().text("加入购物车 ");
				tooltip.find('div').last().removeClass("tooltip-sellout");
				tooltip.find('div').last().addClass("tooltip-buy");
			}
		});
		$('.language').on('click',function(){
			if($(this).find('ul').hasClass('active')){
				$(this).find('ul').removeClass('active');
				$(this).find('span').removeClass('rotating');
			}else{
                $(this).find('ul').addClass('active');
				$(this).find('span').addClass('rotating');
			}
		});
	}
}





var main = new Main();
module.exports.main = main; 