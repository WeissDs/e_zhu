function getRad(d) {
	return d * (Math.PI) / 180.0;
}
//获取距离方法
function getDistance(lat1, lng1, lat2, lng2) {
	lat1 = lat1 * 1;
	lng1 = lng1 * 1;
	lat2 = lat2 * 1;
	lng2 = lng2 * 1;
	var f = getRad((lat1 + lat2) / 2);
	var g = getRad((lat1 - lat2) / 2);
	var l = getRad((lng1 - lng2) / 2);

	var sf = Math.sin(f);
	var sg = Math.sin(g);
	var sl = Math.sin(l);

	var s, c, w, r, d, h1, h2;
	var fl = 1 / 298.257;

	sg = sg * sg;
	sl = sl * sl;
	sf = sf * sf;

	s = sg * (1 - sl) + (1 - sf) * sl;
	c = (1 - sg) * (1 - sl) + sf * sl;

	w = Math.atan(Math.sqrt(s / c));
	r = Math.sqrt(s * c) / w;
	d = 2 * w * 6378137.0;
	h1 = (3 * r - 1) / 2 / c;
	h2 = (3 * r + 1) / 2 / s;

	return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
}

//通过url获取参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
	var r = window.location.search.substr(1).match(reg); //匹配目标参数  
	if(r != null) {
		return unescape(r[2]); //返回参数值 
	} else {
		return null;
	}
}

//判断查询条件中是否携带有价格参数并且价格不为空且不为空
var query_price = function(data, name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
	var r = data.match(reg); //匹配目标参数  
	if(r != null) {
		return unescape(r[2]); //返回参数值 
	} else {
		return null;
	}
};

//获取距离方法
function getFriendDistance(lat1, lng1, lat2, lng2) {
	var dis = 0;

	dis = getDistance(lat1, lng1, lat2, lng2);
	if(dis < 10000) {
		return '约' + (dis >> 0) + 'm';
	} else {
		return '约' + ((dis / 1000) >> 0) + 'km';
	}
}

//显示加载完成提示
function callback($info, $state) {
	if($state) {
		mui.toast($info);
	} else {
		console.log("请求完成");
	}
}

//转义html
function unescapeHTML(a) {
	a = "" + a;
	return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}

////////////////////////////////////////////////////////////////////////////////////////////
//计算两个日期天数差的函数，通用
////////////////////////////////////////////////////////////////////////////////////////////
function DateDiff(sDate1, sDate2) { //sDate1和sDate2是yyyy-MM-dd格式

	var aDate, oDate1, oDate2, iDays;
	aDate = sDate1.split("/");
	oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]); //转换为yyyy-MM-dd格式
	aDate = sDate2.split("/");
	oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);
	iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数

	return iDays; //返回相差天数
}

////////////////////////////////////////////////////////////////////////////////////////////
//根据指定的一个日期和相差的天数，获取另外一个日期
//dateParameter为指定已经存在的日期yyyy-MM-dd  num为相差天数为整型 
////////////////////////////////////////////////////////////////////////////////////////////
function addByTransDate(dateParameter, num) {

	var translateDate = "",
		dateString = "",
		monthString = "",
		dayString = "";
	translateDate = dateParameter.replace("-", "/").replace("-", "/");;

	var newDate = new Date(translateDate);
	newDate = newDate.valueOf();
	newDate = newDate + num * 24 * 60 * 60 * 1000; //备注 如果是往前计算日期则为减号 否则为加号
	newDate = new Date(newDate);

	//如果月份长度少于2，则前加 0 补位   
	if((newDate.getMonth() + 1).toString().length == 1) {
		monthString = 0 + "" + (newDate.getMonth() + 1).toString();
	} else {
		monthString = (newDate.getMonth() + 1).toString();
	}

	//如果天数长度少于2，则前加 0 补位   
	if(newDate.getDate().toString().length == 1) {

		dayString = 0 + "" + newDate.getDate().toString();
	} else {

		dayString = newDate.getDate().toString();
	}

	dateString = newDate.getFullYear() + "-" + monthString + "-" + dayString;
	return dateString;

}

/*用户名判断*/
function userName(inputid, spanid) {
	$(inputid).blur(function() {
		if($.trim($(inputid).val()).length == 0) {
			$(spanid).html("× 名称没有输入");
		} else {
			if(isChinaName($.trim($(inputid).val())) == false) {
				$(spanid).html("× 名称不合法");
			}
		}
	});
	$(inputid).focus(function() {
		$(spanid).html("");
	});

};

//真实姓名
function isChinaName(name) {
	var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
	return pattern.test(name);
}

// 验证手机号
function isPhoneNo(phone) {
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	return myreg.test(phone);
}

/*手机号判断*/
function userTel(inputid, spanid) {
	$(inputid).blur(function() {
		if($.trim($(inputid).val()).length == 0) {
			$(spanid).html("× 手机号没有输入");
		} else {
			if(isPhoneNo($.trim($(inputid).val())) == false) {
				$(spanid).html("× 手机号码不正确");
			}
		}
		$(inputid).focus(function() {
			$(spanid).html("");
		});
	});
};

//底部菜单栏跳转
$("#qiao_index").on('tap', function() {
	mui.openWindow({
		url: "index.html",
		createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			duration: 100 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
		},
		waiting: {
			autoShow: true, //自动显示等待框，默认为true
			title: '正在加载...', //等待对话框上显示的提示内容
		}
	});
})
$("#qiao_select").on('tap', function() {
	mui.openWindow({
		url: "select.html",
		createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			duration: 100 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
		},
		waiting: {
			autoShow: true, //自动显示等待框，默认为true
			title: '正在加载...', //等待对话框上显示的提示内容
		}
	});

})
$("#qiao_me").on('tap', function() {
	mui.openWindow({
		url: "me.html",
		createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			duration: 100 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
		},
		waiting: {
			autoShow: true, //自动显示等待框，默认为true
			title: '正在加载...', //等待对话框上显示的提示内容
		}
	});
})