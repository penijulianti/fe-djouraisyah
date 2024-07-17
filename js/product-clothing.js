const productData = [
  {
    id: "product1",
    itemSrc: "./Image/Clothing/C1.jpeg",
    name: "Brown Oversized Cardigan",
    price: 210000,
  },
  {
    id: "product2",
    itemSrc: "./Image/Clothing/C2.jpeg",
    name: "Folkfore brownie Outer",
    price: 155000,
  },
  {
    id: "product3",
    itemSrc: "./Image/Clothing/C3.jpeg",
    name: "Casual Strip Shirt",
    price: 120000,
  },
  {
    id: "product4",
    itemSrc: "./Image/Clothing/C4.jpeg",
    name: "Daisy baloon top",
    price: 160000,
  },
  {
    id: "product5",
    itemSrc: "./Image/Clothing/C5.jpeg",
    name: "Yellow Basic T-shirt",
    price: 100000,
  },
  {
    id: "product6",
    itemSrc: "./Image/Clothing/C6.jpeg",
    name: "Chupa Chups T-Shirt",
    price: 100000,
  },
  {
    id: "product7",
    itemSrc: "./Image/Clothing/C7.jpeg",
    name: "A-Line Jeans Dress",
    price: 190000,
  },
  {
    id: "product8",
    itemSrc: "./Image/Clothing/C8.jpeg",
    name: "Blue Denim Tennis Skirt",
    price: 105000,
  },
  {
    id: "product9",
    itemSrc: "./Image/Clothing/C9.jpeg",
    name: "Milky leather midi skirt",
    price: 215000,
  },
  {
    id: "product10",
    itemSrc: "./Image/Clothing/C10.jpeg",
    name: "Denim Short Skirt",
    price: 160000,
  },
  {
    id: "product11",
    itemSrc: "./Image/Clothing/C11.jpeg",
    name: "Sky Blue Floral dress",
    price: 180000,
  },
  {
    id: "product12",
    itemSrc: "./Image/Clothing/C12.jpeg",
    name: "Jenica smocked dress",
    price: 160000,
  },
  {
    id: "product13",
    itemSrc: "./Image/Clothing/C13.jpeg",
    name: "Summer Cherry Top",
    price: 155000,
  },
  {
    id: "product14",
    itemSrc: "./Image/Clothing/C14.jpeg",
    name: "White Angel Midi dress",
    price: 170000,
  },
  {
    id: "product15",
    itemSrc: "./Image/Clothing/C15.jpeg",
    name: "Denim Off-Shoulder dress",
    price: 195000,
  },
  {
    id: "product16",
    itemSrc: "./Image/Clothing/C16.jpeg",
    name: "Neonrina green set",
    price: 265000,
  },
  {
    id: "product17",
    itemSrc: "./Image/Clothing/C17.jpeg",
    name: "Highwaist loose Jeans",
    price: 220000,
  },
  {
    id: "product18",
    itemSrc: "./Image/Clothing/C18.jpeg",
    name: "Backflip Loose Jeans",
    price: 250000,
  },
  {
    id: "product19",
    itemSrc: "./Image/Clothing/C19.jpeg",
    name: "Neo baggy Jeans",
    price: 230000,
  },
  {
    id: "product20",
    itemSrc: "./Image/Clothing/C20.jpeg",
    name: "ighwaist Level-up Jeans",
    price: 205000,
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
