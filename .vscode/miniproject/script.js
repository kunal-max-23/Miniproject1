let productListing = document.getElementById("productListing");
let productDetail = document.getElementById("productDetail");
let cartItems = document.getElementById("cartItems");
let totalPrice = document.getElementById("totalPrice");
let cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("miniProjectCart")) || [];
let allProducts = [];
let rupeeRate = 95;

updateCartCount();

async function productListingData() {
  let url = "https://dummyjson.com/products?limit=194";
  let apiRes = await fetch(url);
  let data = await apiRes.json();
  allProducts = data.products;
  showProducts(allProducts);
}

function showProducts(products) {
  productListing.innerHTML = "";

  products.forEach(function(product) {
    let priceInRupees = Math.round(product.price * rupeeRate);

    let card = document.createElement("div");
    card.className = "productCard";

    card.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.thumbnail}" alt="${product.title}">
      <p>${product.description}</p>
      <h3>Rs. ${priceInRupees}</h3>
      <a class="detailBtn" href="productDetail.html?id=${product.id}">Detail</a>
      <button onclick="addCart(${product.id})">Add Cart</button>
    `;

    productListing.appendChild(card);
  });
}

async function showProductDetail() {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");

  let apiRes = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await apiRes.json();
  let priceInRupees = Math.round(product.price * rupeeRate);

  productDetail.innerHTML = `
    <div>
      <img src="${product.thumbnail}" alt="${product.title}">
    </div>
    <div class="detailText">
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <p><b>Brand:</b> ${product.brand || "Not Available"}</p>
      <p><b>Category:</b> ${product.category}</p>
      <p><b>Rating:</b> ${product.rating}</p>
      <p><b>Stock:</b> ${product.stock}</p>
      <h2>Rs. ${priceInRupees}</h2>
      <button onclick="addCart(${product.id})">Add Cart</button>
    </div>
  `;
}

async function addCart(id) {
  let product = allProducts.find(function(item) {
    return item.id === id;
  });

  if (!product) {
    let apiRes = await fetch(`https://dummyjson.com/products/${id}`);
    product = await apiRes.json();
  }

  let oldProduct = cart.find(function(item) {
    return item.id === id;
  });

  if (oldProduct) {
    oldProduct.quantity = oldProduct.quantity + 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: Math.round(product.price * rupeeRate),
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
}

function showCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty">Cart is empty</p>`;
    totalPrice.innerText = "Rs. 0";
    return;
  }

  cart.forEach(function(product) {
    let item = document.createElement("div");
    item.className = "cartItem";

    item.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div>
        <h3>${product.title}</h3>
        <p>Price: Rs. ${product.price}</p>
        <div class="qty">
          <button onclick="decreaseQty(${product.id})">-</button>
          <span>${product.quantity}</span>
          <button onclick="increaseQty(${product.id})">+</button>
        </div>
      </div>
      <div>
        <p>Total: Rs. ${product.price * product.quantity}</p>
        <button onclick="removeItem(${product.id})">Remove</button>
      </div>
    `;

    cartItems.appendChild(item);
  });

  totalPrice.innerText = "Rs. " + getTotal();
}

function increaseQty(id) {
  let product = cart.find(function(item) {
    return item.id === id;
  });

  product.quantity = product.quantity + 1;
  saveCart();
  showCart();
  updateCartCount();
}

function decreaseQty(id) {
  let product = cart.find(function(item) {
    return item.id === id;
  });

  product.quantity = product.quantity - 1;

  if (product.quantity <= 0) {
    removeItem(id);
    return;
  }

  saveCart();
  showCart();
  updateCartCount();
}

function removeItem(id) {
  cart = cart.filter(function(product) {
    return product.id !== id;
  });

  saveCart();
  showCart();
  updateCartCount();
}

function clearCart() {
  cart = [];
  saveCart();
  showCart();
  updateCartCount();
}

function getTotal() {
  let total = 0;

  cart.forEach(function(product) {
    total = total + product.price * product.quantity;
  });

  return total;
}

function saveCart() {
  localStorage.setItem("miniProjectCart", JSON.stringify(cart));
}

function updateCartCount() {
  let count = 0;

  cart.forEach(function(product) {
    count = count + product.quantity;
  });

  if (cartCount) {
    cartCount.innerText = count;
  }
}

if (productListing) {
  productListingData();
}

if (productDetail) {
  showProductDetail();
}

if (cartItems) {
  showCart();
}
