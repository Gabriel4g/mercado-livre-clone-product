const formNewCreditCard = document.querySelector("form#form-new-credit-card");
const inputsForm = document.querySelectorAll("form#form-new-credit-card input");
const listInputsForm = Array.from(inputsForm);
const buttonSubmitForm = formNewCreditCard.querySelector("button#submit-form-button");

formNewCreditCard.addEventListener("submit", (e) => {
    for(let i = 0; i < listInputsForm.length; i++) {
        if(!listInputsForm[i].value) {
            e.preventDefault();
            listInputsForm[i].classList.add("red-input");
            listInputsForm[i].placeholder = "Preencha este campo!";
        }

        else {
            console.log("hahahahha");
        }
    }
});