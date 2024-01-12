$(document).ready(function(){
    console.log("load")
    $(".brand-list a").eq(0).addClass("active")
    $(".brand-content").eq(0).show();
    $(".brand-list a").click(function(){
        $(".brand-content").hide();
        $(this.hash).show();
        $(".brand-list a").removeClass("active")
        $(this).addClass("active")
        return false;
    })
})