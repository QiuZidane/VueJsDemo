// 定义productList空间
var productList = (function() {

	// 定期产品模块:
	// 参数:
	// productObj: 产品对象，内有产品的所有信息，用于传递给详情页面
	// prodId:产品ID
	// intRate:利率
	// amount:本金
	// restDays:剩余天数
	// preInt:预期利息
	var TDDeposit = (function() {
		function TDDeposit(prodId, intRate, amount, restDays, preInt) {
			this.contentHtml = '<li>' +
				'					<a href="javascript:productList.openDetailPage(\'TDDetails.html\',\'' + prodId + '\')" prodId="' + prodId + '" >' +
				'						<div class="prodcontent" style="height: 85px">' +
				'							<div id="" style="position: relative; top: 10px; left:1%; float:left">' +
				'								<table border="0">' +
				'									<tr>' +
				'										<td style="font-size: 30px">' + intRate + '</td>' +
				'									</tr>' +
				'									<tr>' +
				'										<td style="font-size: 13px">年化收益率</td>' +
				'									</tr>' +
				'								</table>' +
				'							</div>' +
				'							<div id="" style="position: relative;top: 10px ;left: 13%; float: left;">' +
				'								<table border="0">' +
				'									<tr>' +
				'										<td style="font-size: 13px;padding-right: 2px;">本金:</td>' +
				'										<td style="font-size: 13px;padding-right: 2px;">' + amount + '元</td>' +
				'									</tr>' +
				'									<tr>' +
				'										<td style="font-size: 13px;padding-right: 2px;">剩余天数:</td>' +
				'										<td style="font-size: 13px;padding-right: 2px;">' + restDays + '天</td>' +
				'									</tr>' +
				'									<tr>' +
				'										<td style="font-size: 13px;padding-right: 2px;">预期利息:</td>' +
				'										<td style="font-size: 13px;padding-right: 2px;">' + preInt + '元</td>' +
				'									</tr>' +
				'								</table>' +
				'							</div>' +
				'						</div>' +
				'					</a>' +
				'				</li>	';
		}
		return TDDeposit;
	}());

	var productMap = {};

	// 定期存单数据，从服务器获取
	var TDdata = (function() {
		// 测试数据
		var jsondata = [{
			prodId: 'TD001',
			prodName: '定期存单',
			prodType: '1',
			status: '2',
			intRate: '4.44%',
			amount: '210,000',
			restDays: '360',
			preInt: '3500',
			deadLine: '2017-01-05',
			lstUpdate: '2016-01-01'
		}, {
			prodId: 'TD002',
			prodName: '定期存单',
			prodType: '1',
			status: '2',
			intRate: '6.14%',
			amount: '1,210,000',
			restDays: '260',
			preInt: '13,500',
			deadLine: '2016-11-05',
			lstUpdate: '2016-03-01'
		}, {
			prodId: 'TD003',
			prodName: '定期存单',
			prodType: '1',
			status: '2',
			intRate: '8.18%',
			amount: '1,191,210,000',
			restDays: '21260',
			preInt: '1,191,113,500',
			deadLine: '2029-11-05',
			lstUpdate: '2016-03-07'
		}, {
			prodId: 'TD004',
			prodName: '定期存单',
			prodType: '1',
			status: '2',
			intRate: '6.66%',
			amount: '1,111,191,210,000',
			restDays: '21260',
			preInt: '1,222,191,113,500',
			deadLine: '2029-11-05',
			lstUpdate: '2016-03-07'
		}, {
			prodId: 'TD005',
			prodName: '定期存单',
			prodType: '1',
			status: '2',
			intRate: '7.18%',
			amount: '1,191,210,000',
			restDays: '21260',
			preInt: '1,191,113,500',
			deadLine: '2029-11-05',
			lstUpdate: '2016-03-07'
		}, {
			prodId: 'TD006',
			prodName: '定期存单',
			prodType: '1',
			status: '2',
			intRate: '2.18%',
			amount: '1,191,210,000',
			restDays: '21260',
			preInt: '1,191,113,500',
			deadLine: '2029-11-05',
			lstUpdate: '2016-03-07'
		}, {
			prodId: 'TD007',
			prodName: '定期存单',
			prodType: '1',
			status: '2',
			intRate: '9.18%',
			amount: '1,191,210,000',
			restDays: '21260',
			preInt: '1,191,113,500',
			deadLine: '2029-11-05',
			lstUpdate: '2016-03-07'
		}];
		return {
			jsondata: jsondata
		}
	})();

	// 初始化页面
	var initHtml = function() {
		// 处理定期存单数据
		var prodId, prodName, prodType, status, intRate, amount, restDays, preInt, deadLine, lstUpdate;
		var TDList, TDProduct
		TDList = '';
		for(var index in TDdata.jsondata) {
			//console.log(TDdata.jsondata[index]);
			var productObj = TDdata.jsondata[index];
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

			// new product，
			TDProduct = new TDDeposit(prodId, intRate, amount, restDays, preInt);

			// 加入到map中
			productMap[prodId] = productObj;

			// 拼装html list
			TDList = TDList + TDProduct.contentHtml;

		};
		$('.list-content').html('');
		$('.list-content').append(TDList);
	};

	var openDetailPage = function(page, prodId) {
		
		// 设置缓存,传递给新打开的页面
		localStorage.setItem('productObj', JSON.stringify(productMap[prodId]));	
		startNew(page);
	};

	// 对外公开的方法:
	return {
		TDDeposit: TDDeposit,
		initHtml: initHtml,
		openDetailPage: openDetailPage
	}

})();