  $(function(){
    var obj= {
      // nav
      navActive:function(){
        var $obtn = $(".hea-obtn");
        var $list = $(".hea-items");
        var $cbtn = $(".hea-cbtn");
        var $mask = $(".hea-mask");
        $obtn.click(function(){
          $(this).hide()
          $cbtn.show()
          $mask.show()
          $list.slideDown()
        })

        $cbtn.click(function(){
          $(this).hide()
          $obtn.show()
          $mask.hide()
          $list.slideUp()
        })
      },
      //banner setCarousel
      fullCarousel:function(){
         $('#fullpage').fullpage({
            slidesColor : ["#778aa9","#af6789","#945c4c","#84ada2","#b38d60","#B19494"],
            anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage','sixthPage'],
            menu: '#myMenu',//绑定菜单，data-menuanchor才能使用.active
            navigation: true,
            navigationColor:"#ff0000",
            verticalCentered:false,
            // paddingTop:'150px',
            showActiveTooltip: true,
            scrollingSpeed:500
          });
          // 小屏幕的时候获取屏幕宽度
          var wd = document.documentElement.clientWidth;
          if(wd<=991){
            $(".page4-swiper1").css('width',wd*0.9)
            $(".page5-swiper2").css('width',wd*0.9)
          }
          //各种屏幕 内部部分距离顶部的高度。。
          var $page = $(".section");
          if(wd>1200){
            $page.css("padding-top",'200px')
          }
          if(wd<=1200){
            $page.css("padding-top",'180px')
          }
          if(wd<=991){
            $page.css("padding-top",'120px')
          }
          if(wd<=479){
            $page.css("padding-top",'80px')
          }
      },
      //swiper
      halfCarousel:function(){
        var mySwiper1 = new Swiper ('.page4-swiper1', {
            loop: true, // 循环模式选项
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            }
         }) 
        var mySwiper2 = new Swiper ('.page5-swiper2', {
            loop: true, // 循环模式选项
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            }
         })  
      },
      //concat me
      concatWays:function(){
        var $page6Way = $(".page6-way");
        $page6Way.click(function(){
          var $curImg= $(this).find(".page6-img");
          var isHide = $curImg.is(":hidden");
          if(isHide){
            $curImg.fadeIn()
          }else{
            $curImg.fadeOut()
          }
        })
      }
    };
    obj.navActive()
    obj.fullCarousel()
    obj.halfCarousel()
    obj.concatWays()
  })
  console.log(document.documentElement.clientWidth)
  