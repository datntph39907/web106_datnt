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
     setTimeout(function () { img1.style.opacity = '0'; 
     img2.style.opacity = '1'; hideImage();
     }, 8000); }
      let hideImage = function () { 
        setTimeout(function () { img2.style.opacity = '0'; 
        img1.style.opacity = '1'; showImage(); }, 8000); 
    }
     showImage();