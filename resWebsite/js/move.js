$(function(){
    //获取鼠标移动到元素的时候距离最近的边
    function getMouseWay(nowEle) {
        //获取当前鼠标位置
        var ex = event.pageX,
        ey = event.pageY;
        
        //获取当前元素的上下左右
        var el = $(nowEle).offset().left,
        et = $(nowEle).offset().top,
        ew = el + parseInt($(nowEle).width()),
        eh = et + parseInt($(nowEle).height());
        
        //计算出鼠标距离上下左右哪个最近
        var ml = Math.abs(ex - el),
        mt = Math.abs(ey - et),
        mr = Math.abs(ew - ex),
        mb = Math.abs(eh - ey);
        
        //把计算出的4个距离放到数组bm里面
        var arr = [ml, mt, mr, mb];
        
        //计算出最小的那个值
        var bmMin = Math.min.apply(null, arr);
        
        //根据最小值遍历数组判断出是哪边最近
        var way;
        $.each(arr, function (index, content) {
            if (content == bmMin) way = index;
        });
        return way;
    }

    function move(curSel,maskSel){
     curSel.mouseenter(function(){
        var way = getMouseWay(this), 
        w = $(this).width(),
        h = $(this).height(),
        t = 200;
        //左上右下=>0,1,2,3
        switch(way){
        case 0:
        $(this).find(maskSel).css({"display":"block","top": 0,"left": -w}).animate({'left':0},t);
        break;
        case 1:
        $(this).find(maskSel).css({"display":"block","top": -h,"left": 0}).animate({'top':0},t);
        break;
        case 2:
        $(this).find(maskSel).css({"display":"block","top": 0,"left": w}).animate({'left':0},t);
        break;
        case 3:
        $(this).find(maskSel).css({"display":"block","top": h,"left": 0}).animate({'top':0},t);
        break;
        }
      }).mouseleave(function(){
        $(this).find(maskSel).fadeOut();
      });
    }

    var $el = $('.page6-item'), $modal = '.page6-mask';

    move($el,$modal)
})