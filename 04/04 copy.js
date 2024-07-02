/*
1. DOM 생성되면 img & button 요소를 가져오기
2. button 클릭되는 경우를 찾기
3. img의 src 속성을 변경
   - 랜덤수를 발생 -> 해당 랜덤수의 이미지 가져오기
*/

// 1. DOM 생성되면 img & button 요소를 가져오기
document.addEventListener('DOMContentLoaded', () => {
   // img & button 요소 가져오기
   const img = document.querySelector('#divContent img');
   const bt = document.querySelector('#divContent button');

   // 2. button 클릭되는 경우를 찾기
   bt.addEventListener('click', () => {
      // (1~6 까지의) 랜덤수를 발생
      const n = Math.floor(Math.random() * 6) + 1;
      console.log(`${n}.png`); // 백틱 문자열 따옴표가 아니라 tap 위의 물결표시 !!

      // 3. img의 src 속성을 변경
      img.setAttribute('src', `./img/${n}.png`)
      
      
   });

});