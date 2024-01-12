$(document).ready(function(){
    console.log("load")
    // 배열
    $array=[]
    $(".array").each(function(index){
        $array[index]=$(this).attr("placeholder")
        // console.log("$array["+index+"] : "+$array[index])
        $(this).focus(function(){
            $(this).attr("placeholder","")
        })
        $(this).blur(function(){
            $(this).attr("placeholder",$array[index])
        })
    })
    
    $("input[name=total]").click(function(){
        console.log("확인")
        if( $(this).is(":checked") ){
            $("input[type=checkbox]").prop("checked",true)
        }else{
            $("input[type=checkbox]").prop("checked",false)
        }
    })


    $(".chk-ele").click(function(){
        // .chk-ele의 개수
        var checkLength=$(".chk-ele").length;
        //  .chk-ele의 checked의 개수
        var check=$(".chk-ele input:checked").length;

        if(check==checkLength){
            $("input[name=total]").prop("checked",true)
        }else{
            $("input[name=total]").prop("checked",false)
        }
    })
})