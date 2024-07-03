document.addEventListener('DOMContentLoaded', () => {
   const bt1 = document.querySelector('#bt1');
   const bt2 = document.querySelector('#bt2');
   const txt = document.querySelector('#txt');

   // let flag = ture;

   let a = '';
   txt.style.display = 'none';
   bt2.style.display = 'none';

   // '번호생성하기' 버튼 누를 때
   bt1.addEventListener('click', () => {

      // '번호생성하기' 버튼 안보이게
      bt1.style.display = 'none';
      // 박스 보이게
      txt.style.display = 'inline';
      bt2.style.display = 'inline';

      a = '';

      for (let i = 0; i < 6; i++) {
         const n = Math.floor(Math.random() * 45) + 1;
         a = a + ' ' + String(n);
         // console.log(a);
      }
      // 박스에 6개 숫자 출력
      txt.value = a;

      bt2.addEventListener('click', () => {
         bt1.style.display = 'inline';
         txt.style.display = 'none';
         bt2.style.display = 'none';
      })
   })
})