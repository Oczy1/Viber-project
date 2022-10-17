/* Проверка поддержки webp, добавление класса webp или по-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}


export function videoPoint() {
    var timeArray = [0, 6.8, 13.22, 20, 28.16, 36.16, 50.30, 57.13];

    var vid = document.getElementById("featured-video");
    vid.ontimeupdate = currentFeature;

    function currentFeature(e) {
      var x = vid.currentTime;

      for (var i = 0; i < timeArray.length; i++) {
        var time = i !== timeArray.length - 1 ?
          x >= timeArray[i] && x < timeArray[i + 1] : x >= timeArray[i];

        var el = $('.video-point' + (i + 1));
        if (!el.hasClass('active') && time) {
          $(".point").removeClass("active");
          el.addClass("active");
        }
      }

    }

    jQuery('.point').each(function (i, el) {
      $(this).on('click', function () {
        jQuery('.point').removeClass('active');
        var className = 'video-point' + i + 1;
        jQuery('.' + className).addClass('active');
        vid.currentTime = timeArray[i];
      });
    });
}




export function scrollclick() {
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset; //- document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }
}



export function parallax() {
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
        document.querySelectorAll(".object").forEach(function (move) {

            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value) / 250;
            var y = (e.clientY * moving_value) / 250;

            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
    }
}