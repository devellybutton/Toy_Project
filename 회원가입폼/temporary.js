const containerBox = document.querySelector('#containerBox');
const containerRegister = document.querySelector('.containerRegister')
const input = document.querySelector("input");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');  // 비밀번호
const password2 = document.querySelector('#password2');  // 비밀번호 확인
const containerForm = document.querySelector('#containerForm')
const addressSearchBtn = document.querySelector('.address_search_button');  // 우편번호 찾기
const sendEmailVerify = document.querySelector('#send_email_verify');  // 이메일 인증 전송 버튼
const emailVerificationEnd = document.querySelector('#email_verification_end');   // 이메일 인증 완료 버튼

/* 유효성 검사 */
// 1. input 태그 유효성 검사 success
// ---> 테두리 색깔 초록색 변경
function showSuccess(input) {
    const containerControl = input.parentElement;
    containerControl.className = 'containerRegister success';
}

// 2. input 태그 유효성 검사 fail
// ---> input 태그 테두리 색깔 빨간색 변경
function showFail(input, message) {
    const containerControl = input.parentElement;
    containerControl.className = 'containerRegister fail';
    const small = containerControl.querySelector("small");
    small.innerText = message;
}

// 3. input 값에 데이터가 없을 때
function inputEmptyValueCheck(input) {
    if (input.value.trim()<=0) {
        showFail(input, "값을 입력해주세요.")
    }
}

// 4. 패스워드 일치 유무 검사
function passwordsValueMatchCheck(input1, input2) {
    if (input1.value !== input2. value) {
        showFail(input2, "비밀번호가 일치하지 않습니다.")
    } else if (input1 == input2) {
        showSuccess(input1);
        showSuccess(input2);
    }
}

// 5. 패스워드 유효 검사
function passwordValidCheck(input) {
    const re = /^[A-Za-z0-9!@#$%^&*()-_+=<>?]{8,16}$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showFail(input,"영문, 숫자, 특수문자를 조합하여 8-16자리를 입력해주세요.")
    }
}

// 6. 이메일 유효 검사
function emailCheck(input) {
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showFail(input,"이메일을 다시 확인해주세요.")
    }
}



containerForm.addEventListener('submit',function(e){
    e.preventDefault();
    inputEmptyValueCheck(input);
    passwordsValueMatchCheck(password1, password2);
    emailCheck(email);
})


// 이름
// /^[가-힣]{2,4}$/

// 연락처

// 주소

// 상세주소

// 이메일 주소

// 이메일 인증번호 확인

// 비밀번호



// 비밀번호 확인

