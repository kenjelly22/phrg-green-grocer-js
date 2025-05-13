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

    // if (cartObject[item]) {
    //   return cartObject[item].count++;
    // }
    // Object.assign(cartObject, item);
  }

  debugger;

  // loop through array
  // return Object
};

// 1) adds a count of one to each item when there are no duplicates
// 2) increments count when there are multiple items

consolidateCart(cart);

const applyCoupons = (cart, coupons) => {
  // code here
};

const applyClearance = (cart) => {
  // code here
};

const checkout = (cart, coupons) => {
  // code here
};
