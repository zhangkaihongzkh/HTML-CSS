window.onload = function(){
	var obtn = document.getElementById('btn');
	var timer = null;
	obtn.onclick = function(){
		alert('1111');
		/*timer = setInterval(function(){
			//获取滚动条距顶部位置
			var osTop = document.documentElement.scrollTop||document.body.scrollTop;
			var ispeed = Math.floor(-osTop/6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			if(osTop == 0){
				clearInterval(timer);
			}
		},30); */
	}

}