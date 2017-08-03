$(function(){
	function resize() {
			// 当文档加载完成才会执行
		// 获取屏幕宽度
		var windowWidth = $(window).width();
		// 判断屏幕属于大还是小
		// 根据大小为界面上的每一张轮播图设置背景
		var isSmallScreen = windowWidth < 768;
		$('#main_ad > .carousel-inner > .item').each(function(i,item) {
			var $item = $(item); // 因为拿到的是dom对象，需要转换
			var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
			// 因为需要小图时尺寸等比例变化，所以小图使用img方式
			$item.css('backgroundImage', 'url("' + imgSrc + '")')
			if(isSmallScreen) {
				$item.html('<img src="'+ imgSrc +'" alt="" />');
			} else {
				$item.html('');
			}
		});
	}
	$(window).on('resize',resize).trigger('resize');
});
