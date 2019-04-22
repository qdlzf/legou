/* 窗口加载事件 */
$(function(){
    //全选
    $("#shopCar .shopAccount .allCheck").change(function(){
        //获取当前全选按钮的选中状态值
        let bool=$(this).prop("checked");
        //console.log(bool);
        //将bool值赋值给商品的选中状态
        $(".sCheck,.allCheck").prop("checked",bool);
         //总计
         zongji();
    });

    //当单个商品没有全部选中时  取消全选状态
    $(".sCheck").change(function(){
        //定义标杆来判断是否是全部选中
        let flag=true;
        //遍历
        $(".sCheck").each(function(){
            //获取所有商品的选中状态
            let bool=$(this).prop("checked");
            //判断是否没有选中
            if(bool===false){
                flag=false;
                //任意一个没有选中 取消判断
                return false;
            }
        });
        if(flag){
            //全选
            $(".allCheck").prop("checked",true)
        }else{
            //取消全选
            $(".allCheck").prop("checked",false)
        }
        //总计
        zongji();
    });



    //增加数量
    $(".addNum").click(function(){
        //获取原来的数量
        let num=$(this).closest("tr").find(".proNum").val();
        //console.log(num);
        //点击增加时自增
        ++num;
        //将增加后的num赋值给pronum
        $(this).closest("tr").find(".proNum").val(num);
        //小计
        xiaoji(this,num);
        //总计
        zongji();
    });
    //减少数量
    $(".reNum").click(function(){
        //获取原来的数量
        let num=$(this).closest("tr").find(".proNum").val();
        //console.log(num);
        //点击减少时自减
        --num;
        //当num=0时 停止减少
        if(num===0){
            return false;
        }
        //将增加后的num赋值给pronum
        $(this).closest("tr").find(".proNum").val(num);
        //小计
        xiaoji(this,num);
        //总计
        zongji();
    });

    //小计
    function xiaoji(obj,sNum){
        //获取单价
        let sPrice=$(obj).closest("tr").find(".sPrice").text();
        //console.log(sPrice);
        //计算小计
        let subSprice=(sNum*sPrice).toFixed(2);
        //将计算出来的值赋值给subSprice
        $(obj).closest("tr").find(".subPrice").text(subSprice);
    }

    //总计
    function zongji(){
        //定义变量来保存总的商品个数
        let allNum=0;
        //定义变量来保存总价
        let allPrice=0;
        //获取选中的商品
        $(".sCheck:checked").each(function(){
            //计算总数量
            let sNum=parseInt($(this).closest("tr").find(".proNum").val());
            //将获取到的数量累加到allnum中
            allNum+=sNum;
            //计算总价
            let subPrice=parseInt($(this).closest("tr").find(".subPrice").text());
            //将subprice累加到allprice
            allPrice+=subPrice
        });
        //得到总数量
        $(".aready").text(allNum);
        //得到总价
        allPrice=allPrice.toFixed(2);
        $(".allPrice").text(allPrice)
    }



});