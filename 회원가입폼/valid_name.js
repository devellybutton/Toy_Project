document.addEventListener('DOMContentLoaded', function() {
    const userNameInput = document.getElementById('userName');
    const errorText = document.querySelector('#input_error1');

    userNameInput.addEventListener('input', function() {
        validateInput(this.value);
    });

    userNameInput.addEventListener('focus', function() {
        if (!isValidInput(this.value)) {
            errorText.style.visibility = 'visible';
            this.style.borderColor = 'red';
        }
    });

    userNameInput.addEventListener('blur', function() {
        errorText.style.visibility = 'hidden';
        validateInput(this.value);
        this.style.borderColor = '';
    });

    function validateInput(value) {
        if (isValidInput(value)) {
            userNameInput.classList.remove('invalid');
        } else {
            userNameInput.classList.add('valid');
        }
    }

    function isValidInput(value) {
        const koreanRegex = /^[가-힣]{2,4}$/;
        return koreanRegex.test(value);
    }
});