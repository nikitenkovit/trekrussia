import './styles/normalize.css';
import './styles/custom-font.css';
import './styles/main.scss';

import './js/header';
import {ChiefSlider} from "./js/chiefSlider";

// инициализация слайдеров
document.addEventListener('DOMContentLoaded', function () {
  const comingTours = document.getElementById('coming-tours');

  if (comingTours) {
    new ChiefSlider(comingTours, {
      loop: true,
      autoplay: true,
      interval: 7000,
      refresh: true,
      swipe: true,
    });
  }


});