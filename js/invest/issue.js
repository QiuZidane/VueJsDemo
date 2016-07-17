// 设置命名空间
var issue = (function() {

	//登记ZeptoDom
	var ZeptoMap = (function() {
		var deal_price = $("#deal_price");
		var cal_price_btn = $("#cal_price");

		return {
			deal_price: deal_price,
			cal_price_btn: cal_price_btn

		};
	})();

	// 初始化页面
	var initHtml = function() {
		var productObj, prodId, prodName, prodType, status, intRate, amount, restDays, preInt, deadLine, lstUpdate; // 传递过来的参数		
		var mainHtml;
		//获取产品参数
		productObj = JSON.parse(localStorage.getItem('productObj'));
		prodId = productObj.prodId;
		prodName = productObj.prodName;
		prodType = productObj.prodType;
		status = productObj.status;
		intRate = productObj.intRate;
		amount = productObj.amount;
		restDays = productObj.restDays;
		preInt = productObj.preInt;
		deadLine = productObj.deadLine;
		lstUpdate = productObj.lstUpdate;

		mainHtml = '';

	}

	
	var btn1 = $("#cal_price");

	// var reg = /^[0-9]+(.[0-9]{2})?$/;
//	var deal_price_value = price1.val();
	//	var r = deal_price_value.match(reg);
	//	if(r == null) {
	//		alert('error!')
	//	};

	btn1.click(function() {
		var price1 = $("#deal_price");
		var deal_price_value = price1.val();
		alert(deal_price_value);
		//		alert(1);
	});

	return {
		initHtml: initHtml
	}
})();

