$(document).ready(function(){

		//STYLER
		jQuery('#styler-button').click(function(){						
			if(parseInt(jQuery('#styler').css('left')) != '0'){
				jQuery('#styler').animate({
					left: '0'
				},500);
			}else{
				jQuery('#styler').animate({
					left: '-187'
				},500);
			}
			
			return false;
		});
		
		
		jQuery('#styler-colorpicker').farbtastic(function(color){
			jQuery('.colorizer,.current,#menu li.current a,#responsive-menu,.ei-title h2').css('color',color);			
			jQuery('#topline,.ei-slider-thumbs li.ei-slider-element,.call_to_action .button,.button,span.circle,.heading_line,#contact_form .input-button:hover,.post_format').css('background-color',color);
			jQuery('#menu .current,#menu li:hover,.ui-tabs .ui-tabs-nav li.ui-tabs-selected').css('border-top','1px solid '+color);
			jQuery('#menu li ul').css('border-top','2px solid '+color);						
			
			jQuery('a').hover(
				function(){
					jQuery(this).css('color',color);
				},
				function(){
					jQuery(this).css('color','#484848');
				}
			)
			
			jQuery('#menu a').hover(
				function(){
					jQuery(this).css('color',color);
				},
				function(){
					jQuery(this).css('color','#8c8c8c');
				}
			)
			
			
			jQuery('#menu li').hover(
				function(){
					jQuery(this).css('border-top','1px solid '+color);
				},
				function(){
					jQuery(this).css('border-top','1px solid #e2e2e2');
				}
			)
		});

});