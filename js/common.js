// $(선택자).이벤트(처리문(){ }) 이벤트를 사용할 때 기본
// $(선택자).메서드함수(); 처리문이 없음
// jquery를 문서에서 시작하겠다라는 선언
$(document).ready(function(){
    // css메서드 태그에 인라인으로 style을 전달
    $(".menu-g>a").click(function(){
        if($(this).parent().find(".m-drop-down").is(":hidden")){
            // 숨겨져 있을 때
            $(".m-drop-down").slideUp();
            $(this).parent().find(".m-drop-down").slideDown();
            $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right")
            $(this).find(".arrow").removeClass("fa-angle-right").addClass("fa-angle-down")
        }else{
            // 표시되어 있을 때
            $(".m-drop-down").slideUp();
            $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right")
        }
        
    })
    console.log(".menu-g의 수 : "+ $(".menu-g").length)
    
    var $aniD=0.2;
    $(".m-open").click(function(){
        $(".mobile-content").addClass("active")
        for(var i=0; i<$(".menu-g").length ; i++){
            console.log("i : "+i)
            // i=0부터 i<$(".menu-g").enght의 값까지 i++ 1씩증가하면서
            $aniD=$aniD+0.1;
            $(".menu-g").eq(i).find("a").css({"transition-delay":$aniD+"s"}).addClass("active")
        }
    })
    $(".m-close").click(function(){
        $(".mobile-content").removeClass("active")
        $(".menu-g>a").removeClass("active")
        $aniD=0.2;
        
    })

    /* $(".first>a").mouseenter(function(){
        $(".drop-down").stop().slideUp();
        $(".first>a").removeClass("active")
        $(this).parent().find(".drop-down").stop().slideDown();
        $(this).addClass("active")
    })
    $("#desk-nav").mouseleave(function(){
        $(".drop-down").stop().slideUp();
        $(".first>a").removeClass("active")
    }) */

    /* $(".first>a").mouseenter(function(){
        $(".first>a").removeClass("active")
        $(".drop-down").stop().slideDown();
        $(this).addClass("active");
        $(".full-back").stop().slideDown();
    })
    $("#desk-nav").mouseleave(function(){
        $(".drop-down").stop().slideUp();
        $(".first>a").removeClass("active")
        $(".full-back").stop().slideUp();
    }) */

    // $("반복되는 선택자").each(function(index){})
    $(".first").each(function(index){
        $(this).children("a").mouseenter(function(){
            $(".first>a").removeClass("active")
            $(".drop-down").stop().slideDown();
            $(this).addClass("active");
            $(".full-back").stop().slideDown();
            $(".drop-down").removeClass("active")
            $(".drop-down").eq(index).addClass("active")
        })
        $("#desk-nav").mouseleave(function(){
            $(".drop-down").stop().slideUp();
            $(".first>a").removeClass("active")
            $(".full-back").stop().slideUp();
            // $(".drop-down").removeClass("active")
        })
        $(this).children(".drop-down").mouseenter(function(){
            $(".first>a").removeClass("active")
            $(this).parent().children("a").addClass("active")
            $(".drop-down").removeClass("active")
            $(this).addClass("active")
        })
    })
    
    var $scroll=null;
    $(window).on("scroll",function(){
        $scroll=$(window).scrollTop();
        if($scroll>20){
            $("header").addClass("active")
        }else{
            $("header").removeClass("active")
        }
    })

    // 슬라이드 효과
    var $width;
    var x,xpos;
    var drag=false;
    var eleDrag;
    var dragWrapWidth;
    var last_left;
    var $time=0;

    function init(){
        $width=$(window).width();
        drag=false;
        eleDrag=$(".sliding-group");
        const eleDrag_width=eleDrag.width();
        dragWrapWidth=$(".banner-sliding-wrap").width();
        eleDrag.css({left:-0})
        last_left=eleDrag.width()-dragWrapWidth;
        console.log("last_left : "+last_left)
        console.log("$time : "+$time)
    }
    init();

    $(window).resize(function(){
        init();
    })

    eleDrag.on("mousedown touchstart",function(event){
        if(event.type==="touchstart"){
            xpos=event.touches[0].screenX;
        }else{
            xpos=event.pageX;
        }

        drag=true;

        timeCount=setInterval(function(){ $time++; console.log("$time : "+$time)},10)

        if(event.type==="mousedown"){
            return false;
        }
    })

    eleDrag.on("mouseup touchend",function(event){

        drag=false;

        clearInterval(timeCount);

        if($time>10){
            $("a").click(function(e){ e.preventDefault(); })
        }else{
            $("a").click(function(){
                var $href=$(this).attr("href");
                window.open($href,"_self");
            })
        }

        $time=0;
    })

    eleDrag.on("mousemove touchmove",function(event){
        if(drag){
            if(event.type==="touchmove"){
                x=parseInt(eleDrag.css("left"))-parseInt(xpos-event.touches[0].screenX)
            }else{
                x=parseInt(eleDrag.css("left"))-parseInt(xpos-event.pageX);
            }

            if(x>0){
                x=0;
                drag=false;
            }else if(x<-last_left){
                x=-last_left;
                drag=false;
            }
            eleDrag.css({left:x});
        }
        if(event.type==="touchmove"){
            xpos=event.touches[0].screenX;
        }else{
            xpos=event.pageX;
        }
        return false;

    })

    

    $("#sns-g a:first-child").click(function(){
        $(".login-modal").show();
        console.log("클릭")
        $("html,body").css({"overflow":"hidden"})
    })
    $(".modal-close, .modal-back").click(function(){
        $(".login-modal").hide();
        $("html,body").css({"overflow":"inherit"})
    })
    
})