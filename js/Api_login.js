async function postRegFormData(event) {
  event.preventDefault();

  // Ambil data dari form
  const form = event.target;
  const username = form.querySelector('[name="username"]').value;
  const password = form.querySelector('[name="password"]').value;

  try {
    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.error || "Gagal melakukan login.");
    }

    const data = await response.json();
    alert("Login berhasil!");
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error:", error.message);
    alert("Login gagal. Silakan coba lagi.");
  }
}

document
  .querySelector("#loginForm")
  .addEventListener("submit", postRegFormData);
