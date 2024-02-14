document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = document.getElementById('phoneNumber');
    const errorText = document.querySelector('#input_error2');

    phoneNumber.addEventListener('input', function() {
        validateInput(this.value);
    });

    phoneNumber.addEventListener('focus', function() {
        // Display error text only when input is in focus
        if (!isValidInput(this.value)) {
            errorText.style.visibility = 'visible';
            this.style.borderColor = 'red';
        }
    });

    phoneNumber.addEventListener('blur', function() {
        errorText.style.visibility = 'hidden';
        validateInput(this.value);
        this.style.borderColor = '';
    });

    function validateInput(value) {
        if (isValidInput(value)) {
            phoneNumber.classList.remove('invalid');
        } else {
            phoneNumber.classList.add('valid');
        }
    }

    function isValidInput(value) {
        const koreanRegex = /^010\d{8}$/;
        return koreanRegex.test(value);
    }
});