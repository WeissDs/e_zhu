/**
 * Created by Administrator on 2017/5/7.
 */
$(function () {
    //动态插入城市
	var shop_ajax_url = "/Home/Index/searchCity";
    $('#areaname').click(function(){
        if($('#home_city .letter ul').length) {
            $('#home_city').show();
        } else {
            $.ajax({
                type: 'POST',
                url: shop_ajax_url,
                dataType: "json",
                async: false,
                data:{
                    bank_id: bank_id
                },
                success: function(data){
              
                    var letters = [];
                    var lettersHtml = '<ul>';
                    var citiesHtml = '<div class="city"><div class="search-city"><input /><button>搜索</button></div>';
                
                if(data.data.hot_cities.length) {
                        citiesHtml += '<div id="hot-city" class="city-list">'
                            + '<span class="city-letter">热门城市</span>';
                    }
                
                    for(var city_index in data.data.hot_cities) {

                        var city = data.data.hot_cities[city_index];
                        citiesHtml += '<button data-area-id="' + city.area_id + '">' + city.area_name +'</button>'
                    }
                    if(data.data.hot_cities.length) {
                        citiesHtml += '</div>';
                    }
   
                    
                    for(var letter in data.data.cities_on) {
                        var citiesByLetter = data.data.cities_on[letter];
                        lettersHtml += '<li><a href="#letter_' +  letter + '">' + letter + '</a></li>';

                        citiesHtml += '<div class="city-list" id="letter_' + letter
                            +  '"><span class="city-letter">' + letter + '</span>';
                        for(var city_index in citiesByLetter) {
                            var city = citiesByLetter[city_index];
                            citiesHtml += '<p data-area-id="' + city.area_id + '">' + city.area_name +'</p>'
                        }
                        citiesHtml += '</div>';
                    }
                    lettersHtml += '</ul>';
                    citiesHtml += '</div>';
                    $('#home_city .letter').html(lettersHtml);
                    $('#home_city .container').html(citiesHtml);
                    $('#home_city').show();
                }
            });
        }
    });

    //加载城市事件
    $('.container').show();
    //选择城市 start
    $('body').on('click', '.city-list p,.city-list button', function () {
        $('#home_city').hide();
        $('#areaname').val($(this).html());
        var areaId = $(this).data('areaId')
        $('#areaid').val(areaId);
        sessionStorage.setItem("userCityCode", areaId);
        sessionStorage.setItem("userCity", $(this).text());	
		sessionStorage.setItem('area_name', $(this).text()); //乔本亮修改
		sessionStorage.setItem("area_id",areaId);
        showShopList(); //dai修改
		
    });
    $('body').on('click', '.search-city', function () {
        var searchString = $(this).parent().find('input').val();
        $('.city-list p').show();
        $('.city-list').show();
        if(searchString.length > 0) {
            $('.city-list p:not(:contains(' + searchString + '))').hide();
            $('.city-list').filter(':not(:has(p:visible))').hide();
        }
    });
    //点击索引查询城市
//     $('body').on('click', '.letter a', function () {
//         var s = $(this).html();
//         $(window).scrollTop($('#' + s + '1').offset().top);
//         $("#showLetter span").html(s);
//         $("#showLetter").show().delay(500).hide(0);
//     });
     //中间的标记显示
    //  $('body').on('onMouse', '.showLetter span', function () {
    //     $("#showLetter").show().delay(500).hide(0);
    // });

})