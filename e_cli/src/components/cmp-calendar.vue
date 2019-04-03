<template>
  <div>
    <div class="line"></div>
    <div id="checkinout">
      <div id="firstSelect" style="width:100%;">
        <div class="Date_lr" style="float:left;">
          <P>入住</p>
          <input id="startDate" type="text" value="" style="" readonly>
        </div>
        <div class="Date_lr" style="float:right;">
          <p>离店</p>
          <input id="endDate" type="text" value="" style="" readonly>
        </div>
        <span class="span21"><span class="NumDate">1</span>晚</span>
      </div>
    </div>
    <div class="mask_calendar">
      <div class="calendar"></div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import '../common/js/jquery.js'
import '../common/js/date.js'
export default {
  mounted: function () {
    $('#firstSelect').on('click', function () {
      $('.mask_calendar').show()
    });
    $('.mask_calendar').on('click', function (e) {
      if(e.target.className == "mask_calendar"){
        $('.calendar').slideUp(200)
        $('.mask_calendar').fadeOut(200)
      }
    })
    $('#firstSelect').calendarSwitch({
      selectors : {
        sections : ".calendar"
      },
      index :12 ,      //展示的月份个数
      animateFunction : "slideToggle",        //动画效果
      controlDay:true,//知否控制在daysnumber天之内，这个数值的设置前提是总显示天数大于90天
      daysnumber : "200",     //控制天数
      comeColor : "#2EB6A8",       //入住颜色
      outColor : "#2EB6A8",      //离店颜色
      comeoutColor : "#E0F4F2",        //入住和离店之间的颜色
      callback :function(){//回调函数
        $('.mask_calendar').fadeOut(200);
        var startDate = $('#startDate').val();  //入住的天数
        var endDate = $('#endDate').val();      //离店的天数
        var NumDate = $('.NumDate').text();    //共多少晚
        console.log(startDate);
        console.log(endDate);
        console.log(NumDate);
        //下面做ajax请求
        //show_loading();
        /*$.post("demo.php",{startDate:startDate, endDate:endDate, NumDate:NumDate},function(data){
          if(data.result==1){
            //成功
          } else {
            //失败
          }
        });*/
      }  ,   
      comfireBtn:'.comfire'//确定按钮的class或者id
    });
    var b=new Date();
    var ye=b.getFullYear();
    var mo=b.getMonth()+1;
    mo = mo<10?"0"+mo:mo;
    var da=b.getDate();
    da = da<10?"0"+da:da;
    $('#startDate').val(ye+'-'+mo+'-'+da);
    b=new Date(b.getTime()+24*3600*1000);
    var ye=b.getFullYear();
    var mo=b.getMonth()+1;
    mo = mo<10?"0"+mo:mo;
    var da=b.getDate();
    da = da<10?"0"+da:da;
    $('#endDate').val(ye+'-'+mo+'-'+da);
  }
}
</script>

<style>
/*分割线*/
.line{
  width: 87%;
  background-color: #ddd;
  height: .02rem;
  margin: .2rem auto 0;
}
  .calendar{
    display: none;
    position: fixed;
    width: 100%;
    z-index: 999999999;
    top: 0;
    left: 0;
    overflow: auto;
    height: 100%;
    background: #fff;
    font-family: Tahoma,"Lucida Grande",Verdana,"Microsoft YaHei",hei;
  }
  .firstSelect{
    width:100%;
    background:#fff;
    position:fixed;
    top:0;
    left:0;
    height:100%;
    overflow:scroll;
    display:none;
  }
  body td{
    text-align:center;
    height:40px;
    }
  .dateZone{
    width:100%;
    margin:auto;
    background:#ffffff;
    border-bottom:1px solid #ddd;
    border-top:1px solid #ddd;
    color:#666;
    margin-top: 50px;
    position: fixed;
    z-index:9999;
  }
  .dateZone td{
    background:#ffffff;
    height:45px;
    line-height: 45px;
  }
  .tbody {
    margin-top: 97px;
  }
  .tbody td{
    background:#fff;
    color: #555;
  }
  .dateZone td{
    width:14.2%;
    font-size: 14px;
  }
  .dateZone .colo{
    color:#fa967f;
  }
  .dateTable{
    width:99.4%;
    margin:auto;
    border-bottom:1px solid #ddd;
  }
  .tbody .ny1{
    width:100%;
    text-align:center;
    padding:5px 0;
    color: #555;
    background-color: #FAFAFA;
    border-bottom:1px solid #ddd;
    font-size: 15px;    
    line-height: 28px;
  }
  .dateTable td{
    width:14.2%;
    font-size: 14px;
  }
  .dateTable .rz{
    font-size:14px;
  }
  .datTip{
    background:rgba(0,153,255,0.8);
    width:40%;
    position:fixed;
    bottom:2px;
    left:30%;
  }
  .datTip p{
    width:100%;
    margin:auto;
    text-align:center;
    color:#fff;
    padding:3px 0;
    font-size:14px;
    }
  .rz{
    position:relative;
    /* display: none; */
    }
  .hover{
    font-size:14px;
    display:inline-block;
    width:60%;
    background:#FF3;
    /* display: none; */
    color:red;
    text-align:center;
    border-radius:5px;
    }
  td{
    border-radius:2px;
    }
  /* section{
    margin:10px;
    padding:5px;
    } */
  @media only screen and (min-width:400px){
    body td{
      text-align:center;
      height:47px;
    }
  }
  @media only screen and (max-width:320px){
    body{
      font-size:14px;
    }
    .dateTable .rz{
      font-size:12px;
    }
    .datTip p{
      font-size:12px;
    }
    .hover{
      font-size:12px;
    }
    body td{
      text-align:center;
      height:35px;
    }
  }


  /* .mask_calendar {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.4);
    display: none;
  }
  .calendar {
    height: 400px;
    position: fixed;
    bottom: 0;
    left: 0;
  } */
  .Date_lr{width:50%;text-align:center;}
  .span21{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-41%);
    font-size: .23rem;
    color: #666;
    /* border: 1px solid #e5e5e5;
    padding:2px 8px; */
    line-height: 20px;
    border-radius: .2rem;
    background-color: #fff;
  }
  #checkinout{
    height: 50px;
    line-height: 50px;
    position: relative;
    margin: .15rem 0 .3rem;
    padding: 2px 0;
    display: -webkit-box;
    display: flex;
    /* border: 1px solid #e5e5e5; */
    border-radius: .02rem;
    background-color: #fff;
  }
  #firstSelect p{line-height:25px;color: #999;font-size: .28rem;}
  #startDate{border:0;position: absolute;left: 0;margin: .12rem auto 0;width: 50%;font-size: .29rem;color: #555; font-weight: bold; text-align: center;}
  #endDate{border:0;position: absolute;right: 0;margin: .12rem auto 0;width:50%;font-size: .29rem;color: #555; font-weight: bold; text-align: center;}
  .mask_calendar {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.4);
    display: none;
    z-index: 9999;
  }
  .calendar {
    height:100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  @keyframes slideInDown {
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInDown {
    animation-name: slideInDown;
  }
</style>