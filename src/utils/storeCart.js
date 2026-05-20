export const cartStorageKey = "pars-store-cart";

export const currency = new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0
});

export function readCart() {
  try {
    const saved = window.localStorage.getItem(cartStorageKey);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function writeCart(cart) {
  window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

export function makeCartItem(product, variant, options) {
  return {
    key: `${product.id}:${variant.id}:${Object.values(options).join(":")}`,
    id: product.id,
    variantId: variant.id,
    name: product.name,
    price: product.price,
    image: variant.images[0],
    options: { color: variant.color, ...options },
    qty: 1
  };
}

export function addCartItem(cart, product, variant, options, quantity = 1) {
  const nextItem = makeCartItem(product, variant, options);
  return cart.some((item) => item.key === nextItem.key)
    ? cart.map((item) => (item.key === nextItem.key ? { ...item, qty: item.qty + quantity } : item))
    : [...cart, { ...nextItem, qty: quantity }];
}
