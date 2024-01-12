$(function(){
    var $contentAni=null;
    var $windowWidth=null;
    var $windowHeight=null;
    function widthHeight(){
        $windowWidth=$(window).width();
        $windowHeight=$(window).height();
        $addScrollHeight=$windowHeight-$windowHeight/4;
    }
    widthHeight();
    $(".content-ani").each(function(index){
        
        $(window).scroll(function(){
            $contentAni=$(".content-ani").eq(index).offset().top;
            console.log("content-ani top : "+$contentAni)
            $scrollTop=$(window).scrollTop();
            // console.log("$scrollTop : "+$scrollTop)
            // console.log("$contentAni : "+$contentAni)
            if($scrollTop+$addScrollHeight>$contentAni){
                $(".content-ani").eq(index).find(".title-ani2").addClass("active")
            }
        })
        
        
    })
})