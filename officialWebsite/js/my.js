$(document).ready(function() {

	hotCase();
	function hotCase(){
		var $key = 0;
		var time = null;
		var leng = $('.hotcase .details_box_rihgt_img').length;
		time = setInterval(caseAuto,4000);

		function caseAuto(){
			$key ++;
			if ($key > leng - 1)
			{
				$key = 0;
			}
			$('.hotcase .details_box_rihgt_img').eq($key).stop().fadeIn().siblings().stop().fadeOut();
		}

		$('.hotcase').hover(function() {
			clearInterval(time);
			time = null;
		}, function() {
			time = setInterval(caseAuto,3000);
		});
	}
	function formList(){
		var $close = $('.close');
		var $formList = $('.formList');
		
		$('.menu_btn').mousedown(function(event) {
			if ($('body').width() > 1006)
			{				
				$formList.stop().animate({'top': 0, 'opacity': 1}, 500);
				$close.click(function(){
					$formList.stop().animate({'top': -120 + '%', 'opacity': 0}, 500);
				});
			}
			if ($(window).width() < 1023)
			{
				$('.nav').toggleClass('nav_am');
				$('.navMask').toggle();
				if (!$('.menu_btn').hasClass('wapBtnAn'))
				{
					$('.menu_btn img').attr({"src":"images/menu_btn1.png"});
				}
				else{
					$('.menu_btn img').attr({"src":"images/menu_btn.png"});
				}
			}
			$(this).toggleClass('wapBtnAn');
		});

		$(':input').focus(function() {
			if ($(this).val() == this.defaultValue && $(this).val() != '提交需求')
			{
				$(this).val('');
			}
		}).blur(function() {
			if ($(this).val() == '')
			{
				$(this).val(this.defaultValue);
			}
		});
	}
	formList();

	function chushi(){
		//获取IMG
		var ImgSrc =  $('.banner .content img').attr('src');
	
		var $liL = $('.content_box a').length;
		for(var i= 0; i< $liL; i++) 
		    {
				$('.banner .content_box a:eq('+ i +') .content').css('background-image', 'url('+ $('.bannerImg').attr('src') +')').children('img').remove();
		    }

		$('.banner .content_box a').eq(0).find('.text1').css('opacity','1');
		$('.banner .content_box a').eq(0).find('.text2').css('opacity','1');
		$('.banner .content_box a').eq(0).find('.text3').css('opacity','1');
		$('.case_page .case_page_right .case_color span').eq(0).css({'background': '#E60012', 'color': '#E60012'});
		$('.case_page .case_page_right .case_color span').eq(1).css({'background': '#FE5967', 'color': '#FE5967'});
		$('.case_page .case_page_right .case_color span').eq(2).css({'background': '#535353', 'color': '#535353'});

		$('.shenzhou_culture_box .cult_left .cult_nav ul li').eq(1).css('background-image','url(images/culture_icon2.png)');
		$('.shenzhou_culture_box .cult_left .cult_nav ul li').eq(2).css('background-image','url(images/culture_icon3.png)');
		$('.shenzhou_culture_box .cult_left .cult_nav ul li').eq(3).css('background-image','url(images/culture_icon4.png)');
		$('.shenzhou_culture_box .cult_left .cult_nav ul li').eq(4).css('background-image','url(images/culture_icon5.png)');
		// 媒介页面文字字数控制
		if ($(window).width() < 1024)
		{
			// $(".child_info .info").wordLimit(35);

			$(".service_box li").css({ "min-height": $(window).width() / 1920 * 800 })
			$(window).resize(function(){
				$(".service_box li").css({ "min-height": $(window).width() / 1920 * 800 })
			});
			
		}
		if ($(window).width() > 1030){
			service();
		}

		//鼠标经过微信图标
		$('.weixin').hover(function() {
			$(this).children('.footer_box_right_child').stop().fadeIn();
		}, function() {
			$(this).children('.footer_box_right_child').stop().fadeOut();
		});

		// 联系页面
		$('.contactIcon_box ul li').eq(1).click(function(){
			$('body').animate({'scrollTop': $('.contactMap').offset().top - $('.header').height()}, 500);
		});

		// 合作伙伴页面
		$('.recuruit_btn').click(function(){
			$(this).toggleClass('recuruit_btnC').siblings('.recruit_box_detail').slideToggle(500);
		});

		$('.wrap .header .navMask').click(function(){
			$('.nav').removeClass('nav_am');
			$('.wrap .header .menu_btn').removeClass('wapBtnAn');
			$(this).toggle();
			$('.menu_btn img').attr({"src":"images/menu_btn.png"});
		});

	}
	chushi();
	//banner
	function banner(){
		var timer = 0;
		var bannerNum = 0;
		var $leftBtn = $('.banner_leftBtn');
		var $rightBtn = $('.banner_rightBtn');
		var $banner_Btn = $('.banner_btn');
		var $a = $('.banner .content_box a');
		var $aL = $('.banner .content_box a').length;

		for(var i=0; i<$aL; i++) 
		    {
				$('.banner .dot').append('<li></li>');
				$('.banner .dot li').eq(0).addClass('current');
		    }

		function bannerTab(indexs){
			indexs = indexs % $a.length;
			$('.banner .content_box a:not(indexs)').find('.text1').stop(true,true).delay(1300).animate({'opacity': 0}, 500);
			$('.banner .content_box a:not(indexs)').find('.text2').stop(true,true).delay(1500).animate({'opacity': 0}, 500);
			$('.banner .content_box a:not(indexs)').find('.text3').stop(true,true).delay(1700).animate({'opacity': 0}, 500);

			$a.eq(indexs).stop(true,true).fadeIn(1000,function(){
				$(this).siblings().find('.text1,.text2,.text3').css('opacity', 0);
			}).siblings('a').stop(true,true).fadeOut(1000);
			
			$a.eq(indexs).find('.text1').stop(true,true).delay(200).animate({'opacity': 1}, 500);
			$a.eq(indexs).find('.text2').stop(true,true).delay(500).animate({'opacity': 1}, 500);
			$a.eq(indexs).find('.text3').stop(true,true).delay(700).animate({'opacity': 1}, 500);

			$('.banner .dot li').eq(indexs).addClass('current').siblings().removeClass('current');
		}
		$('.banner').hover(function() {
			clearInterval(timer);
			timer =null;
		}, function() {
			clearInterval(timer);
			timer = setInterval(function(){
				bannerNum ++;
				bannerTab(bannerNum);
			},5000);
		});
		
		timer = setInterval(function(){
			bannerNum ++;
			bannerTab(bannerNum);
		},5000);
		
		$rightBtn.click(function(){
			bannerNum ++;
			bannerTab(bannerNum);
		});

		$leftBtn.click(function(){
			bannerNum --;
			bannerTab(bannerNum);
		});

		$('.banner .dot li').click(function(){
			var C = $(this).index();
			bannerNum = C;
			bannerTab(bannerNum);
		});
	}		
	banner();

	//案例经过效果
	$('.child').hover(function() {
		$(this).children('.childHide').stop().fadeIn(500);
	}, function() {
		$(this).children('.childHide').stop().fadeOut(0);
	});

	//我们的客户
	function customer(){
		var $customerC = $('.customer_content');
		var $content = $customerC.find('.content');
		var $rightBtn = $('.customer_conBox .customer_rightBtn');
		var $leftBtn = $('.customer_conBox .customer_leftBtn');
		var customer = 0;

		$customerC.children('.contentss').html($customerC.children('.contents').html());
		$customerC.css('width',  $content.width() * ($content.length) * 2);

		$rightBtn.click(function(){
			customer ++;
			if (customer >= $content.length + 1)
			{
				customer = 1;
				$customerC.css('left', 0);
			}
			$customerC.stop().animate({'left': -customer * $content.width()}, 500);
		}); 

		$leftBtn.click(function(){
			customer --;
			if (customer < 0)
			{
				customer = $content.length - 1;
				$customerC.css('left', -$customerC.children('.contentss').width());
			}
			$customerC.stop().animate({'left': -customer * $content.width()}, 500);
		});
	}
	customer();

	function work(){
		var $key = 0;
		var $diamond = 0;
		
		$(".work_pic_box ul li:first").clone().appendTo(".work_pic_box ul");
		var liW = $('.work_pic ul li').width();
		var liL = $('.work_pic ul li').length;

		for (var i = 0; i < liL - 1; i++)
		{
			$('.work_pic ol').append('<li></li>');
			$('.work_pic ol li').eq(0).addClass('current');
		}
		var $olL = $('.work_pic ol li');
		$('.shenzhou_work_box .work_pic ul').css('width', liW * liL);
		$olL.click(function() {
			$key = $(this).index();
			$diamond = $(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$('.shenzhou_work_box .work_pic ul').stop().animate({"left":-$key*liW},500);
		});
		var timer = setInterval(autoplay, 3000);
		function autoplay(){
			$key ++;
			if($key > liL -1)
			{
				$key = 1;
				$(".work_pic_box ul").css("left",0);
			}
			$(".work_pic_box ul").stop().animate({"left":-$key * liW},500);
			$diamond ++;
			if($diamond > $olL.length -1)
			{
				$diamond = 0;
			}
			$olL.eq($diamond).addClass('current').siblings().removeClass('current');
		}
		$(".work_pic").hover(function() {
			clearInterval(timer);
			timer = null;
		}, function() {
			clearInterval(timer);
			timer = setInterval(autoplay, 3000);
		});

		$('.work_rightBtn').click(function(){
			autoplay();
		});

		$('.work_leftBtn').click(function(){
			$key --;
			if($key < 0)
			{
				$key = liL - 1;
				$(".work_pic_box ul").css("left", -($key * liW));
			}
			$(".work_pic_box ul").stop().animate({"left":-$key * liW},500);
			$diamond --;
			if($diamond < 0)
			{
				$diamond = liL -1;
			}
			$olL.eq($diamond).addClass('current').siblings().removeClass('current');
		});
	}
	work();

	// 服务页面
	function other(){
		var $key = 0;
		$(".other_copy_box ul li:first").clone().appendTo(".other_copy_box ul");
		var liW = $('.other_copy_box ul li').width();
		var liL = $('.other_copy_box ul li').length;

		$('.other_copy_box  ul').css('width', liW * liL);

		$('.other_copy .right').click(function() {
			$key ++;
			if($key > liL -1)
			{
				$key = 1;
				$(".other_copy_box ul").css("left",0);
			}
			$(".other_copy_box ul").stop().animate({"left":-$key * liW},500);
		});
		$('.other_copy .left').click(function(){
			$key --;
			if($key < 0)
			{
				$key = liL - 1;
			}
			$(".other_copy_box ul").stop().animate({"left":-$key * liW},500);
		});
		var vtel = /^\w{0}$|^\d{3}-\d{8}$|^\d{4}-\d{8}$|^\d{4}-\d{7}$|^[1][34578]\d{9}$/;
		$('#callBtn').click(function () {
		    var __tel = $('#telInput').val();
		    if (!vtel.test(__tel)) {
		        Tip('电话号码格式错误！');
		    } else {
		        $.post("/ajax/tel.ashx", { tel: __tel }, function (d) {
		            if (d == 'ok') {
		                $('.hr_index_light').hide();
		                $('.hr_mask').hide();
		                Tip('请稍等，我们即刻联系您！');
		            } else { Tip(d); }
		        });
		    }
		});
		// 键盘上下按钮
	};
	other();
	caseFw();
	function caseFw(){
		var $key = 0;
		$(".related_logo ul li:first").clone().appendTo(".related_logo ul");
		var liW = $('.related_logo ul li').width();
		var liL = $('.related_logo ul li').length;

		$('.related_logo ul').css('width', liW * liL);

		$('.related .rightBtn').click(function() {
			$key ++;
			if($key > liL -1)
			{
				$key = 1;
				$(".related_logo ul").css("left",0);
			}
			$(".related_logo ul").stop().animate({"left":-$key * liW},500);
		});
		$('.related .leftBtn').click(function(){
			
			if($key <= 0)
			{
				$key = liL - 1;
				$(".related_logo ul").css('left',-(liL -1) * liW + 'px');
			}
			$key --;
			$(".related_logo ul").stop().animate({"left":-$key * liW},500);
		});

	}

	// 优势页面
	function superiority(){
		$('.adBox .mian .mian_Bot5 .mian_BotBox5_bottom img').eq(0).css('display', 'block');
		$('.flow').click(function(){
			$(this).addClass('current').siblings().removeClass('current');
			$('.mian_BotBox5_bottom img').eq($(this).index()).stop().show().siblings().hide();
		});

		$('.mian_top ul li').click(function(){
			var padding = parseInt($('.mian_Bot').css('padding-top'),$('.mian_Bot').css('padding-bottom'));
			//$('body').animate({'scrollTop': (($('.mian_Bot').eq($(this).index()).offset().top - ($('.mian_Bot').eq($(this).index()) - $('.header').height())) )}, 500);
			$('body').animate({'scrollTop': $('.mian_Bot').eq($(this).index()).offset().top - $('header').height() - padding});
		});
	}
	superiority();

	// 案例页面
	function caseSelection(){
		var $caseBtn = $('.case .case_box .case_box_Mtop div');
		var $caseText = $caseBtn.find('span');
		var $caseChild = $caseBtn.find('ul li');
		$caseBtn.click(function(){
			$caseBtn.find('ul').slideToggle(500);
			
		});

		$caseChild.click(function(){
			$caseText.html($(this).text());
			$caseChild.parents($caseBtn).addClass('current').siblings().removeClass('current');

			var leng = $('.case_box_bottom .case_contents');
			for(var i= 0; i<leng.length; i++) 
		    {
		    	var scrTop = leng.eq(i).offset().top - 147;
				if ($(this).children('a').text() == leng.eq(i).children('h2').text())
				{
					$('body').stop().animate({scrollTop : scrTop},800);
				}
		    }
		});


		
	}
	caseSelection();

	function contact(){

		$('.contactIcon_box ul li').hover(function() {
			var C = $(this).index() + 1;
			if (C > 1 && C < 6)
			{
				$(this).find('img').attr({"src":"images/contactIcon"+ (C * 10 + C) +".png"});
			}
		}, function() {
			var C = $(this).index() + 1;
			$(this).find('img').attr({"src":"images/contactIcon"+ (C) +".png"});
		});
	}
	contact();

	// 企业文化

	$('.cult_nav li').click(function(){
		var _C = $(this).index();
		$('.cult_right').eq(_C).show().siblings('.cult_right').hide();
	});

	/*fixed*/
	var floatBool=false;
	$(window).scroll(function(){
		if($(this).scrollTop()>=200){
			if(!floatBool){
				$(".fixed").stop(false,true).fadeIn(500);
				floatBool=true;
			}
		}else{
			if(floatBool){
				$(".fixed").stop(false,true).fadeOut(500);
				floatBool=false;
			}
		}
	});
	$(".fixedTop").mouseover(function(){
		$(this).css("background","#666");
		var imageSrc=$(this).find(".fixedTopPointer").attr("src");
		if(imageSrc.indexOf("On.png")>0){}else{
			imageSrc=imageSrc.replace(".png","On.png");
		}
		$(this).find(".fixedTopPointer").attr("src",imageSrc);
	}).mouseleave(function(){
		$(this).css("background","#cbcbcb");
		var imageSrc=$(this).find(".fixedTopPointer").attr("src");
		if(imageSrc.indexOf("On.png")>0){
			imageSrc=imageSrc.replace("On.png",".png");
		}else{}
		$(this).find(".fixedTopPointer").attr("src",imageSrc);
	}).click(function(){
		$('body,html').animate({scrollTop: 0},500);
	});
	$(".fixedCode").mouseover(function(){
		$(".fixedCodeInfo").stop(false,true).fadeIn(500);
	}).mouseleave(function(){
		$(".fixedCodeInfo").stop(false,true).fadeOut(500);
	});
	shouye.init();

	function service(){
		var $key = 0;
		var timer = null;
		$(document).mousewheel(function(event,delta) {
			clearTimeout(timer); // 开启先清除定时器
			timer = setTimeout(scrollScreen, 500); //开启定时器
			function scrollScreen(){
				if (delta < 0)
				{
					$key ++;

					if ($key == 5)
					{
						$('.service_fc,.contrFooter2').attr({'class': 'contrFooter'});
					}
					if ($key > 5)
					{
						$key = 5;
					}
				}
				if (delta > 0)
				{
					$key --;
					if ($key < 0)
					{
						$key = 0;
					}
					$('.contrFooter').attr({'class': 'contrFooter2'});
				}
				$('.servicePage .service_box ul').attr({"class":"down"+ $key +""});
			}
		});
		$(document).keydown(function(event) {
			if (event.keyCode == 40)
			{
				$key ++;
				if ($key == 5)
				{
					$('.service_fc,.contrFooter2').attr({'class': 'contrFooter'});
				}
				if ($key > 5)
				{
					$key = 5;
				}
				$('.servicePage .service_box ul').attr({"class":"down"+ $key +""});
			}
			else if(event.keyCode == 38)
			{
				$key --;
				if ($key < 0)
				{
					$key = 0;
				}
				$('.contrFooter').attr({'class': 'contrFooter2'});
				$('.servicePage .service_box ul').attr({"class":"down"+ $key +""});
			}
		});
	}

	$('[name="btn"]').click(function () {
	    var _d = { un: $('[name="un"]').val(), com: $('[name="com"]').val(), tel: $('[name="tel"]').val(), sub: $('[name="sub"]').val(), con: $('[name="con"]').val() };
	    if (_d.un == "您的姓名") { Tip("您的姓名不为空！"); return; }
	    if (_d.com == "公司名称") { Tip("公司名称不为空！"); return; }
	    if (_d.tel == "您的电话") { Tip("您的电话不为空！"); return; }
	    if (_d.sub == "项目主题") { Tip("项目主题不为空！"); return; }
	    if (_d.con == "您的项目基本信息") { Tip("您的项目基本信息不为空！"); return; }
	    $('[name="un"]').val("您的姓名"); $('[name="com"]').val("公司名称"); $('[name="tel"]').val("您的电话"); $('[name="sub"]').val("项目主题"); $('[name="con"]').val("您的项目基本信息");
	    $.post("/ajax/subdemand.ashx", _d, function (data) {
	        Tip(data);
	    });
	});


	// 案例跳转
	$('.case_box_top ul li').click(function(){
		var leng = $('.case_box_bottom .case_contents');
		for(var i= 0; i<leng.length; i++) 
	    {
	    	var scrTop = leng.eq(i).offset().top - 147;
			if ($(this).children('a').text() == leng.eq(i).children('h2').text())
			{
				$('body').stop().animate({scrollTop : scrTop},800);
			}
	    }
	});

	// 案例ewm
	$('.case .case_box .case_box_bottom .case_contents li').hover(function() {
		$(this).find('.case_ewm').stop().fadeIn(500);
	}, function() {
		$(this).find('.case_ewm').stop().fadeOut(500);
	});

	// 免费电话
	$('.fixedCall').click(function(){
		$('.hr_mask').show();
		$('.hr_index_light').show();
	});
	$('.hr_index_light h4 a').click(function(){
		$('.hr_mask').hide();
		$('.hr_index_light').hide();
	});
	$('.hr_mask').click(function () {
	    $('.hr_index_light h4 a').trigger('click');
	})

});

var shouye = (function(){
		function init(){
			if ($(".about_Num").length == 1)
			{
				about();
			}
			if ($('.advanage_cont').length == 1)
			{
				advantage();
			}
			if ($('.news_box_nei').length == 1)
			{
				news();
			}
			if($('.team').length == 1)
			{
				team();
			}
		}
		return {
			init : init
		}
		//关于我们
		function about(){
			var timer= 0;
			$(".about_Num .child:eq(0) span").html(1000);
			$(".about_Num .child:eq(1) span").html(0);
			$(".about_Num .child:eq(2) span").html(0);
			timer = setInterval(function(){
				if ($(window).scrollTop() >  $(".about_container").offset().top - $('.wrap .header').height() - 400)
				   {
				   		clearInterval(timer);
					    var i1 = 1000;
					    var i2 = 0;
					    var i3 = 0;
					    setTimeout(function(){
					    	var child1 = setInterval(function(){
		                         i1 = i1 - 10;
		                         if (i1 <= 10)clearInterval(child1);
		                         $(".about_Num .child:eq(0) span").html(i1);
					    	},12);
					    	var child2 = setInterval(function(){
		                         i2 ++;
		                         if (i2 >= 18)clearInterval(child2);
		                         $(".about_Num .child:eq(1) span").html(i2);
					    	},100);	
					    	var child3 = setInterval(function(){
					    		i3  = i3 + 50;
					    		if (i3 >= 5000)clearInterval(child3);
					    		$(".about_Num .child:eq(2) span").html(i3);
					    	},10);
					    },500);
				   }
			},10);
		}

		//我们的优势
		function advantage(){
			var advantage = $('.advantage').offset().top - $('.wrap .header').height() - 300;
			var $object1 = $('.advanage_cont_box1');
			var $object3 = $('.advanage_cont_box3');
			$(window).scroll(function() {
				if ($(window).scrollTop() > advantage)
				{
					$object1.stop().animate({'left': '0', 'margin-left': 0, 'opacity': '1'}, 800);
					$object3.stop().animate({'right': '0', 'margin-right': 0, 'opacity': '1'}, 800);
				}
			});
		}

		function news(){
			var news = $('.news').offset().top - $('.wrap .header').height() -100;
			$(window).scroll(function() {
				if ($(window).scrollTop() > news)
				{
					$('.news_box ul li:eq(0),.news_box ul li:eq(2)').animate({'left': 0}, 800);
					$('.news_box ul li:eq(1),.news_box ul li:eq(3)').animate({'right': 0}, 800);
				}	
			});
		}

		function team(){
			var team = $('.team').offset().top - $('.wrap .header').height();
			$(window).scroll(function() {
				if ($(window).scrollTop() > team)
				{
					$('.team_img').animate({opacity: 1 ,'margin-top': 0}, 500);
					$('.team_classify strong').delay(300).animate({ opacity: 1, 'margin-top': 0}, 500);
					$('.team_classify p').delay(500).animate({opacity: 1 ,'margin-top': 0}, 500);
				}
			});
		}


})();

// (function($){  
//     $.fn.wordLimit = function(num){   
//         this.each(function(){     
//             if(!num){  
//                 var copyThis = $(this.cloneNode(true)).hide().css({  
//                     'position': 'absolute',  
//                     'width': 'auto',  
//                     'overflow': 'visible'  
//                 });   
//                 $(this).after(copyThis);  
//                 if(copyThis.width()>$(this).width()){  
//                     $(this).text($(this).text().substring(0,$(this).text().length-4));  
//                     $(this).html($(this).html()+'...');  
//                     copyThis.remove();  
//                     $(this).wordLimit();  
//                 }else{  
//                     copyThis.remove(); //清除复制  
//                     return;  
//                 }     
//             }else{  
//                 var maxwidth=num;  
//                 if($(this).text().length>maxwidth){  
//                     $(this).text($(this).text().substring(0,maxwidth));  
//                     $(this).html($(this).html()+'...');  
//                 }  
//             }                      
//         });  
//     }           
// })(jQuery);  

// function stop(){
// 	return false;
// }
// document.oncontextmenu=stop;

function Tip(msg) {
    easyDialog.open({ container: { content: msg, yesFn: function () { easyDialog.close(); } } });
}