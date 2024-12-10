(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
// تغيير اللوجو عند السحب مع دعم جميع الأحجام والزووم
window.addEventListener('scroll', function () {
    const navbarLogo = document.getElementById('navbarLogo');
    const isSmallScreen = window.innerWidth <= 768 || document.documentElement.clientWidth <= 768; // التحقق من العرض الفعلي مع الزووم
    
    if (window.scrollY > 50) {
        // إذا كان السحب لأسفل
        if (isSmallScreen) {
            navbarLogo.src = 'img/Maqina\'s signature2.png'; // لوجو يناسب الخلفية البيضاء
        } else {
            navbarLogo.src = 'img/Maqina\'s signature2.png'; // اللوجو الثاني
        }
        navbarLogo.style.height = '40px'; // تصغير الحجم
    } else {
        // إذا لم يكن هناك سحب
        if (isSmallScreen) {
            navbarLogo.src = 'img/Maqina\'s signature2.png'; // نفس اللوجو الغامق
        } else {
            navbarLogo.src = 'img/Maqina\'s signature.png'; // اللوجو الأصلي
        }
        navbarLogo.style.height = '50px'; // إعادة الحجم
    }
});

// التحقق عند تحميل الصفحة (في حالة بدأ المستخدم بزوم معين)
document.addEventListener('DOMContentLoaded', function () {
    const navbarLogo = document.getElementById('navbarLogo');
    const isSmallScreen = window.innerWidth <= 768 || document.documentElement.clientWidth <= 768; // التحقق من العرض الفعلي مع الزووم

    if (window.scrollY > 50) {
        // إذا بدأ السحب فور التحميل
        if (isSmallScreen) {
            navbarLogo.src = 'img/Maqina\'s signature2.png'; // لوجو غامق
        } else {
            navbarLogo.src = 'img/Maqina\'s signature2.png'; // اللوجو الثاني
        }
        navbarLogo.style.height = '40px';
    } else {
        // إذا لم يبدأ بالسحب
        if (isSmallScreen) {
            navbarLogo.src = 'img/Maqina\'s signature2.png'; // لوجو غامق
        } else {
            navbarLogo.src = 'img/Maqina\'s signature.png'; // اللوجو الأصلي
        }
        navbarLogo.style.height = '50px';
    }
});

    
})(jQuery);

