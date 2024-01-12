$(document).ready(function(){
    console.log("load")
    var hash=0;
    $(".shop-group a").click(function(){
        hash=$(this.hash).offset().top;
        $("html,body").animate({
            scrollTop:hash
        })
    })

    
    
})