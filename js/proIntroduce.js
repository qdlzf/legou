/* 窗口加载事件 */
$(function(){

    //放大镜
    var magnifierConfig = {
        magnifier : "#magnifier1",//最外层的大容器
        width : 346,//承载容器宽
        height : 290,//承载容器高
        moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
        zoom : 5//缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);

    /*magnifier的内置函数调用*/
    /*
        //设置magnifier函数的index属性
        _magnifier.setIndex(1);

        //重新载入主图,根据magnifier函数的index属性
        _magnifier.eqImg();
    */

    //版本选择
    $("#bigMirror .rMenu .r3 b").click(function(){
        //alert(1);
        //1. 如果当前点击种类没有激活样式(类名：active)，就添加，否则就删除--- toggleClass()
        //2. 点击当前种类，其他种类取消激活样式(删除类名active)
        $(this).toggleClass("active").siblings("b").removeClass("active");
    });


    //增加数量
    $("#addNum").click(function(){
        //alert("1");
        //获取原来的数量
        var num=$(this).closest(".proNum").find("input").val();
        //console.log(num);
        //在num基础上加1
        ++num;
        //赋值
        $(this).closest(".proNum").find("input").val(num);
    });
    //减少数量
    $("#reNum").click(function(){
        //获取原来的数量
        var num=$(this).closest(".proNum").find("input").val();
        //在num基础上减1
        --num;
        if(num===0){
            return false;
        }
        //赋值
        $(this).closest(".proNum").find("input").val(num);
    });








});