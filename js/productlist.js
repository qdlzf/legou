$(function (){
    //主图-轮播的参数配置
    var opts={
        boxh:400,//盒子的高度
        w:1200,//图片的宽度
        h:400,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:12,//控制按钮宽度
        controlsH:12,//控制按钮高度
        radius:6//控制按钮圆角度数
    };
    $("#slideMenu .slide").slidebox(opts);

    //newbook右边列表功能
    //需求：鼠标移入li
    $("#newBook .rightList li").mouseover(function () {
        //显示当前li下面的内容(div),隐藏当前li下面的标题(h4)
        $("div",this).show();
        $("h4",this).hide();
        //其他li下面的内容(div)隐藏，下面的标题(h4)显示
        $(this).siblings().find("div").hide();
        $(this).siblings().find("h4").show();
    });

    //独家提供轮播图
    //主图-轮播的参数配置
    var opts={
        boxh:520,//盒子的高度
        w:1200,//图片的宽度
        h:500,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:12,//控制按钮宽度
        controlsH:12,//控制按钮高度
        radius:6//控制按钮圆角度数
    };
    $("#exclusive .siveSlideBox").slidebox(opts);


    //产品列表中的换一批
    //定义索引值
    let num = 0;
    //定义变量保存产品
    let loveSlideBox = $("#yourLove .loveList .loveSlideBox");
    //定义变量保存产品的长度值
    let len = loveSlideBox.length;
    //定义变量保存1个产品的高度
    let loveHei = loveSlideBox.outerHeight();
    $("#yourLove .loveTitle .changeBox").click(function () {
        //num每次点击自增1
        //alert(1);
        num++;
        //判断num值--为了让他循环
        if(num === len){
            num = 0;
        }
        //显示对应索引上的产品其他产品隐藏
        //proSlideBox.eq(num).show().siblings().hide();
        $("#yourLove .loveBox").animate({ "top" : -num*loveHei + "px"});
    });


});