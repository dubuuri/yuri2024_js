document.addEventListener('DOMContentLoaded', () => {
   // DOM 요소 가져오기
   const txt1 = document.querySelector('#txt1');
   const btAdds = document.querySelectorAll('.btAdd'); // All 인거 조심 !!
   const btDels = document.querySelectorAll('.btDel');
   const btChanges = document.querySelectorAll('.btChange');

   // 배열 만들기
   let arr = [];

   // 오브젝트 만들기
   let obj = {
      '사과' : '🍎',
      '바나나' : '🍌',
      '오렌지' : '🍊',
      '수박' : '🍉',
      '오이' : '🥒',
      '당근' : '🥕',
      '가지' : '🍆',
      '브로콜리' : '🥦'
   }

   // 추가버튼
   for (let bt of btAdds) {
      bt.addEventListener('click', () => {
         console.log(bt.textContent);

         // 배열을 사용할 때
         // push : 배열에 추가
         // if (bt.textContent == '사과') arr.push('🍎');
         // else if (bt.textContent == '바나나') arr.push('🍌');
         // else if (bt.textContent == '오렌지') arr.push('🍊');
         // else if (bt.textContent == '수박') arr.push('🍉');
         // console.log(arr);

         // 오브젝트 사용할 때
         arr.push(obj[bt.textContent]);

         txt1.value = arr.join(' ');
      });
   }

   // 삭제버튼 : 삭제하는 과일 나머지만 가지고 오기 !
   for (let bt of btDels) {
      bt.addEventListener('click', () => {

         const btkey = bt.textContent.replace('삭제', '');
         console.log(btkey); // 사과삭제 -> 사과

         let tm = arr.filter((item) => {return item != obj[btkey]});
         // obj 의 이모지니까 조심 !
         console.log(tm);

         // arr = arr.filter((item) => {return item != obj[btkey]});
         arr = arr.filter(item => item != obj[btkey]);
         txt1.value = arr.join(' ');

         // (item) 하나만 있으면 괄호 생략 가능
         // 두번째에 중괄호랑 return 삭제 가능 (중괄호를 할거면 return도 해야해)


      })
   }

   // 수정버튼
   for (let bt of btChanges) {
      bt.addEventListener('click', () => {
         const w1 = bt.textContent.split('→')[0];
         const w2 = bt.textContent.split('→')[1];
         // console.log(w1, w2);

         // let tm = arr.map((item) => {return item == obj[w1] ? obj[w2] : item});
         // txt1.value = tm.join(' ');
         arr = arr.map(item => item == obj[w1] ? obj[w2] : item);
         txt1.value = arr.join(' ');
         // map의 개수는 배열의 개수와 동일

      })
   }
});