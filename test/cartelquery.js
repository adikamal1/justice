$(document).ready(function(){
    $(this).scrollTop(0);
});

window.onload = function() {
    document.getElementById("Music1").play();
}




var flag=false;

  var lastScrollTop = 0;
    $(document).on('scroll', function() {
        st = $(this).scrollTop();
        var ht=$("nav").height();

        if(st > lastScrollTop) {
            if(ht>=70)
             {
            $("nav").height(ht-2);
	    
	    $("#nav3").css({"opacity":"0.2"});
	    $("#nav3").hide();
              }
		
        }

	
	
        else{
	if(ht<=180)
	{
            $("nav").height(ht+2);
	   
	    $("#nav3").css({"opacity":"1.0"});
	    
        }
if(st==0)
{
$("nav").height(180);
	  
$("#nav3").show();
}
	}
		var x=$("#firstSec").offset();
		if(st>x.top-200&&st<x.top+900&&flag==false)
		{
		document.getElementById("Music1").pause();
		document.getElementById("supermanMusic").pause();
		$("#video")[0].src="https://www.youtube.com/embed/U7elNhHwgBU?&autoplay=1";
		flag=true;

		}
		else if(flag==true&&st<x.top-350)
		{
		document.getElementById("Music1").play();
		$("#video")[0].src="";
		flag=false;
		}


		else if(st>x.top+900&&st<x.top+1900)
		{
		document.getElementById("supermanMusic").play();
		document.getElementById("Music3").pause();
		$("#video")[0].src="";
		flag=false;
		}
		else if(st>x.top+1900&&st<x.top+2900)
		{
		document.getElementById("Music3").play();
		document.getElementById("supermanMusic").pause();
		document.getElementById("Music4").pause();
		$("#video")[0].src="";
		flag=false;
		}
		else if(st>x.top+2900&&st<x.top+3900)
		{
		document.getElementById("Music4").play();
		document.getElementById("Music3").pause();
		document.getElementById("Music5").pause();
		$("#video")[0].src="";
		flag=false;
		}
		else if(st>x.top+3900&&st<x.top+4900)
		{
		document.getElementById("Music5").play();
		document.getElementById("Music4").pause();
		$("#video")[0].src="";
		flag=false;
		}
		
        lastScrollTop = st;
    });

flag=false;





function l1()
{
document.getElementById("introd").scrollIntoView();
document.getElementById("Music").pause();
document.getElementById("Music3").pause();
document.getElementById("Music5").pause();
document.getElementById("Music1").pause();
document.getElementById("Music2").play();
$("#video")[0].src="";
flag=false;
}
