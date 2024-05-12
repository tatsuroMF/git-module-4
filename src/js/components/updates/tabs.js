export const UseTabs = () => {
  const TabBtn = document.querySelectorAll(".quality__button");
  const tabItem = document.querySelectorAll(".quality-tab");
  TabBtn.forEach(function (e) {
    e.addEventListener("click", () => {
      let currentBtn = e;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains("quality__button--active")) {
        TabBtn.forEach((e) => {
          e.classList.remove("quality__button--active");
        });
        tabItem.forEach((e) => {
          e.classList.remove("quality-tab--active");
        });
        currentBtn.classList.add("quality__button--active");
        currentTab.classList.add("quality-tab--active");
      }
    });
  });
};
