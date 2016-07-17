var invest = (function() {

	//登记JQueryDom
	var JQueryMap = (function() {
		//轮播相关Dom
		var carouselItem = $(".item");
		var carouselClass = $('.carousel');

		return {
			carouselItem: carouselItem,
			carouselClass: carouselClass,
		};
	})();

	//轮播滑动事件
	JQueryMap.carouselItem.on("swipeleft", function() {
		JQueryMap.carouselClass.carousel('next');
	});
	JQueryMap.carouselItem.on("swiperight", function() {
		JQueryMap.carouselClass.carousel('prev');
	});
	var carouselRun = function() {
		JQueryMap.carouselClass.carousel('next');
	};
	setInterval(carouselRun, 5000);	

})();