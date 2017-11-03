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

    var quotes = [];

   $.ajax({
      method:'GET',
       url: "https://codepen.io/CzrNdlcc/pen/YrvZML.js",
       dataType:"json",
       success:function (data) {
           quotes = data.quotes;
       }
   });


   var index = 0;

   var change = function (class1,class2,quote) {
       if($("." + class2).length > 0){
           $("." + class2).hide().removeClass(class2).addClass(class1 + " not-transition").show();
       }

       $("." + class1 + " p").text(quote.content);
       $("." + class1 + " cite").text(quote.author);
       $(".js-show").addClass(class2).removeClass("js-show");
       $("." + class1).addClass("js-show").removeClass(class1 + " not-transition");
   };

    $(".js-next").click(function () {
        var quote = quotes[index];
        change("js-left","js-right",quote);
        index++;
        if(index>quotes.length-1) index = 0 ;
    });

    $(".js-previous").click(function () {
        var quote = quotes[index];
       change("js-right","js-left",quote);
       index--;
       if(index<0) index = quotes.length-1;
    });
});