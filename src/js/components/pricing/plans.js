export const Usepricing = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterPrice = document.querySelector('[data-price="enterPrice"]');

  const priceList = {
    starter: {
      default: 100,
      added: 20,
    },
    popular: {
      default: 1400,
      added: 280,
    },
    enterPrice: {
      default: 2520,
      added: 420,
    },
  };
  const setDefaultPrices = () =>{
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterPrice.textContent = priceList.enterPrice.default;
  }
  const dayInMonth = 30
  const setPricesAdded = () => {
    starterPrice.textContent = Math.floor((priceList.starter.default / dayInMonth) + priceList.starter.added);
    popularPrice.textContent = Math.floor((priceList.popular.default / dayInMonth) + priceList.popular.added);
    enterPrice.textContent = Math.floor((priceList.enterPrice.default / dayInMonth) + priceList.enterPrice.added);
  };
  switcher.addEventListener("click", () => {
    if(switcher.checked){
        setPricesAdded() 
    }else{
        setDefaultPrices()
    } 
  });
};
