import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
export const useIntelTel = () => {
  const input = document.querySelector("#phone");
  intlTelInput(input, {
    geoIpLookup: (callback) => {
      fetch("https://ipapi.co/json")
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback("us"));
    },
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
  /*--------------------------------------------------------------------------*/
  const Inputs = document.querySelectorAll(".getStarted__input");
  const form = document.querySelector(".getStarted-form");
  const InputPhone = document.querySelector(".getStarted__input-email--2");
  form.addEventListener("submit", inputValidation);
  
  function inputValidation(event) {
    let hasError = false;
  
    Inputs.forEach(input => {
      if (input.value === "") {
        input.classList.add("error");
        hasError = true;
      } else {
        input.classList.remove("error");
      }
    });
  
    if (isNaN(InputPhone.value)) {
      InputPhone.classList.add("error");
      hasError = true;
    } else {
      InputPhone.classList.remove("error");
    }
  
    if (hasError) {
      event.preventDefault();
    } 
  }
};
