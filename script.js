let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/1200x/a1/51/34/a151342323946bf209a1d903e18da15a.jpg",
"https://i.pinimg.com/736x/50/45/51/504551d64567a27586dfe5b37728c9c3.jpg",
"https://i.pinimg.com/736x/be/10/45/be1045ee762404b555e90ecb65906d0a.jpg",
"https://i.pinimg.com/736x/60/1d/6b/601d6ba2779a4c2d4b8fcfe585688b6e.jpg",
"https://i.pinimg.com/736x/64/5e/c2/645ec25850ba8a69baa66a6f6a16c89d.jpg",
"https://i.pinimg.com/736x/01/0a/b9/010ab942f00819e2e008b6ded541b997.jpg",
"https://i.pinimg.com/1200x/9e/b6/1d/9eb61de66238ca8d06b2a4a6c86351ec.jpg",
"https://i.pinimg.com/736x/71/38/81/713881056899ddcce261828fdc94cc19.jpg",
"https://i.pinimg.com/1200x/b2/06/62/b206625795909fea5bde9f5e59b1128f.jpg"];
let s = "";
for(let i=1; i<=44; i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;




