  $(function(){
    var obj= {
      // nav
      navActive:function(){
        var $obtn = $(".hea-menu");
        var $list = $(".hea-mbtns");   
        $obtn.click(function(){
          var isActive = $obtn.hasClass("active");
          if(isActive){
            $obtn.removeClass("active")
          }else{
            $obtn.addClass("active")
          }

          var isHas = $list.hasClass("active");
          if(!isHas){
            $list.addClass("active")
          }else{
            $list.removeClass("active")
          }
        })
      },
      //banner setCarousel  第一个swiper
      banCarousel:function(){
        var mySwiper1 = new Swiper ('.swiper-container1', {
          loop:true,
          // slidesPerView : 4,//'auto'
          pagination:{
            el:'.swiper-pagination1'
          },
          navigation:{
            nextEl:'.swiper-button-next1',
            prevEl:'.swiper-button-prev1'
          }
        })
      },
      //count 数字滚动
      countUp:function(){
        $("#part1-n1").numberRock({
          speed:50,
          count:10
        })
        $("#part1-n2").numberRock({
          speed:50,
          count:18
        })
        $("#part1-n3").numberRock({
          speed:10,
          count:5000
        })
      },
      //part3   majors setCarousel 第二个swiper
      majCarousel:function(){
        var mySwiper2 = new Swiper ('.swiper-container2', {
          loop:true,
          // slidesPerView : 4,//'auto'
          navigation:{
            nextEl:'.swiper-button-next2',
            prevEl:'.swiper-button-prev2'
          }
        })
      },
      // part5  guarantee setCarousel 第三个swiper
      guaCarousel:function(){
        var mySwiper3 = new Swiper ('.swiper-container3', {
          loop:true,
          slidesPerView : 3,//'auto'
          navigation:{
            nextEl:'.swiper-button-next3',
            prevEl:'.swiper-button-prev3'
          },
          // breakpointsInverse: ture,
          breakpoints: { 
            //当宽度大于等于320
            479: {
              slidesPerView: 1
            },
           //当宽度大于等于480
            767: { 
              slidesPerView: 1
            },
            //当宽度大于等于640
            991: {
              slidesPerView: 2
            }
          }
        })
      },
      // part6 advantages Carousel 第四个swiper
      advCarousel:function(){
        var mySwiper4 = new Swiper ('.swiper-container4', {
          loop:true,
          slidesPerView : 3,//'auto'
          navigation:{
            nextEl:'.swiper-button-next4',
            prevEl:'.swiper-button-prev4'
          },
          // breakpointsInverse: ture,
          breakpoints: { 
            //当宽度大于等于320
            479: {
              slidesPerView: 1
            },
           //当宽度大于等于480
            767: { 
              slidesPerView: 1
            },
            //当宽度大于等于640
            991: {
              slidesPerView: 2
            }
          }
        })
      },
      // 首页 ending

      // newsCarousel 第五个swiper
      newsCarousel:function(){
        var mySwiper5 = new Swiper ('.swiper-container5', {
          slidesPerView : 1,//'auto'
          autoHeight: true,
          effect : 'fade',
          fadeEffect: {
            crossFade: true,
          }
        })
        var $tab = $(".part8-tab");
        $tab.click(function(){
          var idx = $(this).index();
          console.log(idx)
          $tab.removeClass("active")
          $(this).addClass("active")
          mySwiper5.slideTo(idx, 1000, false);//切换到第一个slide，速度为1秒
        })
      },
      // 新闻动态页面 ending 

      // 第六个swiper
      selfActive:function(){
        var mySwiper6 = new Swiper ('.swiper-container6', {
          loop:true,
          slidesPerView : 1,//'auto'
          autoHeight: true,
          navigation:{
            nextEl:'.swiper-button-next6',
            prevEl:'.swiper-button-prev6'
          },
        })
      },
      // 自考本科页面 ending 
      recActive:function(){
        var $mBtn = $(".mouse-btn");
        $mBtn.click(function(){
          var $curBtn = $(this);
          var isActive = $curBtn.hasClass("active");
          var $curList = $curBtn.siblings(".part16-p4");
          if(isActive){
            $curBtn.removeClass("active")
            $curList.slideUp()
          }else{
            $curBtn.addClass("active")
            $curList.slideDown()
          }
        })
      }
      // Recruitment页面 ending
    };
    obj.navActive()
    obj.banCarousel()
    obj.countUp()
    obj.majCarousel()
    obj.guaCarousel()
    obj.advCarousel()
    // index.html ending

    obj.newsCarousel()
    // news.html ending

    obj.selfActive()
    // self.html ending

    obj.recActive()
  })


var clientWidth = document.documentElement.clientWidth;
console.log(clientWidth)