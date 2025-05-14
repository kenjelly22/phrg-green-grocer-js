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

const applyCoupons = (cart, coupons) => {
  for (const item of Object.keys(cart)) {
    for (const coupon of coupons) {
      if (item === coupon.item && cart[item].count >= coupon.num) {
        if (!cart[`${item} W/COUPON`]) {
          cart[`${item} W/COUPON`] = {...cart[coupon.item]};
          cart[`${item} W/COUPON`].price = coupon.cost;
          cart[`${item} W/COUPON`].count = 1;
          cart[item].count -= coupon.num;
        } else {
          cart[`${item} W/COUPON`].count++;
          cart[item].count -= coupon.num;
        }
      }
    }
  }
  return cart;
};

const applyClearance = (cart) => {
  for (const item in cart) {
    if (cart[item].clearance === true) {
      const itemPrice = cart[item].price;
      cart[item].price = itemPrice - (itemPrice * 20) / 100;
    }
  }
  return cart;
};

const checkout = (cart, coupons) => {
  const consolidatedCart = consolidateCart(cart);
  applyCoupons(consolidatedCart, coupons);
  applyClearance(consolidatedCart);

  let totalCost = 0;

  for (const item in consolidatedCart) {
    totalCost += consolidatedCart[item].price * consolidatedCart[item].count;
  }

  if (totalCost > 100) {
    totalCost -= (totalCost * 10) / 100;
  }

  return totalCost;
};
