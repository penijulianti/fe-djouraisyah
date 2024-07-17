const productData = [
  {
    id: "product1",
    itemSrc: "./Image/Shoes/S1.jpeg",
    name: "Kara White Sneakers",
    price: 275000,
  },
  {
    id: "product2",
    itemSrc: "./Image/Shoes/S2.jpeg",
    name: "Catherine Strips High Heels",
    price: 250000,
  },
  {
    id: "product3",
    itemSrc: "./Image/Shoes/S3.jpeg",
    name: "Liliane Suede Wedges",
    price: 310000,
  },
  {
    id: "product4",
    itemSrc: "./Image/Shoes/S4.jpeg",
    name: "Pinkish Suede Heels",
    price: 300000,
  },
  {
    id: "product5",
    itemSrc: "./Image/Shoes/S5.jpeg",
    name: "White Basic High Boots",
    price: 325000,
  },
  {
    id: "product6",
    itemSrc: "./Image/Shoes/S6.jpeg",
    name: "Lavender Sneakers",
    price: 285000,
  },
  {
    id: "product7",
    itemSrc: "./Image/Shoes/S7.jpeg",
    name: "Aero Artsy Shoes",
    price: 305000,
  },
  {
    id: "product8",
    itemSrc: "./Image/Shoes/S8.jpeg",
    name: "Brown Ribbon High Heels",
    price: 350000,
  },
  {
    id: "product9",
    itemSrc: "./Image/Shoes/S9.jpeg",
    name: "Eden Ribbon Heels",
    price: 380000,
  },
  {
    id: "product10",
    itemSrc: "./Image/Shoes/S10.jpeg",
    name: "Candy Sneakers",
    price: 340000,
  },
  {
    id: "product11",
    itemSrc: "./Image/Shoes/S11.jpeg",
    name: "Strada Pink Shoes",
    price: 285000,
  },
  {
    id: "product12",
    itemSrc: "./Image/Shoes/S12.jpeg",
    name: "Reddish Docmart",
    price: 250000,
  },
  {
    id: "product13",
    itemSrc: "./Image/Shoes/S13.jpeg",
    name: "Low Brown Boots",
    price: 330000,
  },
  {
    id: "product14",
    itemSrc: "./Image/Shoes/S14.jpeg",
    name: "Daisy Pattern Sneakers",
    price: 320000,
  },
  {
    id: "product15",
    itemSrc: "./Image/Shoes/S15.jpeg",
    name: "High cut Delta Shoes",
    price: 380000,
  },
  {
    id: "product16",
    itemSrc: "./Image/Shoes/S16.jpeg",
    name: "Batik Pattern Sneakers",
    price: 365000,
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
            <h5>Hot</h5>
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
