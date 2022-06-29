export const tabs = () => {
  const tabsLink = document.querySelectorAll('.aside__list-link');
  const tabsContent = document.querySelectorAll('.board__items');

  tabsLink.forEach((item, i) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('aside__list-link--active')) {

      } else {
        tabsLink.forEach((item, i) => {
          item.classList.remove('aside__list-link--active');
          tabsContent[i].classList.remove('board__items--active');
        });
        this.classList.add('aside__list-link--active');
        tabsContent[i].classList.add('board__items--active');
      }
    });
  });
}