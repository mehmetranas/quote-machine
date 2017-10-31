$(document).ready(function () {
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                $()
            });
            return this;
        }
    });

   $.ajax({
      method:'GET',
       url: "https://codepen.io/CzrNdlcc/pen/YrvZML.js",
       dataType:"json",
       success:function (data) {
           console.log(data.quotes[0].content);
       }
   });

     $(".js-next").click(function () {
         $(".quote").css("left","0");
     });

    $(".js-previous").click(function () {
        $(".quote").css("left","-100%");
    });


});