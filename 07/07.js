document.addEventListener('DOMContentLoaded', () => {
    // DOM 요소 가져오기
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const bt1 = document.querySelector('#bt1');
    const bt2 = document.querySelector('#bt2');

    // 회문 확인
    bt1.addEventListener('click', (e) => {
        e.preventDefault(); // form이 존재하니까

        if (txt1.value == '') return;

        console.log(txt1.value); // 문자열 내용 가져오기
        console.log(txt1.value.length); // 문자열 글자수 확인
        console.log(txt1.value.charAt(0)); // 문자열 접근 (2번째 글자)
        for (let c of txt1.value) { // 문자열 모두 순회
            console.log(c);
        }

        // 문자열 뒤집기 1 : 반복문으로
        let tm = '';
        for (let i = txt1.value.length - 1; i >= 0; i--) {
            tm = tm + txt1.value[i];
        }
        console.log(tm);

        // tm = txt1.value.split();
        // console.log(tm); // ['부산역']

        // tm = txt1.value.split('');
        // console.log(tm); // ['부', '산', '역']

        // tm = txt1.value.split('').reverse();
        // console.log(tm); // ['역', '산', '부']

        // tm = txt1.value.split('').reverse().join();
        // console.log(tm); // 역,산,부

        // tm = txt1.value.split('').reverse().join('');
        // console.log(tm); // 역산부

        tm = txt1.value.split('').reverse().join('');
        console.log(tm);

        // 문자열 변경 => 공백제거로 사용
        let txt = txt1.value.replaceAll(' ', '');
        console.log(txt);

        // 문자열 뒤집기 1 : 함수로
        tm = txt.split('').reverse().join('');
        console.log(tm);

        // 회문인지 확인
        if (txt == tm) {
            txt2.value = '회문입니다.'
        }
        else {
            txt2.value = '회문이 아닙니다.'
        }

    })


    // 숫자 합계
    bt2.addEventListener('click', (e) => {
        e.preventDefault();

        if (txt1.value == '') {
            alert('글자를 입력하세요.');
            txt1.focus();
            return;
        }

        let sum = 0;
        for (let c of txt1.value) {
            if (!isNaN(c)) { // 숫자인지 확인 : 숫자이면 isNaN() 결과는 false
                sum = sum + parseInt(c);
            }
        }
        txt2.value = sum;
    })

})