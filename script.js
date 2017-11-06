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

    var onLoad = function (quote) {
        $(".js-show p").text(quote.content)
        $(".js-show cite").text(quote.author)
    };

    $.ajax({
      method:'GET',
       url: "https://codepen.io/CzrNdlcc/pen/YrvZML.js",
       dataType:"json",
       success:function (data) {
           quotes = data.quotes;
           onLoad(quotes[0]);

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

    $(".js-next").on("click", function () {
        index++;
        var quote = quotes[index];
        change("js-left","js-right",quote);
        if(index>quotes.length-1) index = 0 ;
    });

    $(".js-previous").on("click", function () {
        index--;
        var quote = quotes[index];
        change("js-right","js-left",quote);
        if(index<0) index = quotes.length-1;
    });

    $(".social i").click(function () {
       var text = "https://twitter.com/intent/tweet?text=" + $(".js-show p").text() + " (" + $(".js-show cite").text() + ")";
        open(text,"_blank");
    });

});