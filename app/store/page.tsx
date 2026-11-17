"use client";

import { useEffect, useState } from "react";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

function Store() {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const response = await fetch(PRODUCTS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setProducts(await response.json());
      } catch {
        if (!controller.signal.aborted) {
          setError("Could not load the products. Refresh the page to try again.");
        }
      }
    }

    loadProducts();
    return () => controller.abort();
  }, []);

  const query = search.trim().toLowerCase();
  const matchingProducts = (products ?? []).filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  return (
    <>
      <label htmlFor="product-search">Search products by title</label>{" "}
      <input
        id="product-search"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {error && <p role="alert">{error}</p>}
      {!error && products === null && <p>Loading products…</p>}
      {products !== null && matchingProducts.length === 0 && (
        <p>No products match your search.</p>
      )}

      {matchingProducts.length > 0 && (
        <table style={{ marginTop: "1rem", textAlign: "left" }}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {matchingProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    width={64}
                    height={64}
                    style={{ objectFit: "contain" }}
                  />
                </td>
                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default function Page() {
  return (
    <main>
      <h1>Store</h1>
      <Store />
    </main>
  );
}