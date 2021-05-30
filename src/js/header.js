import {DeviceWidth} from "./constants";

(function () {
  const headerNavigation = document.querySelector(`.header__navigation`);
  const headerWhatsapp = document.querySelector(`.header__whatsapp`);
  const introSocial = document.querySelector(`.intro__social`);
  const headerWrapper = document.querySelector(`.header__wrapper`);
  const introWrapper = document.querySelector(`.intro__wrapper`);
  const headerToggleButton = document.querySelector(`.header__toggle`);

  const createHeaderMobileMenuContainer = () => {
    const newElement = document.createElement(`div`);
    newElement.classList.add(`header__mobile-menu`);
    return newElement;
  };

  const toggleToMobile = () => {
    document.querySelector(`body`).prepend(createHeaderMobileMenuContainer())

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
})();