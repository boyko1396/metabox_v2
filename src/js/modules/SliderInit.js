import Swiper, { Navigation } from 'swiper';

class SliderInit {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;
    Swiper.use([Navigation]);
    this.init();
  }

  init() {
    const sliderElement = document.querySelector(this.selector);
    if (sliderElement) {
      this.swiper = new Swiper(sliderElement, this.options);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const expertSlider = new SliderInit('.js-expert-slider-init', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.js-expert-slider-btn-next',
      prevEl: '.js-expert-slider-btn-prev',
    },
  });

  const reviewsSlider = new SliderInit('.js-reviews-slider-init', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.js-reviews-slider-btn-next',
      prevEl: '.js-reviews-slider-btn-prev',
    },
  });
});

export default SliderInit;