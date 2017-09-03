$(function(){
	var carouselList = $("#carousel ul");
	slideWidth = 1280;

    var addInterval = setInterval(function() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        carouselList.animate({'marginLeft':-1280}, 2000, moveFirstSlide);

        function moveFirstSlide() {
            lastItem.after(firstItem);
            carouselList.css({marginLeft:0});
        };
    }, 3000);

	var leftButton = $('#carousel').find('i').first();
	var rightButton = $('#carousel').find('i').last();

   $(rightButton).click(function() {
	   var firstItem = carouselList.find("li:first");
	   var lastItem = carouselList.find("li:last");
	   function moveFirstSlide() {
		   lastItem.after(firstItem);
		   carouselList.css({marginLeft:0});
	   };
	   carouselList.animate({'marginLeft':-slideWidth}, 1000, moveFirstSlide);
	   function myStopFunction() {
		clearInterval(addInterval);
	}
	   myStopFunction();
   });


   $(leftButton).click(function() {
	   var firstItem = carouselList.find("li:first");
	   var lastItem = carouselList.find("li:last");
	   firstItem.before(lastItem);
	   carouselList.css({marginLeft:-slideWidth});
	   carouselList.animate({'marginLeft':0}, 1000);
   });
});
