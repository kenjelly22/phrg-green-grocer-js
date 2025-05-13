const cart = [
  {AVOCADO: {price: 3.0, clearance: true}},
  {AVOCADO: {price: 3.0, clearance: true}},
  {KALE: {price: 3.0, clearance: false}},
];

const consolidateCart = (cart) => {
  const cartObject = {};
  for (const item of cart) {
    const itemName = Object.keys(item)[0];
    const itemDetails = item[itemName];

    if (cartObject[itemName]) {
      cartObject[itemName].count++;
    } else {
      cartObject[itemName] = {...itemDetails, count: 1};
    }
  }

  return cartObject;
};

const newCart = {
  AVOCADO: {price: 3.0, clearance: true, count: 3},
  KALE: {price: 3.0, clearance: false, count: 1},
};
const coupon = {item: "AVOCADO", num: 2, cost: 5.0};

const applyCoupons = (cart, coupon) => {
  for (const item of Object.keys(cart)) {
    if (item === coupon.item) {
      cart[`${item} W/COUPON`] = {...cart[item]};
      cart[`${item} W/COUPON`].price = coupon.cost;
      cart[`${item} W/COUPON`].count -= coupon.num;
    }
  }
  return cart;
};

applyCoupons(newCart, coupon);

// Match Value of Item from Coupon to the Key in cart Object

// Once it finds match Duplicate matching key : value

// Modify the dupe's key to match AVOCADO W/COUPON

// Modify price to take cost fro coupon Object and count to be num - count

// Return the cart

// 1) adds a new key, value pair to the cart hash called 'ITEM NAME W/COUPON'
// 2) adds the coupon price to the property hash of couponed item
// 3) adds the count number to the property hash of couponed item
// 4) removes the number of discounted items from the original item's count
// 5) remembers if the item was on clearance

const applyClearance = (cart) => {
  // code here
};

const checkout = (cart, coupons) => {
  // code here
};
