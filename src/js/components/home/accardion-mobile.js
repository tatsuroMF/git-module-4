export const useAccardion = () => {
  const accordionBtns = document.querySelectorAll(".footer__item-tittle");
  const accordionLists = document.querySelectorAll(".footer__nav-list");

  accordionBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
      let content = event.currentTarget.nextElementSibling;
      let isCollapsed = content.style.maxHeight === '';
      let isActive = content.classList.contains('footer-nav--active');


      accordionLists.forEach(list => {
        list.style.maxHeight = null;
        list.classList.remove('footer-nav--active');
      });

      if (isCollapsed) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('footer-nav--active');     
      } else {
        content.style.maxHeight = null;
        content.classList.remove('footer-nav--active');
      }
    });
  });
};
