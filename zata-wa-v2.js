!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});;
jQuery(function(i){i(".woocommerce-ordering").on("change","select.orderby",function(){i(this).closest("form").submit()}),i("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(i(this).attr("min"));0<=o&&parseFloat(i(this).val())<o&&i(this).val(o)});var e="store_notice"+(i(".woocommerce-store-notice").data("notice-id")||"");"hidden"===Cookies.get(e)?i(".woocommerce-store-notice").hide():i(".woocommerce-store-notice").show(),i(".woocommerce-store-notice__dismiss-link").click(function(o){Cookies.set(e,"hidden",{path:"/"}),i(".woocommerce-store-notice").hide(),o.preventDefault()}),i(".woocommerce-input-wrapper span.description").length&&i(document.body).on("click",function(){i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),i(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),i(".woocommerce-input-wrapper :input").on("keydown",function(o){var e=i(this).parent().find("span.description");if(27===o.which&&e.length&&e.is(":visible"))return e.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=i(this).parent(),e=o.find("span.description");o.addClass("currentTarget"),i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),e.length&&e.is(":hidden")&&e.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),i.scroll_to_notices=function(o){o.length&&i("html, body").animate({scrollTop:o.offset().top-100},1e3)},i('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),i(".password-input").prepend('<span class="show-password-input"></span>'),i(".show-password-input").click(function(){i(this).toggleClass("display-password"),i(this).hasClass("display-password")?i(this).siblings(['input[name^="password"]','input[type="password"]']).prop("type","text"):i(this).siblings('input[name^="password"]').prop("type","password")})});;
jQuery(function(r){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(f){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",data:{time:(new Date).getTime()},timeout:wc_cart_fragments_params.request_timeout,success:function(e){e&&e.fragments&&(r.each(e.fragments,function(e,t){r(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),r(document.body).trigger("wc_fragments_refreshed"))},error:function(){r(document.body).trigger("wc_fragments_ajax_error")}};function n(){r.ajax(e)}if(t){var i=null;r(document.body).on("wc_fragment_refresh updated_wc_div",function(){n()}),r(document.body).on("added_to_cart removed_from_cart",function(e,t,r){var n=sessionStorage.getItem(o);null!==n&&n!==undefined&&""!==n||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(r)}),r(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(n,864e5)}),r(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&n()}),r(window).on("pageshow",function(e){e.originalEvent.persisted&&(r(".widget_shopping_cart_content").empty(),r(document.body).trigger("wc_fragment_refresh"))});try{var c=r.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,w=(new Date).getTime();if(d<w)throw"Fragment expired";i=setTimeout(n,d-w)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";r.each(c,function(e,t){r(e).replaceWith(t)}),r(document.body).trigger("wc_fragments_loaded")}catch(f){n()}}else n();0<Cookies.get("woocommerce_items_in_cart")?r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),r(document.body).on("adding_to_cart",function(){r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()}),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.widgetsPreview&&wp.customize.widgetsPreview.WidgetPartial&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){n()})});;
jQuery( 'body' ).bind( 'wc_fragments_refreshed', function() {
			var jetpackLazyImagesLoadEvent;
			try {
				jetpackLazyImagesLoadEvent = new Event( 'jetpack-lazy-images-load', {
					bubbles: true,
					cancelable: true
				} );
			} catch ( e ) {
				jetpackLazyImagesLoadEvent = document.createEvent( 'Event' )
				jetpackLazyImagesLoadEvent.initEvent( 'jetpack-lazy-images-load', true, true );
			}
			jQuery( 'body' ).get( 0 ).dispatchEvent( jetpackLazyImagesLoadEvent );
		} );;
jQuery(document).ready(function() {

		var autoPopup 									= wwsObj.autoPopup;
		var pluginUrl 									= wwsObj.plugin_url;
		var isProduct 									= wwsObj.is_product;
		var currentPageURL 							= wwsObj.current_page_url;
		var currentPopupTemplate 				= wwsObj.current_popup_template;
		var isPopupDisplayOnCurrentPage = wwsObj.is_popup_display_on_current_page;
		var groupInvitationID     			= wwsObj.group_invitation_id;
		var adminAjaxURL          			= wwsObj.admin_ajax_url;
		var scrollLenght								= wwsObj.scroll_lenght;
		var autoPopupTime         			= wwsObj.auto_popup_time;
		var isGDPR											= wwsObj.is_gdpr;

		// Mobile detection
		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
		    BlackBerry: function() {
		        return navigator.userAgent.match(/BlackBerry/i);
		    },
		    iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    Opera: function() {
		        return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
		        return navigator.userAgent.match(/IEMobile/i);
		    },
		    any: function() {
		        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		    }
		};

		
		var wwsAutoPopupAudio = document.createElement('audio');
	      wwsAutoPopupAudio.setAttribute('src', pluginUrl + 'assets/public/mp3/sk-wws-popup-open-sound.mp3');
	      jQuery.get();
	      wwsAutoPopupAudio.addEventListener("load", function() {}, true);
	


	// popup button display by scroll lenght
	if ( scrollLenght != null ) {
		jQuery(document).scroll(function () {
		    var y = jQuery(window).scrollTop() + jQuery(window).height();
		    var documentHeight = jQuery(document).height() * scrollLenght / 100;
		    if (y >= documentHeight - 10 ) {
		        jQuery('.wws-popup-container').fadeIn();
		    } else {
		        jQuery('.wws-popup-container').fadeOut();
		    }
		});
	}
	



	// Popup toggle
	jQuery( document ).on( 'click', '.wws-popup__close-btn', function() {
		jQuery('.wws-popup').slideToggle();
		jQuery('.wws-gradient').hide();
		jQuery('.wws-popup').attr('data-wws-popup-status', 0);
	});
	jQuery( document ).on( 'click', '.wws-popup__open-btn', function() {
		jQuery('.wws-popup').slideToggle();
		if ( jQuery('.wws-popup').attr('data-wws-popup-status') == 0 ) {
			jQuery('.wws-popup').attr('data-wws-popup-status', 1);
			jQuery('.wws-gradient').show();
		} else {
			jQuery('.wws-popup').attr('data-wws-popup-status', 0);
			jQuery('.wws-gradient').hide();
		}
	});


	//	Auto popup
	if ( autoPopup == 1 
		&& sessionStorage.wwsAutoPopup != 1 
		&& jQuery( '.wws-popup' ).attr( 'data-wws-popup-status' ) == 0 ) {

		if ( jQuery( '.wws-popup' ).attr( 'data-wws-popup-status' ) == 0 ) {

			setTimeout( function() {
				if ( scrollLenght == null ) {
					wwsAutoPopupAudio.play();
				}
				jQuery( '.wws-popup' ).slideDown();
				jQuery('.wws-gradient').show();
				jQuery( '.wws-popup' ).attr( 'data-wws-popup-status', 1 );
				sessionStorage.wwsAutoPopup = 1;
			}, Number( autoPopupTime * 1000 ) );
		}
		
	}



	// Send message
	jQuery( document ).on( 'click', '.wws-popup__send-btn', function() {

		// If GDPR is Enable
		if ( isGDPR == '1' && jQuery('.wws-gdpr input').is(':checked') == false ) {
			jQuery( '.wws-gdpr > div' ).addClass('wws-shake-animation');
			setTimeout( function() { 
				jQuery( '.wws-gdpr > div' ).removeClass('wws-shake-animation');
			}, 300 );
			return;
		}


		var skWwsInput = jQuery('.wws-popup__input').val();
		var supportNumber = wwsObj.supportNumber;
		if ( skWwsInput == '' ) return;
		if ( isProduct == 1 ) {
			skWwsInput = currentPageURL + '%0A' + skWwsInput;
		}
		if ( isMobile.any() ) {
			window.open('https://api.whatsapp.com/send?phone=' + supportNumber + '&text=' + skWwsInput);
		} else {
			window.open('https://web.whatsapp.com/send?phone=' + supportNumber + '&text=' + skWwsInput);
		}
	} );


	// Group invitation click function
	jQuery( document ).on( 'click', '.wws-popup-group-invitation__button', function() {
		window.open('https://chat.whatsapp.com/' + groupInvitationID );
	});



	// User Analytics
	jQuery( document ).on( 'click', '.wws-popup__send-btn, .wws-popup-group-invitation__button', function() {
		var skWwsInput = jQuery('.wws-popup__input').val();
		if ( skWwsInput == '' ) return;

		jQuery.ajax({
			url: adminAjaxURL,
			type: 'post',
			data: { 
				'action' : 'wws_click_analytics',
				'message': skWwsInput,
			}
		})
	});

	jQuery( document ).on( 'click', '.wws-popup__support-person-link', function( event ) {



		// If GDPR is Enable
		if ( isGDPR == '1' && jQuery('.wws-gdpr input').is(':checked') == false ) {
			jQuery( '.wws-gdpr > div' ).addClass('wws-shake-animation');
			setTimeout( function() { 
				jQuery( '.wws-gdpr > div' ).removeClass('wws-shake-animation');
			}, 300 );
			event.preventDefault();
			return;
		}

		var skWwsInput = jQuery(this).attr('data-wws-pre-msg');
		jQuery.ajax({
			url: adminAjaxURL,
			type: 'post',
			data: { 
				'action' : 'wws_click_analytics',
				'message': skWwsInput,
			}
		})
	});



});

	;