import { Item, menuList } from "./Item.js";
//import { Canvas } from "./Canvas.js";
/**@type {HTMLCanvasElement} */

//파일 구조(순서대로 생성하고 document의 body에 추가하므로써 순차적으로 쌓임)
//index. id canvas ctx 순서
//1.game-canvas ctx  (게임 시작 버튼 생성 페이지)
//2.kiosk canvas2 ktx (키오스크 페이지)
//3.list list ltx(주문 목록 페이지)
//4.pay canvas3 ctx3(결제 창 페이지)

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

//canvas.style.display = "block";
canvas.style.position = "absolute";

canvas.style.display = "block";
document.body.appendChild(canvas);
mainMenu();

//var kioskCanvas = Canvas(0, 0, 1000, 700, "kioskCanvas");

//import 시험
// console.log(Item);
// console.log(menuList[0].total());

function loadImg(ctx, src, x, y, w, h) {
  ctx.clearRect(x, y, w, h);
  var img = new Image();
  img.src = src;
  img.onload = function () {
    ctx.drawImage(img, x, y, w, h);
  };
}

function mainMenu() {
  createButton("Game Start", 400, 300, 200, 50, gameStartMenu);
  createButton("Help", 400, 360, 200, 50, helpMenu);
  createButton("Quit", 400, 420, 200, 50, quitGame);
}

function gameStartMenu() {
  clearButtons();
  createButton("Ham Game", 400, 300, 200, 50, hamham);
  createButton("Delivery Game", 400, 360, 200, 50, deGame);
  createButton("Back", 400, 420, 200, 50, mainMenu);
}

function helpMenu() {
  clearButtons();
  createButton("Back", 400, 360, 200, 50, mainMenu);
}

function quitGame() {
  clearButtons();
  // Do something to quit the game
  createButton("Back", 400, 360, 200, 50, mainMenu);
}

function hamham() {
  clearButtons(createCanvas());
}

function deGame() {
  clearButtons();
}

function clearButtons(nextMenu) {
  // Remove all buttons
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Call the next menu function if specified
  if (nextMenu) {
    nextMenu();
  }
}

function createButton(text, x, y, width, height, onClick) {
  // Draw the button
  ctx.fillStyle = "gray";
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = "white";
  ctx.font = "24px Arial";
  ctx.fillText(text, x + 50, y + 30);

  // Register the click handler
  if (onClick) {
    canvas.addEventListener("click", function (event) {
      console.log();
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      if (
        mouseX >= x &&
        mouseX <= x + width &&
        mouseY >= y &&
        mouseY <= y + height
      ) {
        onClick();
      }
    });
  }
}

var createCanvas = function () {
  var canvas2 = document.createElement("canvas");
  var ctx2 = canvas2.getContext("2d");

  canvas2.width = 600;
  canvas2.height = 700;
  canvas2.id = "kiosk";
  canvas2.style.display = "block";

  canvas2.style.position = "relative";
  canvas2.style.left = "200px";
  canvas2.style.backgroundColor = "white";

  //키오스크 메인 페이지 속성 정의

  //document 의 body에 canvas추가
  document.body.appendChild(canvas2);

  //css로 캔버스 위치 지정

  ctx2.fillStyle = "black";

  loadImg(ctx2, "../menu/btn/2_b.png", 0, 100 + 0 * 90, 150, 110);
  loadImg(ctx2, "../menu/btn/1_s.png", 0, 100 + 1 * 90, 150, 110);
  loadImg(ctx2, "../menu/btn/1_dr.png", 0, 100 + 2 * 90, 150, 110);
  loadImg(ctx2, "../menu/btn/1_ds.png", 0, 100 + 3 * 90, 150, 110);
  //키오스크의 속성들 정의
  var logo = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    src: "../../main/logo.png",
  };

  var menuSection = {
    x: 150,
    y: 25,
    w: 200,
    h: 75,
  };

  var menuBar = {
    x: 0,
    y: 100,
    w: 50,
    h: 500,
  };

  var menuBoard = {
    x: 50,
    y: 100,
    w: 400,
    h: 500,
  };

  var icon = {
    x: 175,
    y: 125,
    w: 100,
    h: 100,
  };

  var menuBoard = {
    x: 50,
    y: 100,
    w: 400,
    h: 500,
  };

  var pageNation = {
    x: 50,
    y: 550,
    w: 400,
    h: 50,
  };

  var shoopinglist = [];

  function addShoppingList(burger) {
    var b1 = burger;
    console.log(b1.name);
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
    const x = event.clientX - 200;
    const y = event.clientY;
    let z = 0;
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
    console.log(shoopinglist);
    createText();
  });

  var drawMenu = function draws() {
    var imgs = [];
    for (let i = 0; i < 9; i++) {
      const img = new Image();
      img.src = "../menu/" + (i + 1) + ".png";
      const row = Math.floor(i / 3);
      const col = i % 3;

      let alpha = 0;

      var interval = setInterval(function () {
        alpha += 0.01;
        if (alpha >= 1) {
          clearInterval(interval);
        } else {
          ctx2.globalAlpha = alpha;

          ctx2.drawImage(
            img,
            icon.x + col * 125,
            icon.y + row * 125,
            icon.w,
            icon.h
          );
        }
      }, 30);

      imgs[i] = img;
    }
  };

  drawMenu();

  const logoImg = new Image();
  logoImg.src = "../menu/n_logo.png";
  logoImg.onload = function () {
    ctx2.drawImage(logoImg, 0, 0, 100, 100);
  };

  //주문 페이지
  var list = document.createElement("canvas");
  var ltx = list.getContext("2d");

  list.id = "list";
  list.width = 600;
  list.height = 300;
  list.style.display = "block";

  // list.style.top = "550px";
  // list.style.left = "200px";

  var div = document.createElement("div");
  div.id = "j";
  div.style.position = "absolute";

  div.style.top = "550px";
  div.style.left = "200px";
  div.style.width = "600px";
  div.style.height = "150px";

  //div.style.background-Image = URL('menu/bg.jpg');
  //div에 list 찌부시키기
  document.body.appendChild(div);
  div.appendChild(list);
  // document.body.appendChild(list);

  var createText = function () {
    ltx.font = "15px Arial, sans-serif";
    ltx.fillStyle = "black";
    console.log(shoopinglist);

    ltx.clearRect(0, 0, 450, 1000);
    for (const i in shoopinglist) {
      const s = shoopinglist[i];
      ltx.fillText(s.name, 0, i * 20 + 40);
      ltx.fillText(s.index + "개", 160, i * 20 + 40);
      ltx.fillText(s.price * s.index + "원", 200, i * 20 + 40);
    }
  };

  function getCanvasClickPosition2(event) {
    const x = event.clientX;
    const y = event.clientY - 40;
    return { x, y };
  }

  list.addEventListener("click", function (event) {
    // var x = 100;
    // var y = 200;
    const canvas2ClickPosition = getCanvasClickPosition2(event);
    console.log(canvas2ClickPosition);
    console.log("list임");
  });

  //결제 페이지)4번째 캔버스

  const canvas3 = document.createElement("canvas");
  const ctx3 = canvas3.getContext("2d");

  canvas3.width = 150;
  canvas3.height = 150;

  canvas3.style.position = "absolute";
  canvas3.style.left = "650px";
  canvas3.style.top = "550px";

  document.body.appendChild(canvas3);

  ctx3.fiilStyle = "red";
  ctx3.fillRect(0, 0, 150, 150);

  function getCoordinate(event, xx, yy) {
    let x = event.clientX - xx;
    let y = event.clientY - yy;
    return { x, y };
  }

  //canvas3마우스 이벤트 리스너
  let payPage = false;

  canvas3.addEventListener("click", function (event) {
    if (payPage == false) {
      var xy = getCoordinate(event, 650, 550);
    } else {
      var xy = getCoordinate(event, 200, 0);
    }

    console.log(payPage);

    //결제창 크기 키우고 줄이기\
    if (payPage == false) {
      if (0 <= xy.x && 0 <= xy.y && xy.x <= 150 && xy.y <= 150) {
        console.log("small->big");
        canvas3.style.top = "0";
        canvas3.style.left = "200px";
        canvas3.width = 600;
        canvas3.height = 700;

        // document.body.appendChild(canvas3);

        ctx3.fillStyle = "green";
        ctx3.fillRect(0, 0, 600, 700);
        ctx3.fillStyle = "yellow";
        ctx3.fillRect(550, 20, 30, 30);
        ctx3.fillStyle = "black";
        ctx3.font = "48px serif";
        ctx3.fillText("X", 550, 50, 30, 30);
        ctx3.fillStyle = "yellow";
        ctx3.font = "60px serif";
        ctx3.fillText("★결☆제★", 150, 100);
        payPage = true;
      }
    } else {
      if (550 <= xy.x && 20 <= xy.y && xy.x <= 580 && xy.y <= 50) {
        console.log("big->small");
        canvas3.style.top = "550px";
        canvas3.style.left = "650px";
        canvas3.width = 150;
        canvas3.height = 150;

        // document.body.appendChild(canvas3);

        ctx3.font = "48px serif";
        ctx3.fillStyle = "green";
        ctx3.fillRect(0, 0, 150, 150);

        payPage = false;
      }
    }
    console.log(xy);
  });
};
