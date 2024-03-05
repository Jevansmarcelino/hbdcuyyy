// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "lobangsat" && password === "03032004") {
    Swal.fire({
      icon: "success",
      title: "Anjay Ke Login",
      text: "Met Datang Kang",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Gagal Login Bego",
      text: "Yang bener jing isi username ama pw nya wkwkwkkw",
      confirmButtonText: "Coba lagi sat",
      confirmButtonColor: "#ff7675",
    });
  }
}