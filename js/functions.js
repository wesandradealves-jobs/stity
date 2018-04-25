			jQuery(document).ready(function(){		

				var lastScrollTop = 0;

				$( window).scroll(function(event){
				   var st = $(this).scrollTop();
				   if (st > lastScrollTop){
				   		$("#header nav").removeClass("onMobile");
				   		$("#mobileNavigation").removeClass("onMobile");
				   } else {
				      // upscroll code
				   }
				   lastScrollTop = st;
				}); 

				$(window).resize(function(){
					$("#header nav").removeClass("onMobile");
					$("#mobileNavigation").removeClass("onMobile");
				});

		        $("header #header nav").click(function(){
	                if ($(window).width() < 790) {
	                  	$("#mobileNavigation").toggleClass("onMobile");
	                  	if($("#mobileNavigation").hasClass("onMobile")){
	                  		$("#header nav").addClass("onMobile");
	                  	} else {
	                  		$("#header nav").removeClass("onMobile");
	                  	}
	                }	
		        });
			});	