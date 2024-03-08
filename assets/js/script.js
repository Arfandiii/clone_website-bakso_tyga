const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// Toggle class active untuk hamburger menu
const barMenu = document.querySelector(".nav-menu");
const barClose = document.querySelector(".fa-bars");
// ketika hamburger menu di klik
document.querySelector("#barMenu").onclick = () => {
  barMenu.classList.toggle("active");
  barClose.classList.toggle("fa-x");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#searchMenu").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk cart
const cartMenu = document.querySelector(".cart");

document.querySelector("#cartMenu").onclick = (e) => {
  cartMenu.classList.toggle("active");
};

// toggle class pesanan
const buttonPesan = document.querySelector(".cart-items");
const cartProses = document.querySelector(".cart-proses");

document.querySelector("#pesan").onclick = (e) => {
  buttonPesan.classList.toggle("pesan");
  cartProses.classList.toggle("active");
};

// Klik di luar elemen
const hm = document.querySelector("#barMenu");
const sm = document.querySelector("#searchMenu");
const cm = document.querySelector("#cartMenu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !barMenu.contains(e.target)) {
    barMenu.classList.remove("active");
    barClose.classList.remove("fa-x");
  }
  if (!sm.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cm.contains(e.target) && !cartMenu.contains(e.target)) {
    cartMenu.classList.remove("active");
  }
});

function toggleSection(sectionId) {
  // Mengambil elemen dengan id "sections"
  var sections = document.getElementById("sections");

  // Mengambil semua anak elemen (section) dari elemen dengan id "sections"
  var sectionElements = sections.children;

  // Melakukan loop untuk setiap anak elemen (section)
  for (var i = 0; i < sectionElements.length; i++) {
    // Mengecek apakah id anak elemen (section) sama dengan sectionId yang diberikan
    if (sectionElements[i].id === sectionId) {
      // Jika sama, maka mengatur display anak elemen (section) tersebut menjadi "block"
      sectionElements[i].style.display = "block";
      sectionElements[i].style.minHeight = "100vh";
    } else {
      // Jika tidak sama, maka mengatur display anak elemen (section) tersebut menjadi "none"
      sectionElements[i].style.display = "none";
    }
  }

  // Menghentikan aksi default dari tag a (menghindari pindah halaman)
  return false;
}
