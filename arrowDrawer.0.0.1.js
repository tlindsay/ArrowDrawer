/**
*       >>                                                                         
*      >>=>                                                                        
*     >> >=>     >> >==> >> >==>    >=>     >=>      >=>                           
*    >=>  >=>     >=>     >=>     >=>  >=>   >=>  >  >=>                           
*   >=====>>=>    >=>     >=>    >=>    >=>  >=> >>  >=>                           
*  >=>      >=>   >=>     >=>     >=>  >=>   >=>>  >=>=>                           
* >====>     >=> >==>    >==>       >=>     >==>    >==>                           
* >=>   >=>                                                            >=>         
* >=>    >=> >> >==>    >=> >=>  >=>      >=>   >==>    >> >==>             >===>  
* >=>    >=>  >=>     >=>   >=>   >=>  >  >=> >>   >=>   >=>           >=> >=>     
* >=>    >=>  >=>    >=>    >=>   >=> >>  >=> >>===>>=>  >=>           >=>   >==>  
* >=>   >=>   >=>     >=>   >=>   >=>>  >=>=> >>         >=>           >=>     >=> 
* >====>     >==>      >==>>>==> >==>    >==>  >====>   >==>    >=>    >=> >=> >=> 
*                                                                   >==>   
* 
* @author Patrick Lindsay(patrick.lindsay@me.com) and Randy Little(randykeithlittle@gmail.com)
* @link http://github.com/tlindsay/ArrowDrawer.js 
* @since Thursday September 24, 2013
* @version 0.1.0 
* @license GPL
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
*
*/

(function($){
	$.fn.arrowDrawer = function(options){

		var defaults = {
			closed: true,
			controller: '.arrowDrawer-controller',
			drawer: '.arrowDrawer-drawer',
			flipped: '.arrowDrawer-flipped',
			arrow: '.arrowDrawer-arrow'
		};

		var options = $.extend(defaults, options);

		return this.each(function(){
			var controller = $(this);
			var drawer = $(controller).next(options.drawer);
			var arrow = $(options.arrow, controller);

			$(drawer).attr('data-height',$(drawer).height()).css({'height':0,'overflow':'hidden'});

			$(this).click(function(){
				if ( !$(controller).is(":animated") ){

					function rotateArrow(start, finish, speed)
					{
						$({foo:start}).stop().animate({foo:finish}, {
							step: function(val){
								$(arrow).css({
									'transform': 'rotate('+val+'deg)',
									'-ms-transform': 'rotate('+val+'deg)',
									'-webkit-transform': 'rotate('+val+'deg)'
								});
							},
							duration: speed
						});
					}

					function toggleContainer(open, speed)
					{
						if ( open )
							$(drawer).stop().animate({
								height: $(drawer).attr('data-height'),
								opacity: 1,
							},speed);
						else
							$(drawer).stop().animate({
								height: 0,
								opacity: 0
							},speed);
					}

					$(arrow).toggleClass(options.flipped);

					/**
					 * Doin' tha damn thing.
					 */
					if ( $(arrow).hasClass(options.flipped) )
					{
						rotateArrow(0,180,500);
						toggleContainer(true);
					} else {
						rotateArrow(180,0,500);
						toggleContainer(false);
					}

				}
			});
		});
	};
})(jQuery);