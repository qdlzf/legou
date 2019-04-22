$(function(){
    $(".logincontant ul li").click(function(){
        //alert(1);
        $(this).addClass("active").siblings().removeClass("active");
        let index=$(this).index();
        $(".logincontant .accountbox div").removeClass("active").eq(index).addClass("active");
    });
  

    
});