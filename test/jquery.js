$(document).ready(function(){
    $(this).scrollTop(0);
});

window.onload = function() {
    document.getElementById("myMusic").play();
var vid = document.getElementById("myMusic");
vid.volume = 0.5;}




var flag=false;

  var lastScrollTop = 0;
    $(document).on('scroll', function() {
        st = $(this).scrollTop();
        var ht=$("nav").height();

        if(st > lastScrollTop) {
            if(ht>=70)
             {
            $("nav").height(ht-2);
	    $("#logo").height(ht-2);
	    $("#nav3").css({"opacity":"0.2"});
	    $("#nav3").hide();
              }
		
        }

	 
	
        else{
	if(ht<=180)
	{
            $("nav").height(ht+2);
	    $("#logo").height(ht+2);
	    $("#nav3").css({"opacity":"1.0"});
	    
        }
if(st==0)
{
$("nav").height(180);
	    $("#logo").height(180);
$("#nav3").show();
}
	}
		var x=$("#secondSec").offset();
		if(st>x.top-200&&flag==false)
		{
		document.getElementById("myMusic").pause();
		$("#video")[0].src="https://www.youtube.com/embed/rGQUKzSDhrg?&autoplay=1";
		flag=true;
		}
		else if(flag==true&&st<x.top-350)
		{
		document.getElementById("myMusic").play();
		$("#video")[0].src="";
		flag=false;
		}
		
        lastScrollTop = st;
    });

flag=false;
