import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { getStoreProduct, storeProducts } from "../data/storeContent.js";
import { addCartItem, currency, readCart, writeCart } from "../utils/storeCart.js";

export default function ProductPage({ productId }) {
  const product = getStoreProduct(productId);
  const fallback = storeProducts[0];
  const selectedProduct = product || fallback;
  const [variantId, setVariantId] = useState(selectedProduct.variants[0].id);
  const variant = selectedProduct.variants.find((item) => item.id === variantId) || selectedProduct.variants[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const defaultOptions = useMemo(
    () => Object.fromEntries(Object.entries(selectedProduct.options).map(([key, values]) => [key, values[0]])),
    [selectedProduct]
  );
  const [options, setOptions] = useState(defaultOptions);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(() => readCart().reduce((sum, item) => sum + item.qty, 0));
  const [added, setAdded] = useState(false);
  const related = storeProducts.filter((item) => item.category === selectedProduct.category && item.id !== selectedProduct.id).slice(0, 3);

  useEffect(() => {
    setOptions(defaultOptions);
    setVariantId(selectedProduct.variants[0].id);
    setSelectedImage(0);
  }, [defaultOptions, selectedProduct]);

  const addToCart = () => {
    const nextCart = addCartItem(readCart(), selectedProduct, variant, options, quantity);
    writeCart(nextCart);
    setCartCount(nextCart.reduce((sum, item) => sum + item.qty, 0));
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  if (!product) {
    return (
      <main className="product-page">
        <section className="product-missing">
          <a className="guide-back" href="/store">
            <ArrowLeft size={16} />
            Store
          </a>
          <h1>Product not found</h1>
          <p>The requested store item is not available. The catalog link below will take you back to the current products.</p>
          <a className="checkout-action" href="/store">
            Open store
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="product-page">
      <section className="product-detail">
        <div className="product-gallery">
          <a className="guide-back" href="/store">
            <ArrowLeft size={16} />
            Store
          </a>
          <div className="product-main-image">
            <img src={variant.images[selectedImage]} alt={selectedProduct.name} />
          </div>
          {variant.images.length > 1 ? (
            <div className="product-thumbs" aria-label={`${selectedProduct.name} images`}>
              {variant.images.map((image, index) => (
                <button key={image} className={selectedImage === index ? "active" : ""} type="button" onClick={() => setSelectedImage(index)}>
                  <img src={image} alt="" />
                  <span>{index === 0 ? "Front" : "Back"}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <article className="product-buybox">
          <span>{selectedProduct.category}</span>
          <h1>{selectedProduct.name}</h1>
          <strong>{currency.format(selectedProduct.price)}</strong>
          <p>{selectedProduct.description}</p>

          <div className="variant-picker" aria-label={`${selectedProduct.name} variant picker`}>
            {selectedProduct.variants.map((item) => (
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

          <div className="product-options detail-options">
            {Object.entries(selectedProduct.options).map(([key, values]) => (
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

          <div className="product-quantity">
            <span>Quantity</span>
            <div className="qty-control">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                <Minus size={15} />
              </button>
              <output>{quantity}</output>
              <button type="button" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity">
                <Plus size={15} />
              </button>
            </div>
          </div>

          <button className="add-to-cart detail-add" type="button" onClick={addToCart}>
            {added ? <Check size={17} /> : <ShoppingBag size={17} />}
            {added ? "Added" : "Add to cart"}
          </button>
          <a className="detail-cart-link" href="/store#cart">
            View cart ({cartCount})
          </a>
        </article>
      </section>

      {related.length ? (
        <section className="related-products">
          <h2>Related items</h2>
          <div>
            {related.map((item) => (
              <a key={item.id} href={`/store/${item.id}`}>
                <img src={item.variants[0].images[0]} alt="" />
                <strong>{item.name}</strong>
                <span>{currency.format(item.price)}</span>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
