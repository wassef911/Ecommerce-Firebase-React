export const addItemToCart = (cartItems, ItemToAdd) => {
  const exstingItem = cartItems.find(
    (cartItem) => cartItem.id === ItemToAdd.id
  );
  if (exstingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === ItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...ItemToAdd, quantity: 1 }];
};

export const DecQuant = (cartItems, ItemToDecQuant) => {
  if (ItemToDecQuant.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === ItemToDecQuant.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return cartItems.filter((item) => item.id !== ItemToDecQuant.id);
  }
};
