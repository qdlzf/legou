$(function () {
	
    //主图-轮播的参数配置
    var opts={
        boxh:420,//盒子的高度
        w:1000,//图片的宽度
        h:400,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:12,//控制按钮宽度
        controlsH:12,//控制按钮高度
        radius:6//控制按钮圆角度数
    };
    $("#bigFocus").slidebox(opts);

    //ebook板块轮播图
    var opts={
        boxh:220,//轮播的高度
        w:328,//图片宽度
        h:222,//图片高度
        isShow:true,//是否显示控制按钮
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制器按钮上下偏移距离 
        controlsW:48,//控制按钮宽度
        controlsH:6,//控制按钮高度
        radius:0,//圆角度数
        controlsColor:"#ff6600",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00"//当前控制按钮的颜色
    }
    $(".eSlide").slidebox(opts);


    //电子书选项卡
    /*
    //需求：点击ebook indexTitle li
        1. 给当前点击的li添加激活样式，其他li移出激活样式
        2. 显示当前li对应的ebook ebookList ul
    */
    $("#ebook .indexTitle ul li").click(function () {
        //1. 给当前点击的li添加激活样式，其他li移出激活样式
        //alert(1);
        $(this).addClass("active").siblings().removeClass("active");
        //获取当前li的索引值
        let index = $(this).index();

        // 2. 显示当前li对应的ebook ebookList ul
        $("#ebook .middle > ul").eq(index).addClass("current").siblings().removeClass("current");
    });

    //电子书-新书畅销榜效果
    //需求：鼠标移入li
    $("#ebook .rightList li").mouseover(function () {
        //显示当前li下面的内容(div),隐藏当前li下面的标题(h4)
        $("div",this).show();
        $("h4",this).hide();
        //其他li下面的内容(div)隐藏，下面的标题(h4)显示
        $(this).siblings().find("div").hide();
        $(this).siblings().find("h4").show();
    });

    //cloth板块轮播图
    //主图-轮播的参数配置
    var opts={
        boxh:333,//盒子的高度
        w:430,//图片的宽度
        h:430,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:12,//控制按钮宽度
        controlsH:3,//控制按钮高度
        radius:0//控制按钮圆角度数
    };
    $(".clothSlide").slidebox(opts);


    //cloth选项卡
        
    $("#cloth .indexTitle ul li").click(function () {
        //1. 给当前点击的li添加激活样式，其他li移出激活样式
        //alert(1);
        $(this).addClass("active").siblings().removeClass("active");
        //获取当前li的索引值
        let index = $(this).index();

        // 2. 显示当前li对应的 ul
        $("#cloth .rightul > ul").eq(index).addClass("active").siblings().removeClass("active");
    });

    //sport板块轮播图
    //sport板块轮播图
    //主图-轮播的参数配置
    var opts={
        boxh:333,//盒子的高度
        w:430,//图片的宽度
        h:430,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:12,//控制按钮宽度
        controlsH:3,//控制按钮高度
        radius:0//控制按钮圆角度数
    };
    $(".sportSlide").slidebox(opts);

    //sport板块选项卡        
    $("#sport .indexTitle ul li").click(function () {
        //1. 给当前点击的li添加激活样式，其他li移出激活样式
        //alert(1);
        $(this).addClass("active").siblings().removeClass("active");
        //获取当前li的索引值
        let index = $(this).index();

        // 2. 显示当前li对应的 ul
        $("#sport .rightul > ul").eq(index).addClass("active").siblings().removeClass("active");
    });

    //chCloth板块轮播图
    var opts={
        boxh:333,//盒子的高度
        w:430,//图片的宽度
        h:430,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:12,//控制按钮宽度
        controlsH:3,//控制按钮高度
        radius:0//控制按钮圆角度数
    };
    $(".chClothSlide").slidebox(opts);


    //chCloth板块选项卡
    $("#chCloth .indexTitle ul li").click(function () {
        //1. 给当前点击的li添加激活样式，其他li移出激活样式
        //alert(1);
        $(this).addClass("active").siblings().removeClass("active");
        //获取当前li的索引值
        let index = $(this).index();

        // 2. 显示当前li对应的ul
        $("#chCloth .rightul > ul").eq(index).addClass("active").siblings().removeClass("active");
    });

    //产品裂变板块选项卡
    $("#popular .popuTitle ul li").hover(function(){
        //1. 给当前点击的li添加激活样式，其他li移出激活样式
        $(this).addClass("active").siblings("li").removeClass("active");
        //获取当前li的索引值
        let index = $(this).index();
        // 2. 显示当前li对应的cplist
        $("#popular .cplist").eq(index).addClass("active").siblings().removeClass("active");  
    })


    //楼层滚动效果
    //鼠标移入事件
    $("#floor li").mouseover(function(){
        //alert("1");
        //获取当前li的颜色值
        let bgColor=$(this).attr("data-color");
        //console.log(bgColor);
        //改变鼠标移入时的样式
        $(this).css({ "background-position-x" : "-40px","background-color" : bgColor,"width":"80px"})
    });
    //鼠标移出事件
    $("#floor li").mouseout(function(){
        //alert(2);
        //还原原来的样式
        $(this).css({ "background-position-x" : 0 ,"background-color" : "", "width" : "40px"})
    });
    //点击事件   点击当前的li回到对应的位置
    $("#floor li").click(function(){
        //获取当前li的索引
        let index = $(this).index();
        //找到对应的位置
        let sTop = $(".floorbox").eq(index).offset().top;
        //滚动到指定的位置
        $("html,body").animate({ "scrollTop" : sTop - 30},500)
    });


    //固定顶部搜索框
    $(window).scroll(function () {
        //获取滚动条的距离
        let sTop = $("html,body").scrollTop();
        //判断
        if(sTop >= 400){
            //滑出
            $("#fixTop").slideDown(30);
            $("#gotoyop").slideDown(30);
            //追加搜索框
            $("header .search form").appendTo("#fixTop")
        }else{
            //滑入
            $("#fixTop").slideUp(30);
            $("#gotoyop").slideUp(30);
            //把搜索框放回去
            $("#fixTop form").appendTo("header .search")
        }
    })
    //返回顶部功能
    $(window).scroll(function () {
        //获取滚动条的距离
        let sTop = $("html,body").scrollTop();
        //判断
        if(sTop >= 400){
            //滑出
            $("#gototop").slideDown(30);
        }else{
            //滑入
            $("#gototop").slideUp(30);
        }
    })
    $("#gototop").click(function(){
        //滚动到指定的位置
        $("html,body").animate({ "scrollTop" : 0},500)
    });

        //领券中心
        $("#getcenter .aBox").hover(function(){
            $(".one",this).stop(true).animate({"right":"40px"},300);
        },function(){
            $(".one",this).stop(true).animate({"right":"-60px"},300);
        })
    










    });


    