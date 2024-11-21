// Global variables and configurations
// const globals = {
//     isLoading: true,
//     windowWidth: window.innerWidth,
//     windowHeight: window.innerHeight,
//     scrollTop: 0
// };

// Initialize Locomotive Scroll
let locoScroll;
function initLocomotiveScroll() {
 const locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });
    // window.addEventListener('resize', () => {
    //     scroll.update();
    // });
    // Update ScrollTrigger on scroll
    // locoScroll.on('scroll', ScrollTrigger.update);

    // Tell ScrollTrigger to use these proxy methods
    // ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    //     scrollTop(value) {
    //         return arguments.length
    //             ? locoScroll.scrollTo(value, 0, 0)
    //             : locoScroll.scroll.instance.scroll.y;
    //     },
    //     getBoundingClientRect() {
    //         return {
    //             top: 0,
    //             left: 0,
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //         };
    //     }
    // });
}

// Loader Animation
function initLoader() {
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelector('.loader-text');
    const tl = gsap.timeline();

    tl.to(loaderText, {
        duration: 1.5,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'power4.inOut'
    })
        .to(loader, {
            duration: 1.5,
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
            ease: 'power4.inOut'
        })
        .set(loader, { display: 'none' });

    return tl;
}

// Initialize GSAP animations
// function initAnimations() {
//     // Hero section animation
//     gsap.from('.hero-title', {
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         ease: 'power4.out',
//         scrollTrigger: {
//             trigger: '.hero-title',
//             scroller: '[data-scroll-container]'
//         }
//     });

//     // Product cards animation
//     gsap.utils.toArray('.product-card').forEach((card, i) => {
//         gsap.from(card, {
//             y: 50,
//             opacity: 0,
//             duration: 0.8,
//             delay: i * 0.1,
//             ease: 'power3.out',
//             scrollTrigger: {
//                 trigger: card,
//                 scroller: '[data-scroll-container]',
//                 start: 'top bottom-=100',
//             }
//         });
//     });

//     // Category section animation
//     gsap.from('.category-card', {
//         scale: 0.8,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: 'back.out(1.7)',
//         scrollTrigger: {
//             trigger: '.categories',
//             scroller: '[data-scroll-container]',
//             start: 'top center'
//         }
//     });
// }

const modalnewSheltter = {
    modalClose() {
        // modal variables
        const modal = document.querySelector('[data-modal]');
        const modalCloseBtn = document.querySelector('[data-modal-close]');
        const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

        // modal function
        const modalCloseFunc = function () { modal.classList.add('closed') }

        // modal eventListener
        // modalCloseOverlay.addEventListener('click', modalCloseFunc);
        // modalCloseBtn.addEventListener('click', modalCloseFunc);
    },
    mobilenavbar() {
        // mobile menu variables
        const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
        const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
        const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
        const overlay = document.querySelector('[data-overlay]');

        for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

            // mobile menu function
            const mobileMenuCloseFunc = function () {
                mobileMenu[i].classList.remove('active');
                overlay.classList.remove('active');
            }

            mobileMenuOpenBtn[i].addEventListener('click', function () {
                mobileMenu[i].classList.add('active');
                overlay.classList.add('active');
            });

            mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
            overlay.addEventListener('click', mobileMenuCloseFunc);

        }


    },
    accooridanMobileNav(){
        // accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
    }
}
// Product functions
const heroSection = {
    slider() {
        $('.luxury-slider').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000, // 5 seconds per slide
            smartSpeed: 800, // Smooth transition speed
            animateOut: 'fadeOut', // Fade effect
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                }
            }
        });
    },

    initProductSort() {
        $(document).ready(function () {
            var $grid = $('.product-grid').isotope({
              itemSelector: '.product-item',
              layoutMode: 'fitRows'
            });
      
            // Filter items on button click
            $('.filter-button').on('click', function () {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
              $('.filter-button').removeClass('active');
              $(this).addClass('active');
            });
          });
    },

    initQuickView() {
        // Quick view modal logic
    },

    initProductGallery() {
        // Product gallery logic
    }
};

// Cart functions
const cartFunctions = {
    initProductSort() {
        $(document).ready(function () {
            var $grid = $('.product-grid').isotope({
              itemSelector: '.product-item',
              layoutMode: 'fitRows'
            });
      
            // Filter items on button click
            $('.filter-button').on('click', function () {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
              $('.filter-button').removeClass('active');
              $(this).addClass('active');
            });
          });
    },
    productNewarivalcarousal(){
        $(".productnewarival").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            responsive: {
              0: {
                items: 1.1,
              },
              576: {
                items: 2,
              },
              768: {
                items: 3,
              },
              1024: {
                items: 4,
              },
            },
          });
    },
    QuantityControl(){
          // Quantity controls
          const quantityInput = document.querySelector('.quantity-input');
          const decreaseBtn = document.querySelector('.quantity-btn:first-child');
          const increaseBtn = document.querySelector('.quantity-btn:last-child');
  
          decreaseBtn.onclick = function() {
              let value = parseInt(quantityInput.value);
              if (value > 1) quantityInput.value = value - 1;
          };
  
          decreaseBtn.onclick = function() {
              let value = parseInt(quantityInput.value);
              quantityInput.value = value + 1;
          };
    },
    SizeOptionSelection(){
        document.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
            });
        });
    }
};

// Form handling
const videoplay = {
    initLazyLoad() {
        var lazyLoadInstance = new LazyLoad({ 
            elements_selector: ".lazy",
          });
    },
    // initPlayVideoInview() {
    //     let allVideoDivs = gsap.utils.toArray('.playpauze');
      
    //     allVideoDivs.forEach((videoDiv) => {
    //       let videoElem = videoDiv.querySelector('video');
          
    //       ScrollTrigger.create({
    //         trigger: videoElem,
    //         start: '0% 120%',
    //         end: '100% -20%',
    //         onEnter: () => videoElem.play(),
    //         onEnterBack: () => videoElem.play(),
    //         onLeave: () => videoElem.pause(),
    //         onLeaveBack: () => videoElem.pause(),
    //       });
    //     });
    // },
    initPlayVideoInview(){
        const productCards = document.querySelectorAll('.product_videoWrapper');
      
        // Add hover event listeners to each card
        productCards.forEach(card => {
          const video = card.querySelector('.product-video');
          
          // Play video on hover
          card.addEventListener('mouseenter', () => {
            video.play();
          });
          
          // Pause video when mouse leaves
          card.addEventListener('mouseleave', () => {
            video.pause();
            // Optional: Reset video to start
            // video.currentTime = 0;
          });
        });
    },
    
   PlayVideoCarousal(){
    $(".productVideoCarousal").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1.1,
            loop: true,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
        },
      });
    }
};
const productdetails={
    productimageChange(){
        var MainImage = document.getElementById("MainImage");
    var smallImgCols = document.getElementsByClassName("small-img-col");

    for (let i = 0; i < smallImgCols.length; i++) {
        smallImgCols[i].onclick = function() {
            // Change the main image source
            MainImage.src = smallImgCols[i].querySelector(".small-img").src;

            // Remove active class from all small-img-col elements
            for (let j = 0; j < smallImgCols.length; j++) {
                smallImgCols[j].classList.remove("active");
            }

            // Add active class to the clicked small-img-col
            smallImgCols[i].classList.add("active");
        }
    }
    }
}
// Barba.js transitions
function initPageTransitions() {
    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.5
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5
                });
            }
        }],
        // views: [{
        //     namespace: 'home',
        //     beforeEnter() {
        //         initAnimations();
        //     }
        // }, {
        //     namespace: 'products',
        //     beforeEnter() {
        //         productFunctions.initProductFilter();
        //         productFunctions.initProductSort();
        //     }
        // }]
    });
}

// Utility functions
const utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    isMobile() {
        return window.innerWidth <= 768;
    }
};

// Event listeners
function initEventListeners() {
    window.addEventListener('resize', utils.debounce(() => {
        globals.windowWidth = window.innerWidth;
        globals.windowHeight = window.innerHeight;
        // locoScroll.update();
    }, 250));
}

// Initialize everything when document is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Locomotive Scroll
    // initLocomotiveScroll();

    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Show loader first
    const loaderTimeline = initLoader();

    // After loader completes, initialize everything else
    loaderTimeline.then(() => {
        // initAnimations();
        // initPageTransitions();
        initEventListeners();

        // Initialize product functions
        modalnewSheltter.modalClose();
        modalnewSheltter.mobilenavbar();
        modalnewSheltter.accooridanMobileNav();
        heroSection.slider();
        

        // Initialize cart functions
        cartFunctions.initProductSort();
        cartFunctions.productNewarivalcarousal();
        // cartFunctions.QuantityControl();
        cartFunctions.SizeOptionSelection();

        videoplay.initLazyLoad();
        videoplay.initPlayVideoInview();
        videoplay.PlayVideoCarousal();
        productdetails.productimageChange();

    });
});