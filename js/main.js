// JavaScript Document
$(function(){
	// 顶部菜单弹出效果
	$('.header_list .myTb').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		// $(this).find('.tc').show().closest().siblings().find('.tc').hide();
		$(this).siblings().find('.tc').hide();
		$(this).find('.tc').show();
	})
	$('.header_list .myTb').mouseout(function(){
		$(this).removeClass('active');
		$(this).find('.tc').hide();
	})
	
	$('.header_list .mySave').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).siblings().find('.tc').hide();
		$(this).find('.tc').show();
	})
	$('.header_list .mySave').mouseout(function(){
		$(this).removeClass('active');
		$(this).find('.tc').hide();
	})
	$('.header_list .support').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).siblings().find('.tc').hide();
		$(this).find('.tc').show();
	})
	$('.header_list .support').mouseout(function(){
		$(this).removeClass('active');
		$(this).find('.tc').hide();
	})
	$('.header_list .webNav').mouseover(function(){

		$(this).addClass('active').siblings().removeClass('active');
		$(this).siblings().find('.tc').hide();
		$(this).find('.tc').show();
	})
	$('.header_list .webNav').mouseout(function(){
		$(this).removeClass('active');
		$(this).find('.tc').hide();
	})
	//搜索框效果
	$('.search_text').focus(function(){
		$(this).css('color','#ccc');
	})
	$('.search_text').blur(function(){
		$(this).css('color','#666');
	})
	$(document).keyup(function(e){
		if(e.keyCode>=33 && e.keyCode<127){
			$('.search_text').val('');
		}else{
			$('.search_text').val('请输入关键字');
		}
	})

	$('#banner img').css('width',$(document).width()+'px');
	//图片轮播效果
	var iNow = 0;
	var timer = setInterval(autoPlay,3000);
	function autoPlay(){
		iNow++;
		iNow%=6;
		$('#banner img').eq(iNow).show().siblings('img').hide();
		$('.page_banner li').eq(iNow).addClass('active').siblings('li').removeClass('active');
	}
	$('.page_banner li').hover(function(){
		clearInterval(timer);
		iNow = $(this).index();
		$('#banner img').eq(iNow).show().siblings('img').hide();
		$(this).addClass('active').siblings('li').removeClass('active');
	},function(){
		timer = setInterval(autoPlay,3000);
	})

	$('#banner img').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,3000);
	})
	//列表框效果移入移出
	$('.screen_list li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).index()==15){
			$(this).css('border-bottom','1px solid #696969')
		}else{
			$('.last_li').css('border-bottom','none')
		}
		$('.shopClass_show').show().find('.shop_item').hide().eq($(this).index()).show();
	})
	$('.shopClass_show').mouseleave(function(){
		$(this).hide();
		$('.screen_list li').removeClass('active');
	})
	//picRec图片移入移出效果
	$('.pic_img img').hover(function(){
		$(this).css('opacity',0.6);
		$(this).css('filter','alpha(opacity=60)');
	},function(){
		$(this).css('opacity',1);
		$(this).css('filter','alpha(opacity=100)');
	})
	//品牌换一批效果
	var clickTimes = 1;
	var hoverTimes = 1;
	var lineCount = 10;
	var btnRefresh = document.querySelector('.btnRefresh');
	var iconRefresh = document.querySelector('.iconRefresh');
	var img3DList = document.querySelectorAll('.img_3d');
	var len = img3DList.length;
	
	btnRefresh.onmouseover = function(){
		btnRefresh.className = 'btnRefresh active';
		iconRefresh.style.transition = ".3s linear";
		iconRefresh.style.transform = "rotate("+360*hoverTimes+"deg)";
		hoverTimes++;
	}
	btnRefresh.onmouseout = function(){
		btnRefresh.className = 'btnRefresh';
	}
	btnRefresh.onclick = function(){
		iconRefresh.style.transition = ".3s linear";
		iconRefresh.style.transform = "rotate("+360*clickTimes+"deg)";
		for(var i=0; i<len; i++){
			var colNum = parseInt(i/lineCount);
			var rowNum = i%lineCount;
			var delayTime = (colNum+rowNum)*100;
			img3DList[i].style.transition = ".3s "+delayTime+"ms linear";
			img3DList[i].style.transform = "rotateY("+180*clickTimes+"deg)";
		}
		clickTimes++;
	}
	//tab切换区
	var tabNow = 0;
	var timer_tab = setInterval(autoRun,3000);
	autoRun();
	function autoRun(){
		tabNow++;
		tabNow%=2;
		$('.marketM_tab li').eq(tabNow).addClass('active').siblings('li').removeClass('active');
		$('.marketImg_01').eq(tabNow).show().siblings('.marketImg_01').hide();

	}
	$('.marketM_tab li').hover(function(){
		clearInterval(timer_tab);
		$(this).addClass('active').siblings().removeClass('active');
		
		$('.marketImg_01').eq($(this).index()).show().siblings('.marketImg_01').hide();
	},function(){
		timer_tab = setInterval(autoRun,3000);
	})
	//图片移入效果
	$('.img_box').hover(function(){
		$(this).css('border','1px solid #ff0036');
	},function(){
		$(this).css('border','1px solid #fff');
	})
	//楼层效果区
	$(window).scroll(function(){
		var ling = $(document).scrollTop();
		document.title = ling;
		if(ling>500){
			$('.floor').fadeIn();
		}else{
			$('.floor').fadeOut();
		}
		if(ling>=1400 && ling<2100){
			$('.floor li').eq(1).css('background','#64C333').siblings('li').css('background','#626262').eq(0).css('background','#ff0036');
			$('.floor li').eq(9).css('background','#acacac');
		}else if(ling>=2100 && ling<2900){
			$('.floor li').eq(2).css('background','#ff0036').siblings('li').css('background','#626262').eq(0).css('background','#ff0036');
			$('.floor li').eq(9).css('background','#acacac');
		}else if(ling>=2900 && ling<3600){
			$('.floor li').eq(3).css('background','#EA5F8D').siblings('li').css('background','#626262').eq(0).css('background','#ff0036');
			$('.floor li').eq(9).css('background','#acacac');
		}else if(ling>=3600 && ling<4400){
			$('.floor li').eq(4).css('background','#0AA6E8').siblings('li').css('background','#626262').eq(0).css('background','#ff0036');
			$('.floor li').eq(9).css('background','#acacac');
		}else if(ling>=4400 && ling<5100){
			$('.floor li').eq(5).css('background','#64C333').siblings('li').css('background','#626262').eq(0).css('background','#ff0036');
			$('.floor li').eq(9).css('background','#acacac');
		}else if(ling>=5100 && ling<5800){
			$('.floor li').eq(6).css('background','#FCBE53').siblings('li').css('background','#626262').eq(0).css('background','#ff0036');
			$('.floor li').eq(9).css('background','#acacac');
		}else if(ling>=5800 && ling<6500){
			$('.floor li').eq(7).css('background','#19C8A9').siblings('li').css('background','#626262').eq(0).css('background','#ff0036');
			$('.floor li').eq(9).css('background','#acacac');
		}else if(ling>=6500){
			$('.floor li').eq(8).css('background','#ff0036').siblings('li').css('background','#626262').eq(0).css('background','#ff0036');
			$('.floor li').eq(9).css('background','#acacac');
		}
	})
	var arr = [1400,2100,2900,3600,4400,5100,5800,6500,0]
	$('.floor li a').click(function(){
		$(document).scrollTop(arr[$(this).parent().index()-1]);
	})
	//右侧side
	$('.right_side').css('height',$(window).height());
	
})

$(window).resize(function(){
	$('.right_side').css('height',$(this).height());
})