var menuSection = {
  x: 150,
  y: 25,
  w: 200,
  h: 75,
};

var shoppingBasket2;
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    ctx.strokeRect(125 * i + icon.x, 125 * j + icon.y, icon.w, icon.h);
  }
}

ctx.font = "bold 60px sans-serif";
ctx.fillText("Burger", menuSection.x, menuSection.y + menuSection.h - 20);

var imgs = [];

const rows = 3;
const cols = 3;

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     const img = new Image();
//     img.onload = function () {
//       ctx.drawImage(img, icon.x + j * 125, icon.y + i * 125, icon.w, icon.h);
//     };
//     img.src = "menu/" + (i * cols + j + 1) + ".png";
//   }
// }

// function Item(name, price, category, index) {
//   this.name = name;
//   this.price = price;
//   this.category = category;
//   this.index = index;
// }

// var menuList = [
//   new Item("치즈버거", 4200, "burger", 1),
//   new Item("불고기버거", 4700, "burger", 1),
//   new Item("치킨버거", 4700, "burger", 1),
//   new Item("빅맥버거", 6500, "burger", 1),
//   new Item("베이컨스페셜버거", 8100, "burger", 1),
//   new Item("더블치즈버거", 5700, "burger", 1),
//   new Item("새우버거", 4700, "burger", 1),
//   new Item("불고기칠리버거", 7100, "burger", 1),
//   new Item("핫크리스피버거", 5900, "burger", 1),
//   new Item("콜라", 2000, "drink", 1),
//   new Item("사이다", 2000, "drink", 1),
//   new Item("환타", 2000, "drink", 1),
//   new Item("자몽에이드", 2700, "drink", 1),
//   new Item("아이스티", 2300, "drink", 1),
//   new Item("오렌지주스", 2500, "drink", 1),
//   new Item("핫아메리카노", 2500, "drink", 1),
//   new Item("물", 1500, "drink", 1),
//   new Item("아이스아메리카노", 2500, "drink", 1),
//   new Item("감자튀김(중)", 1800, "side", 1),
//   new Item("감자튀김(대)", 2200, "side", 1),
//   new Item("치즈스틱(2개)", 2400, "side", 1),
//   new Item("치즈스틱(4개)", 4500, "side", 1),
//   new Item("스낵랩", 2900, "side", 1),
//   new Item("오징어링", 2600, "side", 1),
//   new Item("해쉬브라운", 1000, "side", 1),
//   new Item("치킨너겟", 2700, "side", 1),
//   new Item("치킨텐더", 4900, "side", 1),
//   new Item("소프트콘", 1000, "dessert", 1),
//   new Item("초코아이스크림", 1900, "dessert", 1),
//   new Item("딸기아이스크림", 1900, "dessert", 1),
//   new Item("토네이도", 2800, "dessert", 1),
//   new Item("팥빙수", 4000, "dessert", 1),
//   new Item("츄러스", 2000, "dessert", 1),
//   new Item("애플파이", 1700, "dessert", 1),
//   new Item("치즈볼", 2300, "dessert", 1),
//   new Item("콘샐러드", 1900, "dessert", 1),
// ];
//미션
let burgerNum;
let sideNum;
let juiceNum;
let missionNum;

function misson() {
  burgerNum = Math.floor(Math.random() * 9);
  sideNum = Math.floor(Math.random() * 9 + 9);
  juiceNum = Math.floor(Math.random() * 18 + 18);
  missionNum = Math.floor(Math.random() * 4 + 1);
}
ctx.font = "10px sans-serif";
ctx.fillText("제한시간 3분안에", 200, 500);
misson();
ctx.fillText(menuList[burgerNum].name, 200, 520);
ctx.fillText(missionNum + "개,", 280, 520);
misson();
ctx.fillText(menuList[juiceNum].name, 200, 540);
ctx.fillText(missionNum + "개,", 280, 540);
misson();
ctx.fillText(menuList[sideNum].name, 200, 560);
ctx.fillText(missionNum + "개", 280, 560);
ctx.fillText("를 모두 주문해주세요!", 200, 580);

// let a = Math.floor(Math.random()*10);
// let b = Math.floor((Math.random()*5)+1);
// ctx.fillText()

var shoopinglist = [];

function addShoppingList(burger) {
  var b1 = burger;

  if (shoopinglist.some((x) => x.name == b1.name) == false)
    shoopinglist.push(b1);
  else {
    for (let v of shoopinglist)
      if (v.name == b1.name) {
        v.index++;
        break;
      }
  }
}

function getCanvasClickPosition(event) {
  const x = event.clientX;
  const y = event.clientY;

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      if (
        icon.x + j * 125 <= x &&
        icon.y + i * 125 <= y &&
        x <= icon.x + j * 125 + icon.w &&
        y <= icon.y + i * 125 + icon.h
      ) {
        addShoppingList(menuList[i * 3 + j]);
      }
    }

  return { x, y };
}

// 캔버스 요소에 클릭 이벤트 핸들러 추가
canvas2.addEventListener("click", function (event) {
  const canvasClickPosition = getCanvasClickPosition(event);
  console.log(canvasClickPosition);
});

const logoImg = new Image();
logoImg.src = "menu/logo.png";
logoImg.onload = function () {
  // 페이드인 효과 적용하기
  let alpha = 0;
  const interval = setInterval(function () {
    alpha += 0.01;
    if (alpha >= 1) {
      clearInterval(interval);
    } else {
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = alpha;
      ctx.drawImage(logoImg, 0, 0, logo.w, logo.h);
    }
  }, 10);
};

ctx.font = "bold 12px Arial, sans-serif";
ctx.fillText("장바구니", 60, 620);

var createText = function () {
  ctx.font = "10px Arial, sans-serif";

  console.log(shoopinglist);

  ctx.clearRect(50, 623, 450, 80);
  for (const i in shoopinglist) {
    const s = shoopinglist[i];
    ctx.fillText(s.name, 58, i * 20 + 640);
    ctx.fillText(s.index + "개", 160, i * 20 + 640);
    ctx.fillText(s.price * s.index + "원", 220, i * 20 + 640);
  }
};

function getCanvasClickPosition2(event) {
  const x = event.clientX;
  const y = event.clientY;
}

canvas.addEventListener("click", function (event) {
  var x = 100;
  var y = 200;
  const canvas2ClickPosition = getCanvasClickPosition2(event);
  console.log(canvas2ClickPosition);

  createText();
});
