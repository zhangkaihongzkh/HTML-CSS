/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-29 16:35:59
 * @version $Id$
 */

$(function(){
	$(".header .nav .more").hover(function(){
		$(this).find('a').addClass('hover_a');
		$(this).find('.listBox').stop().slideDown(400);
	},function(){
		$(this).find('a').removeClass('hover_a');
		$(this).find('.listBox').stop().slideUp(600);
	});
	$(".header .nav .more .listBox li").hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
	},function(){
		$(this).removeClass('on');/*针对鼠标离开ul区域的情况*/
	});
});