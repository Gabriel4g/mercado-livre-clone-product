const codePayment = document.querySelector("div#code-pix");
const buttonsCopyCodePayment = document.querySelectorAll("button.btn-copy-code-pix");

function copyCodePayment() {
    navigator.clipboard.writeText(codePayment.textContent);

    alert("Código de pagamento copiado!");
}

buttonsCopyCodePayment.forEach(btn => {
    btn.addEventListener("click", copyCodePayment);
});