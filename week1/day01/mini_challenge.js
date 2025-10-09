const tax = 1.1;

const item1 = {
    name : "リンゴ",
    price: 120,
    count: 2
};

const item2 = {
    name : "バナナ",
    price: 200,
    count: 5
};

// 小計を計算する関数
const getSubtotal = (item) => item.price * item.count;

// 小計金額
const subItemsTotalPrice = getSubtotal(item1) + getSubtotal(item2);

// 合計金額を計算
const itemsTotalPrice = subItemsTotalPrice * tax;

// 10,000円以上なら送料無料、それ以外は送料500円
const shippingTotalCost = itemsTotalPrice >= 10000 ? itemsTotalPrice : itemsTotalPrice + 500;

// 結果を出力
console.log("商品１:", item1.name, "価格:", item1.price, "数量:", item1.count, "小計:", getSubtotal(item1));
console.log("商品２:", item2.name, "価格:", item2.price, "数量:", item2.count, "小計:", getSubtotal(item2));
console.log("小計:", subItemsTotalPrice);
console.log("合計:", itemsTotalPrice);
console.log("送料:", shippingTotalCost);