  $(function(){
    var obj= {
      // nav
      navActive:function(){
        var $nav = $("nav");
        var $li = $(".nav-item");
        $li.mouseenter(function(){
          var $item = $(this);
          var $navlist = $item.find(".nav-list")
          $navlist.slideDown();
        }).mouseleave(function(){
          var $item = $(this);
          var $navlist = $item.find(".nav-list")
          $navlist.slideUp();
        })
      },
      //updateTime
      updateTime:function(){
         var $year = $(".year");
         var $month = $(".month");
         var $date = $(".date");
         var myDate = new Date();
         var getDate = myDate.getDate();
         var getDay = myDate.getDay();
         switch(getDay){
          case 0:myDate.setDate(getDate+3);
          break;
          case 1:myDate.setDate(getDate+2)
          break;
          case 2:myDate.setDate(getDate+1)
          break;
          case 3:myDate.setDate(getDate+2)
          break;
          case 4:myDate.setDate(getDate+1)
          break;
          case 5:myDate.setDate(getDate+2)
          break;
          case 6:myDate.setDate(getDate+1)
          break;
         }
          var newMonth = myDate.getMonth()+1;
          var newDate = myDate.getDate();
          $month.text(newMonth<10?'0'+newMonth:newMonth)
          $date.text(newDate<10?'0'+newDate:newDate)
          $year.text(myDate.getFullYear())
      },
      //banner setCarousel
      banCarousel:function(){
        var mySwiper = new Swiper ('.swiper-container1', {
          loop:true,
          slidesPerView : 4//'auto'
        })
      },
      zsCarousel:function(){
        var mySwiper = new Swiper ('.swiper-container2', {
            effect : 'coverflow',
            slidesPerView: 1,
            centeredSlides: true,
        })
      }
    };
    obj.navActive()
    obj.updateTime()
    obj.banCarousel()
    obj.zsCarousel()
  })

  $(function(){
          // page1 轮播
          $('#owl-demo1').owlCarousel({
            items : 4,
            loop:true,
            lazyLoad : true,
            navigation : true,
            itemsDesktop : [1170, 4],
            itemsDesktopSmall : [991, 3],
            itemsTablet : [767, 2],
            itemsMobile : [479, 2],
              // autoPlay:true,
              slideSpeed:100,
              stopOnHover:false
            });
          // page3 轮播
          $('#owl-demo2').owlCarousel({
            items : 6,
            loop:true,
            lazyLoad : true,
            navigation : true,
            itemsDesktop : [1170, 6],
            itemsDesktopSmall : [991, 4],
            itemsTablet : [767, 3],
            itemsMobile : [479, 2],
              // autoPlay:true,
              slideSpeed:100,
              stopOnHover:false
            });
          // page4 轮播
          $('#owl-demo3').owlCarousel({
            items : 4,
            loop:true,
            lazyLoad : true,
            navigation : true,
            itemsDesktop : [1170, 4],
            itemsDesktopSmall : [991, 3],
            itemsTablet : [767, 2],
            itemsMobile : [479, 1],
              // autoPlay:true,
              slideSpeed:100,
              stopOnHover:false
            });
          // page4 轮播
          $('#owl-demo4').owlCarousel({
            items : 5,
            loop:true,
            lazyLoad : true,
            navigation : true,
            itemsDesktop : [1170, 5],
            itemsDesktopSmall : [991, 4],
            itemsTablet : [767, 3],
            itemsMobile : [479, 2],
              // autoPlay:true,
              slideSpeed:100,
              stopOnHover:false
            });
  });