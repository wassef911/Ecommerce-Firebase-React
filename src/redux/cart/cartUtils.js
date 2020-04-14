export const addItemToCart = (cartItems, ItemToAdd) => {
  const exstingItem = cartItems.find((cartItem) => cartItem.id == ItemToAdd.id);
  if (exstingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === ItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...ItemToAdd, quantity: 1 }];
};
