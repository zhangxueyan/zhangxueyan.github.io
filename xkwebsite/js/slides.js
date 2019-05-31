
function BannerImages(){
	
	var b = $("#changeBox_arrow_bar"),
		c = $("ul.ul_change li:not(.arrw_bar)"),
		e = $("ul.changeBox_imgs_list"),
		d = true,
		f = 1; 
	
	var a = function(){
		
		var j = (1200 * f - 1200),j = j == 0 ? 0 : -j,i = 500;
		
		e.animate({ left: j + "px" }, i)
	};
		
	e.find("img").hover(function(){
		clearInterval(h)
	},function(){
		g()
	});
		
	c.click(function(){
		var j = $(this), i = j.position().left + 4;
		f = j.attr("idx");
		a();
		b.animate({ left: i + "px" },500,function(){
			d = true
		})
	}).mouseover(function(){
		if(!d){
			return
		}
		clearInterval(h);
		d = false; 
		$(this).click()
	}).mouseout(function(){
		if(!d){
			return
		}
		g()
	});
		
	var h = null;
		
	var g = function(){
		h = setInterval(function(){
			f++;
			if (f > 4){
				f = 1
			}
			c.eq(f).click()
		}, 6000)
	};
	
	g()
	
};

$(document).ready(function(){
	BannerImages();//Banner滑动效果
});
