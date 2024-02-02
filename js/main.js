document.addEventListener("DOMContentLoaded", function () {
    var cardholderInput = document.getElementById("cardholder");
    var cardNumberInput = document.getElementById("cardnumber");
    var cardMonthInput = document.getElementById("cardmonth");
    var cardYearInput = document.getElementById("cardyear");
    var cardCVCInput = document.getElementById("cardcvc");
    var formSubmitButton = document.getElementById("form_submit");
    var formSection = document.querySelector(".container__form");
    var thanksSection = document.querySelector(".thanks-section");

    cardholderInput.addEventListener("input", function () {
        var cardholderValue = cardholderInput.value;
        updateCardholder(cardholderValue);
    });

    cardNumberInput.addEventListener("input", function () {
        var cardNumberValue = cardNumberInput.value;
        updateCardNumber(cardNumberValue);
    });

    cardMonthInput.addEventListener("input", function () {
        var cardMonthValue = cardMonthInput.value;
        updateDateFields(cardMonthValue, cardYearInput.value);
    });

    cardYearInput.addEventListener("input", function () {
        var cardYearValue = cardYearInput.value;
        updateDateFields(cardMonthInput.value, cardYearValue);
    });

    cardCVCInput.addEventListener("input", function () {
        var cardCVCValue = cardCVCInput.value;
        updateCardCVC(cardCVCValue);
    });

    formSubmitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe (actualice la página)
        formSection.style.display = "none"; // Ocultar formulario
        thanksSection.style.display = "block"; // Mostrar sección de agradecimiento
    });

    function updateCardholder(value) {
        var cardNameElement = document.querySelector(".card__details_name");
        cardNameElement.textContent = value;
    }

    function updateCardNumber(value) {
        // Eliminar espacios existentes
        value = value.replace(/\s/g, "");

        // Agregar espacio cada 4 caracteres
        value = value.replace(/(.{4})/g, "$1 ");

        var cardNumberElement = document.querySelector(".card_number");
        cardNumberElement.textContent = value.trim();
    }

    function updateDateFields(monthValue, yearValue) {
        var cardDateElement = document.querySelector(".card__details_date");
        cardDateElement.textContent = monthValue + "/" + yearValue;
    }

    function updateCardCVC(value) {
        var cardCVCElement = document.querySelector(".card-back__cvc");
        cardCVCElement.textContent = value;
    }
});