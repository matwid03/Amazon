export const cart = [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 3,
  },
  {
    productId: 'dd82ca78-a18b-4e2a-9250-31e67412f98d',
    quantity: 2,
  },
];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  let quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}
