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
      cartObject[itemName] = { ...itemDetails, count: 1};
    }
 }

  return cartObject;

};


const applyCoupons = (cart, coupons) => {
  // code here
};

const applyClearance = (cart) => {
  // code here
};

const checkout = (cart, coupons) => {
  // code here
};
