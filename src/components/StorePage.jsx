import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Mail, Minus, Plus, Search, ShoppingBag, Trash2 } from "lucide-react";
import { assets } from "../data/content.js";
import { storeCategories, storeProducts } from "../data/storeContent.js";
import { addCartItem, currency, readCart, writeCart } from "../utils/storeCart.js";

function ProductCard({ product, onAdd }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const variant = product.variants.find((item) => item.id === variantId) || product.variants[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const defaultOptions = Object.fromEntries(Object.entries(product.options).map(([key, values]) => [key, values[0]]));
  const [options, setOptions] = useState(defaultOptions);

  return (
    <article className="store-product">
      <div className="store-product-image">
        <a href={`/store/${product.id}`} aria-label={`Open ${product.name}`}>
          <img src={variant.images[selectedImage]} alt={product.name} />
        </a>
        {variant.images.length > 1 ? (
          <div className="image-switcher" aria-label={`${product.name} views`}>
            {variant.images.map((image, index) => (
              <button key={image} className={selectedImage === index ? "active" : ""} type="button" onClick={() => setSelectedImage(index)}>
                {index === 0 ? "Front" : "Back"}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="store-product-copy">
        <div className="product-title-row">
          <h2>
            <a href={`/store/${product.id}`}>{product.name}</a>
          </h2>
          <strong>{currency.format(product.price)}</strong>
        </div>
        <p>{product.subtitle}</p>
        {product.variants.length > 1 ? (
          <div className="variant-picker compact" aria-label={`${product.name} colors`}>
            {product.variants.map((item) => (
              <button
                key={item.id}
                className={variant.id === item.id ? "active" : ""}
                type="button"
                onClick={() => {
                  setVariantId(item.id);
                  setSelectedImage(0);
                }}
              >
                <span style={{ background: item.swatch }}></span>
                {item.color}
              </button>
            ))}
          </div>
        ) : null}
        <div className="product-options">
          {Object.entries(product.options).map(([key, values]) => (
            <label key={key}>
              <span>{key}</span>
              <select value={options[key]} onChange={(event) => setOptions((current) => ({ ...current, [key]: event.target.value }))}>
                {values.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
        <div className="product-card-actions">
          <button className="add-to-cart" type="button" onClick={() => onAdd(product, variant, options)}>
            <ShoppingBag size={17} />
            Add to cart
          </button>
          <a className="detail-link" href={`/store/${product.id}`}>
            Details
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function CartLine({ item, onChangeQty, onRemove }) {
  return (
    <article className="cart-line">
      <img src={item.image} alt="" />
      <div>
        <strong>{item.name}</strong>
        <span>{Object.values(item.options).join(" / ")}</span>
        <small>{currency.format(item.price)} each</small>
        <div className="qty-control" aria-label={`${item.name} quantity`}>
          <button type="button" onClick={() => onChangeQty(item.key, item.qty - 1)} aria-label="Decrease quantity">
            <Minus size={15} />
          </button>
          <output>{item.qty}</output>
          <button type="button" onClick={() => onChangeQty(item.key, item.qty + 1)} aria-label="Increase quantity">
            <Plus size={15} />
          </button>
          <button type="button" onClick={() => onRemove(item.key)} aria-label="Remove item">
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function StorePage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(readCart);
  const [customer, setCustomer] = useState({ name: "", phone: "", city: "", note: "" });

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return storeProducts.filter((product) => {
      const categoryMatch = category === "all" || product.category === category;
      const queryMatch = !normalized || `${product.name} ${product.subtitle} ${product.category}`.toLowerCase().includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  useEffect(() => {
    writeCart(cart);
  }, [cart]);

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 350 : 0;
  const total = subtotal + shipping;

  const addToCart = (product, variant, options) => {
    setCart((current) => addCartItem(current, product, variant, options));
  };

  const changeQty = (key, qty) => {
    if (qty <= 0) {
      setCart((current) => current.filter((item) => item.key !== key));
      return;
    }
    setCart((current) => current.map((item) => (item.key === key ? { ...item, qty } : item)));
  };

  const removeItem = (key) => {
    setCart((current) => current.filter((item) => item.key !== key));
  };

  const orderBody = [
    "PARS Store Order",
    "",
    `Name: ${customer.name || "-"}`,
    `Phone: ${customer.phone || "-"}`,
    `City: ${customer.city || "-"}`,
    `Notes: ${customer.note || "-"}`,
    "",
    ...cart.map((item) => `${item.qty} x ${item.name} (${Object.entries(item.options).map(([key, value]) => `${key}: ${value}`).join(", ")}) - ${currency.format(item.price * item.qty)}`),
    "",
    `Subtotal: ${currency.format(subtotal)}`,
    `Shipping estimate: ${currency.format(shipping)}`,
    `Total: ${currency.format(total)}`
  ].join("\n");

  const orderHref = `mailto:info@pakhams.com?subject=${encodeURIComponent("PARS store order")}&body=${encodeURIComponent(orderBody)}`;

  return (
    <main className="store-page">
      <section className="store-header">
        <a className="guide-back" href="/">
          <ArrowLeft size={16} />
          Home
        </a>
        <div>
          <img src={assets.logo} alt="" />
          <h1>PARS Store</h1>
        </div>
        <p>Official PARS merch and printed learning guides. Add items to the cart, choose size or format, then send us your order by email.</p>
      </section>

      <section className="store-layout">
        <div className="store-catalog">
          <div className="store-toolbar">
            <label className="store-search">
              <Search size={17} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search shirts, caps, guides" />
            </label>
            <div className="store-tabs" aria-label="Store categories">
              {storeCategories.map((item) => (
                <button key={item.id} className={category === item.id ? "active" : ""} type="button" onClick={() => setCategory(item.id)}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="store-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={addToCart} />
            ))}
          </div>
        </div>

        <aside id="cart" className="store-cart" aria-label="Shopping cart">
          <div className="cart-head">
            <h2>Cart</h2>
            <span>{itemCount} item{itemCount === 1 ? "" : "s"}</span>
          </div>
          <div className="cart-lines">
            {cart.length ? (
              cart.map((item) => <CartLine key={item.key} item={item} onChangeQty={changeQty} onRemove={removeItem} />)
            ) : (
              <p className="empty-cart">Choose a product to start an order.</p>
            )}
          </div>
          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <strong>{currency.format(subtotal)}</strong>
            </div>
            <div>
              <span>Shipping estimate</span>
              <strong>{currency.format(shipping)}</strong>
            </div>
            <div>
              <span>Total</span>
              <strong>{currency.format(total)}</strong>
            </div>
          </div>
          <form className="checkout-form">
            <label>
              Name
              <input value={customer.name} onChange={(event) => setCustomer((current) => ({ ...current, name: event.target.value }))} placeholder="Your name" />
            </label>
            <label>
              Phone
              <input value={customer.phone} onChange={(event) => setCustomer((current) => ({ ...current, phone: event.target.value }))} placeholder="+92..." />
            </label>
            <label>
              City
              <input value={customer.city} onChange={(event) => setCustomer((current) => ({ ...current, city: event.target.value }))} placeholder="City" />
            </label>
            <label>
              Notes
              <textarea value={customer.note} onChange={(event) => setCustomer((current) => ({ ...current, note: event.target.value }))} placeholder="Delivery address, size notes, or pickup request"></textarea>
            </label>
          </form>
          <a className={`checkout-action ${cart.length ? "" : "disabled"}`} href={cart.length ? orderHref : undefined} aria-disabled={!cart.length}>
            <Mail size={17} />
            Prepare order email
          </a>
        </aside>
      </section>
    </main>
  );
}
