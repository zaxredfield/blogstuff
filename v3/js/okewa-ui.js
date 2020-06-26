jQuery(function ($) {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();
    $('#okewa-floating_popup .okewa-chat .okewa-chat_opening .okewa-timestamp').html(time);
    $('.offline').click(function(e) {
      e.preventDefault();
    });
    $(document).ready(function() {
      if ($(window).width() < 768) {
    	$("#okewa-floating_cta, .open-wa, .open-wa a").click(function() {
    	  var heightHeader = $('#okewa-floating_popup .okewa-multiple_cs .okewa-header').outerHeight();
    	  $('#okewa-floating_popup .okewa-multiple_cs .okewa-chat').height('calc(100vh - ' + heightHeader + 'px)');
    	});
      }
    });
});