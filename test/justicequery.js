$(document).ready(function(){
    $(this).scrollTop(0);
});

window.onload = function() {
    document.getElementById("myMusic").play();
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
		var x=$("#firstSec").offset();
		if(st>x.top-200&&st<x.top+900&&flag==false)
		{
		document.getElementById("myMusic").pause();
		document.getElementById("supermanMusic").pause();
		$("#video")[0].src="https://www.youtube.com/embed/FH3eFGSxgq4?&autoplay=1";
		flag=true;

		}
		else if(flag==true&&st<x.top-350)
		{
		document.getElementById("myMusic").play();
		$("#video")[0].src="";
		flag=false;
		}


		else if(st>x.top+900&&st<x.top+1900)
		{
		document.getElementById("supermanMusic").play();
		document.getElementById("batMusic").pause();
		$("#video")[0].src="";
		flag=false;
		}
		else if(st>x.top+1900&&st<x.top+2900)
		{
		document.getElementById("batMusic").play();
		document.getElementById("supermanMusic").pause();
		document.getElementById("wonderMusic").pause();
		$("#video")[0].src="";
		flag=false;
		}
		else if(st>x.top+2900&&st<x.top+3900)
		{
		document.getElementById("wonderMusic").play();
		document.getElementById("batMusic").pause();
		document.getElementById("flshMusic").pause();
		$("#video")[0].src="";
		flag=false;
		}
		else if(st>x.top+3900&&st<x.top+4900)
		{
		document.getElementById("flshMusic").play();
		document.getElementById("wonderMusic").pause();
		$("#video")[0].src="";
		flag=false;
		}
		
        lastScrollTop = st;
    });

flag=false;





function l1()
{
document.getElementById("introd").scrollIntoView();
document.getElementById("wonderMusic").pause();
document.getElementById("batMusic").pause();
document.getElementById("flshMusic").pause();
document.getElementById("myMusic").play();
document.getElementById("superMusic").pause();
$("#video")[0].src="";
flag=false;
}
function l2()
{
document.getElementById("secondSec").scrollIntoView();
document.getElementById("wonderMusic").pause();
document.getElementById("batMusic").pause();
document.getElementById("flshMusic").pause();
document.getElementById("myMusic").pause();
document.getElementById("superMusic").play();
$("#video")[0].src="";
flag=false;
}
function l3()
{
document.getElementById("thirdSec").scrollIntoView();
document.getElementById("wonderMusic").pause();
document.getElementById("batMusic").play();
document.getElementById("flshMusic").pause();
document.getElementById("myMusic").pause();
document.getElementById("superMusic").pause();
$("#video")[0].src="";
flag=false;
}
function l4()
{
document.getElementById("fourthSec").scrollIntoView();
document.getElementById("wonderMusic").play();
document.getElementById("batMusic").pause();
document.getElementById("flshMusic").pause();
document.getElementById("myMusic").pause();
document.getElementById("superMusic").pause();
$("#video")[0].src="";
flag=false;
}

function l5()
{
document.getElementById("fifthSec").scrollIntoView();
document.getElementById("flshMusic").play();
document.getElementById("wonderMusic").pause();
document.getElementById("batMusic").pause();
document.getElementById("myMusic").pause();
$("#video")[0].src="";
flag=false;
document.getElementById("superMusic").pause();
}