// Post data dari Login form
async function postRegFormData(event) {
  event.preventDefault();

  // Ambil data dari form
  const form = event.target;
  const username = form.querySelector('[name="username"]').value;
  const email = form.querySelector('[name="email"]').value;
  const password = form.querySelector('[name="password"]').value;

  try {
    const response = await fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.error || "Gagal melakukan registrasi.");
    }

    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data.data));
    alert("Registrasi berhasil!");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error:", error.message);
    alert("Registrasi gagal. Silakan coba lagi.");
  }
}

// Event listener untuk form submission
document
  .querySelector("#registrasiForm")
  .addEventListener("submit", postRegFormData);
