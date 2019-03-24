//序列化json
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if(o[this.name] !== undefined) {
			if(!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

//轮播图
var mySwiper = new Swiper('.swiper-container', {
	//分页器
//	pagination: {
//  el: '.swiper-pagination',
////  type: 'bullets',
//  //type: 'fraction',
//  //type : 'progressbar',
//  //type : 'custom',
//},
	//	loop: true, // 循环模式选项
	speed: 300,
	autoplay: {
		delay: 3000
	},
	observer: true,
	observeParents: true,

})

//判斷是否緩存了時間
if(sessionStorage.getItem('inDate')) {
	$('#startDate').val(sessionStorage.getItem('inDate'));
	$('#endDate').val(sessionStorage.getItem('outDate'));
	var inDiff = sessionStorage.getItem('inDate').replace(/-/g, '/');
	var outDiff = sessionStorage.getItem('outDate').replace(/-/g, '/');
	$('.NumDate').text(DateDiff(inDiff, outDiff));
	sessionStorage.setItem('numDate', $('.NumDate').text());
} else {
	var b = new Date();
	var ye = b.getFullYear();
	var mo = b.getMonth() + 1;
	mo = mo < 10 ? "0" + mo : mo;
	var da = b.getDate();
	da = da < 10 ? "0" + da : da;
	$('#startDate').val(ye + '-' + mo + '-' + da);

	b = new Date(b.getTime() + 24 * 3600 * 1000);
	var ye = b.getFullYear();
	var mo = b.getMonth() + 1;
	mo = mo < 10 ? "0" + mo : mo;
	var da = b.getDate();
	da = da < 10 ? "0" + da : da;
	$('#endDate').val(ye + '-' + mo + '-' + da);

	sessionStorage.setItem("inDate", $('#startDate').val());
	sessionStorage.setItem("outDate", $('#endDate').val());
	$('.NumDate').text(1);
	sessionStorage.setItem('numDate', $('.NumDate').text());
}

//时间选择代码
$('#firstSelect').on('click', function() {
	$('.mask_calendar').show();
	setTimeout("$('.mask_calendar .calendar').css('overflow', 'auto')", 0);
});
$('.mask_calendar').on('click', function(e) {
	if(e.target.className == "mask_calendar") {
		$('.calendar').slideUp(200);
		$('.mask_calendar').fadeOut(200);
	}
});
$('#firstSelect').calendarSwitch({
	selectors: {
		sections: ".calendar"
	},
	index: 12, //展示的月份个数
	animateFunction: "slideToggle", //动画效果
	controlDay: true, //知否控制在daysnumber天之内，这个数值的设置前提是总显示天数大于90天
	daysnumber: "200", //控制天数
	comeColor: "#E42F46", //入住颜色
	outColor: "#E42F46", //离店颜色
	comeoutColor: "#efefef", //入住和离店之间的颜色
	callback: function() { //回调函数
		$('.mask_calendar').fadeOut(200);
		var startDate = $('#startDate').val(); //入住的天数
		var endDate = $('#endDate').val(); //离店的天数
		var NumDate = $('.NumDate').text(); //共多少晚
		if(NumDate == '' || NumDate == NaN) {
			$('.NumDate').text(1);
			NumDate = 1;
		}
		sessionStorage.setItem('inDate', startDate);
		sessionStorage.setItem('outDate', endDate);
		sessionStorage.setItem('numDate', NumDate);
	},
	comfireBtn: '.comfire' //确定按钮的class或者id
});

// 价格和星级点击确定的获取值
var make_para = function(){
	let aStar = '';
	let sStar = '';
	$('.star-select .mui-row span').each(function(){
		if($(this).is('[act]')){
			aStar+=(','+$(this).attr('data-value'));
			sStar+=(','+$(this).html());
		}
	})
	aStar = aStar.slice(1);
	sStar = sStar.slice(1);
	
	//获取滑块值
    let oRange = mui('#rangel')[0].value;
    let n = parseInt($('#rangel').attr('max')/7);
    oRange = parseInt(oRange);
    // console.log(typeof oRange,oRange);
    // console.log(typeof n,n);
    if(0<oRange && oRange<n){
    	oRange = '0-100';
    }else if(n<=oRange && oRange<2*n){
    	oRange = '100-200';
    }else if(2*n<=oRange && oRange<3*n){
    	oRange = '200-300';
    }else if(3*n<=oRange && oRange<4*n){
    	oRange = '300-400';
    }else if(4*n<=oRange && oRange<5*n){
    	oRange = '400-500';
    }else if(5*n<=oRange && oRange<6*n){
    	oRange = '500-600';
    }else if(6*n<=oRange && oRange<7*n){
    	oRange = '600-1000';
    }else if(oRange==$('#rangel').attr('max')){
    	oRange = '1000-0';
    }
    // console.log(oRange)
    let show = '';
    if(sStar){
    	show = sStar+' / '+oRange+'¥';
    }else{
    	show = oRange+'¥';
    }
    $('#qiao_show_price').val(show)


	$('#search_price').val(oRange);
	$('#search_level').val(aStar);
}

var bindClick = function(){

	//点击 出现/隐藏 弹框
	var mask = mui.createMask(function(){
			$('.price-start-popup')[0].style.display="none";
			$('html,body').css('overflow','');
			// document.removeEventListener("touchmove",mo,false);
			return true;   //点击蒙蔽隐藏蒙层 mui
		});
	$('#qiao_show_price').click(function() {
		$('.price-start-popup')[0].style.display="block";
		$('html,body').css('overflow','hidden');
		$('html,body').css('height','100%');
		// document.addEventListener("touchmove",mo,false);//禁止页面滑动 好像并没有影响
		mask.show();
	})
	
	//点击选择星级
	var clear = $('#star_item_clear');
	$('.star-select .mui-row .star-item').each(function(){
		$(this).click(function(){
			if(clear.is('[act]')){
				clear.removeClass('active');
				clear.removeAttr('act');
			}
			if($(this).is('[act]')){
				$(this).removeAttr('act');
				$(this).removeClass('active');
			}else{
				$(this).attr('act','');
				$(this).addClass('active');
			}
		})
	})
	clear.click(function(){
		$('.star-select .mui-row .star-item').each(function(){
			$(this).removeAttr('act');
			$(this).removeClass('active');
		})
		clear.addClass('active');
		clear.attr('act','');
	})

	//点击确定事件
	$('#index_popup_sub').click(function(){
		// var filter = make_para();
		// $('#qiao_show_price').val(filter);
		make_para();
		mask.close();
		
	})

	//点击重置
	$('#index_popup_re').click(function(){
		$('.star-select .mui-row span').each(function(){
			if($(this).is('[act]')){
				$(this).removeClass('active');
				$(this).removeAttr('act');
			}
		})
		$('#rangel').val(0);
	})

}