function Item(name, price, category, index) {
  (this.name = name),
    (this.price = price),
    (this.category = category),
    (this.index = index);

  this.total = function () {
    return this.price * this.index;
  };
}
// Item.prototype = {
//   total: function () {
//     return (sum = this.price * this.idnex);
//   },
// };

var menuList = [
  new Item("치즈버거", 4200, "burger", 1),
  new Item("불고기버거", 4700, "burger", 1),
  new Item("치킨버거", 4700, "burger", 1),
  new Item("빅맥버거", 6500, "burger", 1),
  new Item("베이컨스페셜버거", 8100, "burger", 1),
  new Item("더블치즈버거", 5700, "burger", 1),
  new Item("새우버거", 4700, "burger", 1),
  new Item("불고기칠리버거", 7100, "burger", 1),
  new Item("핫크리스피버거", 5900, "burger", 1),
  new Item("콜라", 2000, "drink", 1),
  new Item("사이다", 2000, "drink", 1),
  new Item("환타", 2000, "drink", 1),
  new Item("자몽에이드", 2700, "drink", 1),
  new Item("아이스티", 2300, "drink", 1),
  new Item("오렌지주스", 2500, "drink", 1),
  new Item("핫아메리카노", 2500, "drink", 1),
  new Item("물", 1500, "drink", 1),
  new Item("아이스아메리카노", 2500, "drink", 1),
  new Item("감자튀김(중)", 1800, "side", 1),
  new Item("감자튀김(대)", 2200, "side", 1),
  new Item("치즈스틱(2개)", 2400, "side", 1),
  new Item("치즈스틱(4개)", 4500, "side", 1),
  new Item("스낵랩", 2900, "side", 1),
  new Item("오징어링", 2600, "side", 1),
  new Item("해쉬브라운", 1000, "side", 1),
  new Item("치킨너겟", 2700, "side", 1),
  new Item("치킨텐더", 4900, "side", 1),
  new Item("소프트콘", 1000, "dessert", 1),
  new Item("초코아이스크림", 1900, "dessert", 1),
  new Item("딸기아이스크림", 1900, "dessert", 1),
  new Item("토네이도", 2800, "dessert", 1),
  new Item("팥빙수", 4000, "dessert", 1),
  new Item("츄러스", 2000, "dessert", 1),
  new Item("애플파이", 1700, "dessert", 1),
  new Item("치즈볼", 2300, "dessert", 1),
  new Item("콘샐러드", 1900, "dessert", 1),
];
export { Item, menuList };
