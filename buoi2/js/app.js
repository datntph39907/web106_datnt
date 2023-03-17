$(document).ready(function () {
  if (window.innerWidth <= 768) {
    $(".flext-cmt").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true
    });
  }
  window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 768) {
      $(".flext-cmt").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    } else {
      if ($(".flext-cmt").hasClass('slick-initialized')) {
        $(".flext-cmt").slick('unslick');
      }
    }
  });
  

  $('#myModal').modal('show');
  $('.regular').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 650,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.dg-store').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
 

});
function changeImage(element, imagePath) {
  element.src = imagePath;
}

function changeImageBack(element, imagePath) {
  element.src = imagePath;
}
function menu() {
  var x = document.getElementById("menuMB");

  if (x.className === "menu-2") {
    x.className += " show";
  } else {
    x.className = "menu-2";
  }
}
let imgBanner = document.querySelector('.img-banner');
let img1 = document.querySelector('.img-1 img');
let img2 = document.querySelector('.img-2 img');
let showImage = function () {
  setTimeout(function () {
    img1.style.opacity = '0';
    img2.style.opacity = '1'; hideImage();
  }, 8000);
}
let hideImage = function () {
  setTimeout(function () {
    img2.style.opacity = '0';
    img1.style.opacity = '1'; showImage();
  }, 8000);
}
showImage();


