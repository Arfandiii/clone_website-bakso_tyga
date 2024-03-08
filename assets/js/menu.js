// start menu paket
const paket = [
  {
    id: 0,
    image: "./assets/img/menuPaket/Paket_Mantap_Bakso_Iga_A.webp",
    title: "Paket Mantap Bakso Iga A",
    price: 39,
  },
  {
    id: 1,
    image: "./assets/img/menuPaket/Paket_Mantap_Bakso_Iga_B.webp",
    title: "Paket Mantap Bakso Iga B",
    price: 39,
  },
  {
    id: 2,
    image: "./assets/img/menuPaket/Paket_Mantap_Bakso_Iga_C.webp",
    title: "Paket Mantap Bakso Iga C",
    price: 40,
  },
  {
    id: 3,
    image: "../assets/img/menuPaket/Paket_Mantap_Mie_Iga.webp",
    title: "Paket Mantap Mie Iga",
    price: 37,
  },
  {
    id: 4,
    image: "./assets/img/menuPaket/Paket_Mantap_Mie_Ayam_Bakso.webp",
    title: "Paket Mantap Mie Ayam Bakso",
    price: 27,
  },
  {
    id: 5,
    image: "./assets/img/menuPaket/Paket_Mantap_Sop_Iga.webp",
    title: "Paket Mantap Sop Iga",
    price: 30,
  },
];

const categories = [
  ...new Set(
    paket.map((item) => {
      return item;
    })
  ),
];

let i = 0;

document.getElementById("search-box").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItem(filterData);
});

const displayItem = (items) => {
  document.getElementById("paket").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='col'>
            <div class='card'>
              <div class='card-item'>
                <div class='card-img'>
                  <img src=${image} alt=${title} />
                </div>
                <div class='card-body'>
                  <div class='card-text'>
                    <p>${title}</p>
                    <p class='price'>Rp ${price}.000</p>
                  </div>
                  <div class='btn'>` +
        "<button onclick='addtocart(" +
        i++ +
        ")'>Pesan</button>" +
        `</div>
                </div>
              </div>
            </div>
        </div>`
      );
    })
    .join("");
};

displayItem(categories);

// start menu bakso dan tulangan
const baksoTulangan = [
  {
    id: 0,
    image: "./assets/img/baksoTulangan/Bakso_Iga_Istimewah_Indomie.webp",
    title: "Bakso Iga Istimewah Indomie",
    price: 52,
  },
  {
    id: 1,
    image: "./assets/img/baksoTulangan/Bakso_Iga_Istimewah.webp",
    title: "Bakso Iga Istimewah",
    price: 50,
  },
  {
    id: 2,
    image: "./assets/img/baksoTulangan/Bakso_Iga_Istimewah_Polos.webp",
    title: "Bakso Iga Istimewah Polos",
    price: 49,
  },
  {
    id: 3,
    image: "../assets/img/baksoTulangan/Tulangan_Iga_Jumbo.webp",
    title: "Tulangan Iga Jumbo",
    price: 39,
  },
  {
    id: 4,
    image: "./assets/img/baksoTulangan/Tulangan_Iga.webp",
    title: "Tulangan Iga",
    price: 21,
  },
  {
    id: 5,
    image: "./assets/img/baksoTulangan/Bakso_Iga_Indomie.webp",
    title: "Bakso Iga Indomie",
    price: 39,
  },
  {
    id: 6,
    image: "./assets/img/baksoTulangan/Bakso_Iga.webp",
    title: "Bakso Iga",
    price: 37,
  },
  {
    id: 7,
    image: "./assets/img/baksoTulangan/Bakso_Iga_Polos.webp",
    title: "Bakso Iga Polos",
    price: 34,
  },
  {
    id: 8,
    image: "./assets/img/baksoTulangan/Bakso_Bogem_Indomie.webp",
    title: "Bakso Bogem Indomie",
    price: 38,
  },
  {
    id: 9,
    image: "./assets/img/baksoTulangan/Bakso_Iga_Bogem.webp",
    title: "Bakso Iga Bogem",
    price: 36,
  },
  {
    id: 10,
    image: "./assets/img/baksoTulangan/Bakso_Iga_Bogem_Polos.webp",
    title: "Bakso Iga Bogem Polos",
    price: 34,
  },
  {
    id: 11,
    image: "./assets/img/baksoTulangan/Bakso_Urat_Indomie.webp",
    title: "Bakso Urat Indomie",
    price: 29,
  },
  {
    id: 12,
    image: "./assets/img/baksoTulangan/Bakso_Urat_Mie.webp",
    title: "Bakso Urat Mie",
    price: 27,
  },
  {
    id: 13,
    image: "./assets/img/baksoTulangan/Bakso_Urat_Polos.webp",
    title: "Bakso Urat Polos",
    price: 26,
  },
  {
    id: 14,
    image: "./assets/img/baksoTulangan/Bakso_Tetelan_Indomie.webp",
    title: "Bakso Tetelan Indomie",
    price: 25,
  },
  {
    id: 15,
    image: "./assets/img/baksoTulangan/Bakso_Tetelan.webp",
    title: "Bakso Tetelan",
    price: 23,
  },
  {
    id: 16,
    image: "./assets/img/baksoTulangan/Bakso_Tetelan_Polos.webp",
    title: "Bakso Tetelan Polos",
    price: 22,
  },
  {
    id: 17,
    image: "./assets/img/baksoTulangan/Bakso_Indomie.webp",
    title: "Bakso Indomie",
    price: 22,
  },
  {
    id: 18,
    image: "./assets/img/baksoTulangan/Bakso_Mie.webp",
    title: "Bakso Mie",
    price: 19,
  },
  {
    id: 19,
    image: "./assets/img/baksoTulangan/Bakso_Polos.webp",
    title: "Bakso Polos",
    price: 18,
  },
];

const categoriesBaksoTulangan = [
  ...new Set(
    baksoTulangan.map((item) => {
      return item;
    })
  ),
];
let j = 0;

document.getElementById("search-box").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categoriesBaksoTulangan.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItemBaksoTulangan(filterData);
});

const displayItemBaksoTulangan = (items) => {
  document.getElementById("menuBaksoDanTulangan").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='col'>
            <div class='card'>
              <div class='card-item'>
                <div class='card-img'>
                  <img src=${image} alt=${title} />
                </div>
                <div class='card-body'>
                  <div class='card-text'>
                    <p>${title}</p>
                    <p class='price'>Rp ${price}.000</p>
                  </div>
                  <div class='btn'>` +
        "<button onclick='addtocartBaksoTulangan(" +
        j++ +
        ")'>Pesan</button>" +
        `</div>
                </div>
              </div>
            </div>
        </div>`
      );
    })
    .join("");
};

displayItemBaksoTulangan(categoriesBaksoTulangan);
// end menu bakso tulangan

// start bakso nyonyor
const baksoNyonyor = [
  {
    id: 0,
    image: "./assets/img/baksoNyonyor/Bakso_Urat_Mie_Kuah_Nyonyor.webp",
    title: "Bakso Urat Mie Kuah Nyonyor",
    price: 27,
  },
  {
    id: 1,
    image: "./assets/img/baksoNyonyor/Bakso_urat_polos_kuah_nyonyor.webp",
    title: "Bakso Urat Polos Kuah Nyonyor",
    price: 26,
  },
  {
    id: 2,
    image: "./assets/img/baksoNyonyor/Bakso_Urat_Indomie_Kuah_Nyonyor.webp",
    title: "Bakso Urat Indomie Kuah Nyonyor",
    price: 29,
  },
  {
    id: 3,
    image: "../assets/img/baksoNyonyor/Bakso_Tetelan_Mie_Kuah_Nyonyor.webp",
    title: "Bakso Tetelan Mie Kuah Nyonyor",
    price: 23,
  },
  {
    id: 4,
    image: "./assets/img/baksoNyonyor/Bakso_Tetelan_Mie_Kuah_Nyonyor.webp",
    title: "Bakso Tetelan Indomie Kuah Nyonyor",
    price: 25,
  },
  {
    id: 5,
    image: "./assets/img/baksoNyonyor/Bakso_Iga_Istimewah_Kuah_Nyonyor.webp",
    title: "Bakso Iga Istimewah Indomie Kuah Nyonyor",
    price: 52,
  },
  {
    id: 6,
    image: "./assets/img/baksoNyonyor/Bakso_Iga_Istimewah_Kuah_Nyonyor.webp",
    title: "Bakso Iga Istimewah Kuah Nyonyor",
    price: 52,
  },
  {
    id: 7,
    image: "./assets/img/baksoNyonyor/Bakso_Iga_Polos_Kuah_Nyonyor.webp",
    title: "Bakso Iga Indomie Kuah Nyonyor",
    price: 52,
  },
  {
    id: 8,
    image: "./assets/img/baksoNyonyor/Bakso_Iga_Polos_Kuah_Nyonyor.webp",
    title: "Bakso Iga Kuah Nyonyor",
    price: 52,
  },
  {
    id: 9,
    image: "./assets/img/baksoNyonyor/Bakso_Iga_Polos_Kuah_Nyonyor.webp",
    title: "Bakso Iga Polos Kuah Nyonyor",
    price: 52,
  },
  {
    id: 10,
    image: "./assets/img/baksoNyonyor/Bakso_Mie_Kuah_Nyonyor.webp",
    title: "Bakso Indomie Kuah Nyonyor",
    price: 52,
  },
  {
    id: 11,
    image: "./assets/img/baksoNyonyor/Bakso_polos_tetelan_kuah_nyoyor.webp",
    title: "Bakso polos Tetelan kuah Nyoyor",
    price: 52,
  },
  {
    id: 12,
    image: "./assets/img/baksoNyonyor/Bakso_Iga_Bogem_Kuah_Nyonyor.webp",
    title: "Bakso Iga Bogem Kuah Nyonyor",
    price: 52,
  },
  {
    id: 13,
    image: "./assets/img/baksoNyonyor/Bakso_Iga_Bogem_Kuah_Nyonyor.webp",
    title: "Bakso Iga Bogem Indomie Kuah Nyonyor",
    price: 52,
  },
  {
    id: 14,
    image: "./assets/img/baksoNyonyor/Bakso_Mie_Kuah_Nyonyor.webp",
    title: "Bakso Mie Kuah Nyonyor",
    price: 52,
  },
  {
    id: 15,
    image: "./assets/img/baksoNyonyor/Bakso_Polos_Kuah_Nyonyor.webp",
    title: "Bakso Polos Kuah Nyonyor",
    price: 52,
  },
  {
    id: 16,
    image: "./assets/img/baksoNyonyor/Bakso_bogem_polos_kuah_nyoyor.webp",
    title: "Bakso bogem polos kuah Nyoyor",
    price: 52,
  },
];

const categoriesBaksoNyonyor = [
  ...new Set(
    baksoNyonyor.map((item) => {
      return item;
    })
  ),
];
let k = 0;

document.getElementById("search-box").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categoriesBaksoNyonyor.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItemBaksoNyonyor(filterData);
});

const displayItemBaksoNyonyor = (items) => {
  document.getElementById("menuBaksoNyonyor").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='col'>
            <div class='card'>
              <div class='card-item'>
                <div class='card-img'>
                  <img src=${image} alt=${title} />
                </div>
                <div class='card-body'>
                  <div class='card-text'>
                    <p>${title}</p>
                    <p class='price'>Rp ${price}.000</p>
                  </div>
                  <div class='btn'>` +
        "<button onclick='addtocartBaksoNyonyor(" +
        k++ +
        ")'>Pesan</button>" +
        `</div>
                </div>
              </div>
            </div>
        </div>`
      );
    })
    .join("");
};

displayItemBaksoNyonyor(categoriesBaksoNyonyor);
// end bakso nyonyor

// start mie ayam
const mieAyam = [
  {
    id: 0,
    image: "./assets/img/mieAyam/Mie_Iga_Istimewah.webp",
    title: "Mie Iga Istimewah",
    price: 50,
  },
  {
    id: 1,
    image: "./assets/img/mieAyam/Mie_Iga_Spesial.webp",
    title: "Mie Iga Spesial",
    price: 37,
  },
  {
    id: 2,
    image: "./assets/img/mieAyam/Mie_Iga.webp",
    title: "Mie Iga",
    price: 34,
  },
  {
    id: 3,
    image: "../assets/img/mieAyam/Mie_Ayam_Dower.webp",
    title: "Mie Ayam Dower",
    price: 22,
  },
  {
    id: 4,
    image: "./assets/img/mieAyam/Mie_Ayam_Bakso.webp",
    title: "Mie Ayam Bakso",
    price: 21,
  },
  {
    id: 5,
    image: "./assets/img/mieAyam/Mie_Ayam_Pangsit.webp",
    title: "Mie Ayam Pangsit",
    price: 16,
  },
];

const categoriesMieAyam = [
  ...new Set(
    mieAyam.map((item) => {
      return item;
    })
  ),
];
let m = 0;

document.getElementById("search-box").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categoriesMieAyam.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItemMieAyam(filterData);
});

const displayItemMieAyam = (items) => {
  document.getElementById("menuMieAyam").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='col'>
            <div class='card'>
              <div class='card-item'>
                <div class='card-img'>
                  <img src=${image} alt=${title} />
                </div>
                <div class='card-body'>
                  <div class='card-text'>
                    <p>${title}</p>
                    <p class='price'>Rp ${price}.000</p>
                  </div>
                  <div class='btn'>` +
        "<button onclick='addtocartMieAyam(" +
        m++ +
        ")'>Pesan</button>" +
        `</div>
                </div>
              </div>
            </div>
        </div>`
      );
    })
    .join("");
};

displayItemMieAyam(categoriesMieAyam);
// end mie ayam

// start minuman hangat
const minumanHangat = [
  {
    id: 0,
    image: "./assets/img/minumanHangat/Jeruk_Besar_Hangat.webp",
    title: "Jeruk Besar Hangat",
    price: 9,
  },
  {
    id: 1,
    image: "./assets/img/minumanHangat/Milo_Hangat.webp",
    title: "Milo Hangat",
    price: 8,
  },
  {
    id: 2,
    image: "./assets/img/minumanHangat/Cappucino_Hangat.webp",
    title: "Cappucino Hangat",
    price: 9,
  },
  {
    id: 3,
    image: "../assets/img/minumanHangat/Jeruk_Kecil_Hangat.webp",
    title: "Jeruk Kecil Hangat",
    price: 7,
  },
  {
    id: 4,
    image: "./assets/img/minumanHangat/Lemon_Tea_Hangat.webp",
    title: "Lemon Tea Hangat",
    price: 7,
  },
  {
    id: 5,
    image: "./assets/img/minumanHangat/Teh_Hangat_Manis.webp",
    title: "Teh Hangat Manis",
    price: 6,
  },
  {
    id: 6,
    image: "./assets/img/minumanHangat/Teh_Hangat_Manis.webp",
    title: "Teh Hangat Tawar",
    price: 5,
  },
  {
    id: 7,
    image: "./assets/img/minumanHangat/Air_Putih_Hangat.webp",
    title: "Air Putih Hangat",
    price: 2,
  },
];

const categoriesMinumanHangat = [
  ...new Set(
    minumanHangat.map((item) => {
      return item;
    })
  ),
];
let n = 0;

document.getElementById("search-box").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categoriesMinumanHangat.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItemMinumanHangat(filterData);
});

const displayItemMinumanHangat = (items) => {
  document.getElementById("menuMinumanHangat").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='col'>
            <div class='card'>
              <div class='card-item'>
                <div class='card-img'>
                  <img src=${image} alt=${title} />
                </div>
                <div class='card-body'>
                  <div class='card-text'>
                    <p>${title}</p>
                    <p class='price'>Rp ${price}.000</p>
                  </div>
                  <div class='btn'>` +
        "<button onclick='addtocartMinumanHangat(" +
        n++ +
        ")'>Pesan</button>" +
        `</div>
                </div>
              </div>
            </div>
        </div>`
      );
    })
    .join("");
};
displayItemMinumanHangat(categoriesMinumanHangat);
// end minuman hangat

// start minuman dingin
const minumanDingin = [
  {
    id: 0,
    image: "./assets/img/minumanDingin/Radja_Mangga.webp",
    title: "Es Radja Mangga",
    price: 15,
  },
  {
    id: 1,
    image: "./assets/img/minumanDingin/Es_Jeruk_Besar.webp",
    title: "Es Jeruk Besar",
    price: 8,
  },
  {
    id: 2,
    image: "./assets/img/minumanDingin/Es_Jeruk_Murni.webp",
    title: "Jeruk Murni",
    price: 19,
  },
  {
    id: 3,
    image: "../assets/img/minumanDingin/Es_Kelapa_Muda.webp",
    title: "Kelapa Murni",
    price: 12,
  },
  {
    id: 4,
    image: "./assets/img/minumanDingin/Es_Kelapa_Muda.webp",
    title: "Es Kelapa Muda",
    price: 7,
  },
  {
    id: 5,
    image: "./assets/img/minumanDingin/Es_Kelapa_muda_Jeruk.webp",
    title: "Es Kelapa Jeruk",
    price: 12,
  },
  {
    id: 6,
    image: "./assets/img/minumanDingin/Es_Lidah_Buaya.webp",
    title: "Es Lidah Buaya",
    price: 8,
  },
  {
    id: 7,
    image: "./assets/img/minumanDingin/Es_Mentimun.webp",
    title: "Es Timun",
    price: 8,
  },
  {
    id: 8,
    image: "./assets/img/minumanDingin/Es_Lemon_Tea.webp",
    title: "Es Lemon Tea",
    price: 6,
  },
  {
    id: 9,
    image: "./assets/img/minumanDingin/Es_Jeruk_Kecil.webp",
    title: "Es Jeruk Kecil",
    price: 6,
  },
  {
    id: 10,
    image: "./assets/img/minumanDingin/Mineral.webp",
    title: "Air Mineral",
    price: 5,
  },
  {
    id: 11,
    image: "./assets/img/minumanDingin/Es_Cappucino.webp",
    title: "Es Cappucino",
    price: 8,
  },
  {
    id: 12,
    image: "./assets/img/minumanDingin/Es_Milo.webp",
    title: "Es Milo",
    price: 7,
  },
  {
    id: 13,
    image: "./assets/img/minumanDingin/Es_Teh_Manis.webp",
    title: "Es Teh Manis",
    price: 5,
  },
  {
    id: 14,
    image: "./assets/img/minumanDingin/Es_Teh_Tawar.webp",
    title: "Es Teh Tawar",
    price: 4,
  },
  {
    id: 15,
    image: "./assets/img/minumanDingin/Teh_botol_Sosro.webp",
    title: "Teh botol Sosro",
    price: 6,
  },
  {
    id: 16,
    image: "./assets/img/minumanDingin/Es_Kosong.webp",
    title: "Es Kosong",
    price: 1,
  },
];

const categoriesMinumanDingin = [
  ...new Set(
    minumanDingin.map((item) => {
      return item;
    })
  ),
];

let o = 0;

document.getElementById("search-box").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categoriesMinumanDingin.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItemMinumanDingin(filterData);
});

const displayItemMinumanDingin = (items) => {
  document.getElementById("menuMinumanDingin").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='col'>
            <div class='card'>
              <div class='card-item'>
                <div class='card-img'>
                  <img src=${image} alt=${title} />
                </div>
                <div class='card-body'>
                  <div class='card-text'>
                    <p>${title}</p>
                    <p class='price'>Rp ${price}.000</p>
                  </div>
                  <div class='btn'>` +
        "<button onclick='addtocartMinumanDingin(" +
        o++ +
        ")'>Pesan</button>" +
        `</div>
                </div>
              </div>
            </div>
        </div>`
      );
    })
    .join("");
};
displayItemMinumanDingin(categoriesMinumanDingin);
// end minuman dingin

// start pelengkap
const pelengkap = [
  {
    id: 0,
    image: "./assets/img/pelengkap/Nasi_Putih.webp",
    title: "Nasi Putih",
    price: 6,
  },
  {
    id: 1,
    image: "./assets/img/pelengkap/Ektra_tetelan.webp",
    title: "Ekstra Tetelan",
    price: 6,
  },
  {
    id: 2,
    image: "./assets/img/pelengkap/Extra_Bakso_Urat.webp",
    title: "Extra Bakso Urat",
    price: 12,
  },
  {
    id: 3,
    image: "../assets/img/pelengkap/Extra_Indomie.webp",
    title: "Extra Indomie",
    price: 6,
  },
  {
    id: 4,
    image: "./assets/img/pelengkap/Siomay.webp",
    title: "Siomay",
    price: 18,
  },
  {
    id: 5,
    image: "./assets/img/pelengkap/Extra_Mie.webp",
    title: "Extra Mie",
    price: 4,
  },
  {
    id: 5,
    image: "./assets/img/pelengkap/Extra_Kuah.webp",
    title: "Extra Kuah",
    price: 2,
  },
  {
    id: 5,
    image: "./assets/img/pelengkap/Extra_Pangsit.webp",
    title: "Extra Pangsit",
    price: 6,
  },
  {
    id: 5,
    image: "./assets/img/pelengkap/Telur_Rebus.webp",
    title: "Telur Rebus",
    price: 4,
  },
  {
    id: 5,
    image: "./assets/img/pelengkap/Extra_Semur_Ayam.webp",
    title: "Extra Semur Ayam",
    price: 10,
  },
  {
    id: 5,
    image: "./assets/img/pelengkap/Extra_Sayur.webp",
    title: "Extra Sayur",
    price: 3,
  },
  {
    id: 5,
    image: "./assets/img/pelengkap/Extra_Lemak.webp",
    title: "Extra Lemak",
    price: 3,
  },
  {
    id: 5,
    image: "./assets/img/pelengkap/Nasi_Putih.webp",
    title: "Nasi 1/2 Porsi",
    price: 4,
  },
];

const categoriesPelengkap = [
  ...new Set(
    pelengkap.map((item) => {
      return item;
    })
  ),
];
let l = 0;

document.getElementById("search-box").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categoriesPelengkap.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItemPelengkap(filterData);
});

const displayItemPelengkap = (items) => {
  document.getElementById("menuPelengkap").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='col'>
            <div class='card'>
              <div class='card-item'>
                <div class='card-img'>
                  <img src=${image} alt=${title} />
                </div>
                <div class='card-body'>
                  <div class='card-text'>
                    <p>${title}</p>
                    <p class='price'>Rp ${price}.000</p>
                  </div>
                  <div class='btn'>` +
        "<button onclick='addtocartPelengkap(" +
        l++ +
        ")'>Pesan</button>" +
        `</div>
                </div>
              </div>
            </div>
        </div>`
      );
    })
    .join("");
};
displayItemPelengkap(categoriesPelengkap);
// end pelengkap

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}
function addtocartBaksoTulangan(a) {
  cart.push({ ...categoriesBaksoTulangan[a] });
  displayCart();
}
function addtocartBaksoNyonyor(a) {
  cart.push({ ...categoriesBaksoNyonyor[a] });
  displayCart();
}
function addtocartMieAyam(a) {
  cart.push({ ...categoriesMieAyam[a] });
  displayCart();
}
function addtocartMinumanDingin(a) {
  cart.push({ ...categoriesMinumanDingin[a] });
  displayCart();
}
function addtocartMinumanHangat(a) {
  cart.push({ ...categoriesMinumanHangat[a] });
  displayCart();
}
function addtocartPelengkap(a) {
  cart.push({ ...categoriesPelengkap[a] });
  displayCart();
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

function displayCart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Belum Ada Pesanan";
    document.getElementById("total").innerHTML = "Rp " + 0 + ".000";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "Rp " + total + ".000";
        return (
          `<li class="clearfix">
          <div class="item-img">
            <img
            src=${image}
            alt=${title}/>
          </div>
          <div class="item-body">
            <span class="item-name">${title}</span>
            <span class="item-price">Rp ${price}.000</span>
          </div>
          <div class="icon-trash">` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i>" +
          `</div
        </li>`
        );
      })
      .join("");
  }
}
