/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// membuat variabel untuk setiap elemen view
const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

// membuat variabel untuk menyimpan nilai
const expectedEmail = "admin@dicoding.com";
const expectedPassword = "superpassword";

// aksi untuk tombol submit
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  // TODO 1 : Mendapatkan input email dan password pengguna dari form.
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */

  // melakukan pengecekan email dan password
  if (email == expectedEmail && password == expectedPassword) {
    // jika password sesuai maka akan diarahkan ke halaman home
    goToHome();

    // jika email dan password tidak sesuai maka akan menampilkan informasi berupa pop up
  } else {
    showPopUp();
  }
  // inputEmailElement.reset();
  // inputPasswordElement.reset();
});
