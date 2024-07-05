document.addEventListener('DOMContentLoaded', () => {
   // DOM 요소 가져오기
   const lotto = document.querySelector('#lotto');
   const bt = document.querySelector('#bt');

   // 로또 번호 저장
   let arr = [];

   bt.addEventListener('click', () => {
      // 배열 초기화
      arr = [];
      // arr.length = 0;

      // 로또 번호 생성
      while (arr.length < 7) {
         const n = Math.floor(Math.random() * 45) + 1;

         if (!arr.includes(n)) arr.push(n);
         // console.log(arr);
      }
      
      // 로또 번호 정렬
      arr.sort(); // 문자열 정렬 -> 숫자에서는 1의 자리만 체크
      console.log(arr); // [13, 2, 26, 30, 31, 35, 43]

      arr.sort((a, b) => a - b);
      console.log(arr);

      let tm = arr.map(item => `<span class="sp${Math.floor(item / 10)}">${item}</span>`);
      tm.splice(6, 0, '<span id="spplus">+</span>');
      lotto.innerHTML = tm.join(' ');

   });
});

// value 는 input 이나 form 에 사용
// textContent 는 HTML에 적혀있는거
// innerHTML 은 살짝 태그도 들어가는 느낌