// // 문서를 계속 감시해
// // 이 함수를 사용할 때는 2개의 인수 사용 - 뭐가 일어났을 때, 어떻게 할지
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("안녕!!")
// }) ;

// 위에 function 이랑 => 랑 동일
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("화살표 함수!!");

    // 변수 선언
    // const msg = document.getElementById("msg"); // 안바뀌는 변수
    // 근데 getElementById 잘 안씀 그래서 !
    const msg = document.querySelector("#msg");
    const bt = document.querySelector("button");

    // msg.innerHTML = "<h1> 안녕 </h1>" ; // 얘는 HTML 으로 나타나
    // msg.textContent = "<h1> 안녕 </h1>" ; // 얘는 그냥 Text 로 나타나

    // 버튼 눌렀을 때 안녕 뜨게 하기
    // bt.addEventListener("click", ()=>{
    //     msg.innerHTML = "<h1> 안녕 </h1>" ;
    // });

    // 버튼 누를때마다 안녕 잘가 번갈아나타나게 하기
    bt.addEventListener("click", ()=>{
        if (msg.innerHTML == "안녕?") msg.innerHTML = "잘가!";
        else msg.innerHTML = "안녕?"
    })

    // let // 바뀌는 변수
    // querySelector 는 하나만, querySelextorAll 은 2개 이상
});