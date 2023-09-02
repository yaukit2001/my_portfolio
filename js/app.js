$(document).ready(function () {
  // STICKY HEADER SCROLLING
  var isSticky = false;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();

    // Check if the user has scrolled back to the top
    if (currentScroll === 0) {
      isSticky = false;
      $("#header").removeClass("sticky");
    } else {
      // If the user is scrolling down and the header is not already sticky
      if (currentScroll > 0 && !isSticky) {
        isSticky = true;
        $("#header").addClass("sticky");
      }
    }
  });

  // TAB SWITCHING
  $(".tab-title").on("click", function () {
    $(".tab-title").removeClass("active");
    $(".tab-content").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".tab-content:eq(" + index + ")").addClass("active");
  });

  // Flip page
  var currentIndex = 0;
  var maxIndex = $(".single-page").length;
  var mimicArray = [];
  for (var i = 0; i < maxIndex; i++) {
    $(".booklet .single-page:nth-child(" + (i + 1) + ")").css(
      "z-index",
      maxIndex - i
    );
    mimicArray[i] = maxIndex - i;
  }

  $(".bxs-right-arrow").on("click", function () {
    if (currentIndex < maxIndex) {
      $(".booklet .single-page:nth-child(" + (currentIndex + 1) + ")").addClass(
        "flipped"
      );

      if (currentIndex > 0) {
        var position = mimicArray.indexOf(maxIndex);
        if (position !== -1 && position < mimicArray.length - 1) {
          var temp = mimicArray[position];
          mimicArray.splice(position, 1);
          mimicArray.splice(position + 1, 0, temp);

          var beforePosition = mimicArray.slice(0, position + 1);
          var afterPosition = mimicArray.slice(position + 1);
          beforePosition.sort(function (a, b) {
            return a - b;
          });
          afterPosition.sort(function (a, b) {
            return b - a;
          });

          mimicArray = beforePosition.concat(afterPosition);
          // console.log(mimicArray);
        }
      }
      currentIndex++;
    }
    $(".booklet .single-page").each(function (index) {
      $(this).css("z-index", mimicArray[index]);
    });
  });

  $(".bxs-left-arrow").on("click", function () {
    if (currentIndex >= 0) {
      if (
        $(".booklet .single-page:nth-child(" + currentIndex + ")").hasClass(
          "flipped"
        )
      ) {
        $(".booklet .single-page:nth-child(" + currentIndex + ")").removeClass(
          "flipped"
        );

        if (currentIndex > 0) {
          var position = mimicArray.indexOf(maxIndex);

          if (position !== -1 && position > 0) {
            var temp = mimicArray[position];
            mimicArray.splice(position, 1);
            mimicArray.splice(position - 1, 0, temp);

            var beforePosition = mimicArray.slice(0, position);
            var afterPosition = mimicArray.slice(position);
            beforePosition.sort(function (a, b) {
              return a - b;
            });
            afterPosition.sort(function (a, b) {
              return b - a;
            });

            mimicArray = beforePosition.concat(afterPosition);
          }
        }
        currentIndex--;
      }
    }
    $(".booklet .single-page").each(function (index) {
      $(this).css("z-index", mimicArray[index]);
    });
  });

  // Carousel

  // Function to initialize a carousel by its ID
  function initializeCarousel(carouselId) {
    var carousel = $("#" + carouselId);
    var carouselItems = carousel.find(".carousel-item");
    var carouselItemCount = carouselItems.length;
    var carouselItemWidth = carouselItems.width();
    var carouselWrapper = carousel.find(".carousel-wrapper");
    var nthIndex = 0;

    for (var i = 0; i < carouselItemCount; i++) {
      if (i == 0) {
        carousel
          .find(".carousel-bullet-container")
          .append($('<div class="carousel-bullet active"></div>'));
      } else {
        carousel
          .find(".carousel-bullet-container")
          .append($('<div class="carousel-bullet"></div>'));
      }
    }

    carousel.find(".carousel-bullet").on("click", function () {
      carousel.find(".carousel-bullet").removeClass("active");
      $(this).addClass("active");
      nthIndex = $(this).index();
      var movement = nthIndex * carouselItemWidth;
      carouselWrapper.css("transform", "translateX(" + -movement + "px)");
    });
  }

  // Initialize each carousel by calling initializeCarousel with the respective IDs
  initializeCarousel("carousel-1");
  initializeCarousel("carousel-2");
  initializeCarousel("carousel-3");

  // Scroll in to view
  $(".nav-about").click(function (e) {
    e.preventDefault();
    var destinationElement = $("#about").get(0);
    var destinationOffset =
      destinationElement.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({
      top: destinationOffset,
      behavior: "smooth",
    });
  });
  $(".nav-educational-journey").click(function (e) {
    e.preventDefault();
    var destinationElement = $("#educational-journey").get(0);
    var destinationOffset =
      destinationElement.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({
      top: destinationOffset,
      behavior: "smooth",
    });
  });
  $(".nav-industry-exposure").click(function (e) {
    e.preventDefault();
    var destinationElement = $("#industry-exposure").get(0);
    var destinationOffset =
      destinationElement.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({
      top: destinationOffset,
      behavior: "smooth",
    });
  });
  $(".nav-self-improvement").click(function (e) {
    e.preventDefault();
    var destinationElement = $("#self-improvement").get(0);
    var destinationOffset =
      destinationElement.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({
      top: destinationOffset,
      behavior: "smooth",
    });
  });
  $(".nav-contact").click(function (e) {
    e.preventDefault();
    var destinationElement = $("#contact").get(0);
    var destinationOffset =
      destinationElement.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({
      top: destinationOffset,
      behavior: "smooth",
    });
  });
  $(".nav-mobile-application").click(function (e) {
    e.preventDefault();
    var destinationElement = $("#mobile-application").get(0);
    var destinationOffset =
      destinationElement.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({
      top: destinationOffset,
      behavior: "smooth",
    });
  });
  $(".nav-web-application").click(function (e) {
    e.preventDefault();
    var destinationElement = $("#web").get(0);
    var destinationOffset =
      destinationElement.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({
      top: destinationOffset,
      behavior: "smooth",
    });
  });

  $('.menu-icon').on('click',function(){
    if($('.mobile-menu').hasClass('active')){
$('.mobile-menu').removeClass('active');
    }else{
      $('.mobile-menu').addClass('active');
    }
    
  });
});
