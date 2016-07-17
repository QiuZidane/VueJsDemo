var TDDetails = (function() {

	//登记JQueryDom
	var JQueryMap = (function() {
		//投资按钮
		var investBtn = $("#investBtn");
		return {
			investBtn: investBtn
		};
	})();

	//按钮点击事件
	JQueryMap.investBtn.on("tap", function() {
		// 判断是否已登录电子钱包, 如果没有登录，跳转到登录
		if(false) {
			presentNew('xxx.html');
		} else {
			var onOK = function() {
				// 按了OK的回调处理,
				// 扣除电子钱包余额、更新电子钱包产品状态	

			}
			var onCancel = function() {
				// 按了取消的回调处理
				// 关闭

			}
			ctp.dialogs.confirm('确定购买?', null, '确定', '取消', onOK, onCancel);
		}

	});

	// 初始化页面
	var initHtml = function() {
		var productObj, prodId, prodName, prodType, status, intRate, amount, restDays, preInt, deadLine, lstUpdate;
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

		mainHtml =
			'			<table border=\'0\'>' +
			'				<tr class="detailRow">' +
			'					<td class="prodesc">产品ID：</td>' +
			'					<td class="prodetail">' + prodId + '</td>' +
			'				</tr>' +
			'				<tr class="detailRow">' +
			'					<td class="prodesc">产品名称：</td>' +
			'					<td class="prodetail">' + prodName + '</td>' +
			'				</tr>' +
			'				<tr class="detailRow">' +
			'					<td class="prodesc">年化利率：</td>' +
			'					<td class="prodetail">' + intRate + '</td>' +
			'				</tr>' +
			'				<tr class="detailRow">' +
			'					<td class="prodesc">总金额：</td>' +
			'					<td class="prodetail">' + amount + '元</td>' +
			'				</tr>' +
			'				<tr class="detailRow">' +
			'					<td class="prodesc">预期利息：</td>' +
			'					<td class="prodetail">' + preInt + '元</td>' +
			'				</tr>' +
			'				<tr class="detailRow">' +
			'					<td class="prodesc">剩余天数：</td>' +
			'					<td class="prodetail">' + restDays + '天</td>' +
			'				</tr>' +
			'				<tr class="detailRow">' +
			'					<td class="prodesc">发布日期：</td>' +
			'					<td class="prodetail">' + lstUpdate + '</td>' +
			'				</tr>' +
			'				<tr class="detailRow">' +
			'					<td class="prodesc">到期日：</td>' +
			'					<td class="prodetail">' + deadLine + '</td>' +
			'				</tr>' +
			'			</table>';

		$('.ui-content').append(mainHtml);
	}
	return {
		initHtml: initHtml
	}
})();