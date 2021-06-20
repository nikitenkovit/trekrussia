(function () {
  const offset = 100;
  const scrollUp = document.querySelector(`.scroll-up`);
  const scrollUpSvgPath = document.querySelector(`.scroll-up__svg--path`);
  const pathLength = scrollUpSvgPath.getTotalLength();

  scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    scrollUpSvgPath.style.strokeDashoffset = pathLength - (getTop() * pathLength / height);
  };

  window.addEventListener(`scroll`, () => {
    updateDashoffset();

    if (getTop() > offset) {
      scrollUp.classList.add(`scroll-up--active`);
    } else {
      scrollUp.classList.remove(`scroll-up--active`);
    }
  });

  scrollUp.addEventListener(`click`, () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();