const productData = [
  {
    id: "product1",
    itemSrc: "./Image/Home/Product1.jpeg",
    name: "Flame Fur Cardigan",
    price: 270000,
  },
  {
    id: "product2",
    itemSrc: "./Image/Home/Product2.jpeg",
    name: "Black Tartan Shirt",
    price: 200000,
  },
  {
    id: "product3",
    itemSrc: "./Image/Home/Product3.jpeg",
    name: "Milky Leather Jacket",
    price: 400000,
  },
  {
    id: "product4",
    itemSrc: "./Image/Home/Product4.jpeg",
    name: "Milky sport set",
    price: 300000,
  },
  {
    id: "product5",
    itemSrc: "./Image/Home/Product5.jpeg",
    name: "A-line black skirt",
    price: 175000,
  },
  {
    id: "product6",
    itemSrc: "./Image/Home/Product6.jpeg",
    name: "BlueSky Graphic SwetShirt",
    price: 150000,
  },
  {
    id: "product7",
    itemSrc: "./Image/Home/Product7.jpeg",
    name: "Lime Green Oversized Shirt",
    price: 180000,
  },
  {
    id: "product8",
    itemSrc: "./Image/Home/product8.jpeg",
    name: "A-Line White Midi Skirt",
    price: 150000,
  },
];

const parentProduct = document.getElementById("parent-product");

productData.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("row");
  productCard.id = product.id;

  productCard.innerHTML = `
        <img src="${product.itemSrc}" alt="image">
        <div class="product-text">
            <h5>New</h5>
        </div>
        <div class="heart-icon">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="ratting">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="price">
            <h4>${product.name}</h4>
            <p>Rp ${product.price}</p>
            <button class="btn-co" onclick="addToCart('${product.id}')">Add To Cart</button>
        </div>
    `;

  parentProduct.appendChild(productCard);
});

async function addToCart(productId) {
  const product = productData.filter((product) => product.id === productId);
  const userLogin = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch("http://localhost:3000/api/cart/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_user: userLogin.id,
        product_name: product[0].name,
        price: product[0].price,
        quantity: 1,
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(
        errorMessage.error || "Gagal memasukan produk kedalam keranjang."
      );
    }

    const res = await response.json();
    alert(res);
  } catch (error) {
    console.error("Error:", error.message);
    alert("Gagal memasukan produk kedalam keranjang.");
  }
}
