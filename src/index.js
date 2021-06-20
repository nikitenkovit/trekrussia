// стили
import './styles/normalize.css';
import './styles/custom-font.css';
import './styles/main.scss';
// импорт js модулей
import './js/header';
import {ChiefSlider} from "./js/chiefSlider";
import {phoneMask} from "./js/phone-mask";

// инициализация слайдеров
document.addEventListener('DOMContentLoaded', () => {
  const comingTours = document.getElementById('coming-tours');
  const instructors = document.getElementById('instructors');
  const reviews = document.getElementById('reviews');

  if (comingTours) {
    new ChiefSlider(comingTours, {
      loop: true,
      autoplay: true,
      interval: 7000,
      refresh: true,
      swipe: true,
    });
  }
  if (instructors) {
    new ChiefSlider(instructors, {
      loop: false,
      autoplay: false,
      refresh: true,
      swipe: true,
    });
  }
  if (reviews) {
    new ChiefSlider(reviews, {
      loop: false,
      autoplay: false,
      refresh: true,
      swipe: true,
    });
  }
});

// инициализация маски телефона
phoneMask();