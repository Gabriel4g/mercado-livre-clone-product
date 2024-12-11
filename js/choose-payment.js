const form = document.querySelector("form#form-payment");
const btnSubmit = form.querySelector("button#btn-continue-choose-payment");
const allInputsRadio = form.querySelectorAll("input[type='radio']");

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const listInputsRadio = Array.from(allInputsRadio);

    if(listInputsRadio[0].checked) {
        window.location.href = "form-new-credit-card.html";
    }

    else if(listInputsRadio[1].checked) {
        window.location.href = "pay-product.html";
    }
});