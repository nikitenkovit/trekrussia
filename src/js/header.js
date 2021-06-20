import {DeviceWidth} from "./constants";

(function () {
  const headerNavigation = document.querySelector(`.header__navigation`);
  const headerWhatsapp = document.querySelector(`.header__whatsapp`);
  const introSocial = document.querySelector(`.intro__social`);
  const headerWrapper = document.querySelector(`.header__wrapper`);
  const introWrapper = document.querySelector(`.intro__wrapper`);
  const headerToggleButton = document.querySelector(`.header__toggle`);
  const body = document.querySelector(`body`);
  const navigationLinks = document.querySelectorAll('.navigation__link');

  const createHeaderMobileMenuContainer = () => {
    const newElement = document.createElement(`div`);
    newElement.classList.add(`header__mobile-menu`);
    return newElement;
  };

  const toggleBody = () => {
    if (document.querySelector(`.header__mobile-menu--active`)) {
      body.style.position = `fixed`;
      body.style.top = `0`;
      body.style.left = `0`;
      body.style.width = `100%`;
    } else {
      body.style.position = `static`;
    }
  }

  const toggleToMobile = () => {
    body.prepend(createHeaderMobileMenuContainer())

    const mobileMenuContainer = document.querySelector(`.header__mobile-menu`);
    mobileMenuContainer.insertAdjacentElement(`beforeend`, headerNavigation);
    mobileMenuContainer.insertAdjacentElement(`beforeend`, headerWhatsapp);
    mobileMenuContainer.insertAdjacentElement(`beforeend`, introSocial);
  };

  const toggleToDesktop = () => {
    headerWrapper.insertAdjacentElement(`beforeend`, headerNavigation);
    headerWrapper.insertAdjacentElement(`beforeend`, headerWhatsapp);
    headerWrapper.insertAdjacentElement(`beforeend`, headerToggleButton);
    introWrapper.insertAdjacentElement(`beforeend`, introSocial);

    document.querySelector(`.header__mobile-menu`).remove();
  };

  const checkIsNeedToggleHeader = () => {
    const windowWidth = document.documentElement.clientWidth;
    const mobileMenuContainer = document.querySelector(`.header__mobile-menu`);

    if (windowWidth <= DeviceWidth.mobile && !mobileMenuContainer) {
      toggleToMobile();
    } else if (windowWidth >= DeviceWidth.tablet && mobileMenuContainer) {
      toggleToDesktop();
    }
  };

  checkIsNeedToggleHeader();

  window.addEventListener("resize", () => {
    checkIsNeedToggleHeader();
  });

  const handleToggleMobileMenu = () => {
    document.querySelector(`.header__mobile-menu`).classList.toggle(`header__mobile-menu--active`);
    headerToggleButton.classList.toggle(`header__toggle--active`);
    toggleBody();
  }

  headerToggleButton.addEventListener(`click`, handleToggleMobileMenu);

  navigationLinks.forEach((link) => {
    link.addEventListener(`click`, () => {
      if (document.querySelector(`.header__mobile-menu--active`)) {
        handleToggleMobileMenu();
      }
    })
  })
})();