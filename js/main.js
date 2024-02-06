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
        if (!/^[A-Za-z\s]+$/.test(cardholderValue)) {
            cardholderInput.nextElementSibling.classList.add("show");
        } else {
            cardholderInput.nextElementSibling.classList.remove("show");
            updateCardholder(cardholderValue);
        }
    });

    cardNumberInput.addEventListener("input", function () {
        var cardNumberValue = cardNumberInput.value;
        // Eliminar espacios en blanco de la entrada
        cardNumberValue = cardNumberValue.replace(/\s/g, "");
        if (!/^\d+$/.test(cardNumberValue)) {
            cardNumberInput.nextElementSibling.classList.add("show");
        } else {
            cardNumberInput.nextElementSibling.classList.remove("show");
            // Formatear el número de tarjeta con espacios cada 4 dígitos
            var formattedCardNumber = cardNumberValue.replace(/(.{4})/g, "$1 ").trim();
            updateCardNumber(formattedCardNumber);
        }
    });

    cardMonthInput.addEventListener("input", function () {
        var cardMonthValue = cardMonthInput.value;
        if (!/^\d{1,2}$/.test(cardMonthValue)) {
            cardMonthInput.nextElementSibling.classList.add("show");
        } else {
            cardMonthInput.nextElementSibling.classList.remove("show");
        }
        updateDateFields(cardMonthValue, cardYearInput.value);
    });

    cardYearInput.addEventListener("input", function () {
        var cardYearValue = cardYearInput.value;
        if (!/^\d{2}$/.test(cardYearValue)) {
            cardYearInput.nextElementSibling.classList.add("show");
        } else {
            cardYearInput.nextElementSibling.classList.remove("show");
        }
        updateDateFields(cardMonthInput.value, cardYearValue);
    });

    cardCVCInput.addEventListener("input", function () {
        var cardCVCValue = cardCVCInput.value;
        if (!/^[A-Za-z0-9]+$/.test(cardCVCValue)) {
            cardCVCInput.nextElementSibling.classList.add("show");
        } else {
            cardCVCInput.nextElementSibling.classList.remove("show");
            updateCardCVC(cardCVCValue);
        }
    });

    formSubmitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe (actualice la página)
        // Validar el formulario antes de enviarlo
        var isValid = validateForm();
        if (isValid) {
            formSection.style.display = "none"; // Ocultar formulario
            thanksSection.style.display = "block"; // Mostrar sección de agradecimiento
        }
    });

    function validateForm() {
        var isValid = true;
        // Validar cada campo del formulario
        if (!/^[A-Za-z\s]+$/.test(cardholderInput.value)) {
            cardholderInput.nextElementSibling.classList.add("show");
            isValid = false;
        }
        var cardNumberValue = cardNumberInput.value.replace(/\s/g, "");
        if (!/^\d+$/.test(cardNumberValue)) {
            cardNumberInput.nextElementSibling.classList.add("show");
            isValid = false;
        }
        if (!/^\d{1,2}$/.test(cardMonthInput.value)) {
            cardMonthInput.nextElementSibling.classList.add("show");
            isValid = false;
        }
        if (!/^\d{2}$/.test(cardYearInput.value)) {
            cardYearInput.nextElementSibling.classList.add("show");
            isValid = false;
        }
        if (!/^[A-Za-z0-9]+$/.test(cardCVCInput.value)) {
            cardCVCInput.nextElementSibling.classList.add("show");
            isValid = false;
        }
        return isValid;
    }

    function updateCardholder(value) {
        var cardNameElement = document.querySelector(".card__details_name");
        cardNameElement.textContent = value;
    }

    function updateCardNumber(value) {
        var cardNumberElement = document.querySelector(".card_number");
        cardNumberElement.textContent = value;
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