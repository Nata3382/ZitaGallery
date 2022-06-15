const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");

fetch("https://kea21-ed2b.restdb.io/rest/paintings", {
  method: "GET",
  headers: {
    "x-apikey": "6284e471e8128861fcf3d3fc",
  },
})
  .then((res) => res.json())
  .then((response) => {
    handleProductList(response);
  })
  .catch((err) => {
    console.error(err);
  });

// fetch(url)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     handleProductList(data);
//   });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").href = `product.html?id=${product._id}`;
  copy.querySelector("img.productimage").src = product.photo;
  copy.querySelector("img.productimage").alt = product.productdisplayname;

  copy.querySelector("p.size").textContent = product.size;
  copy.querySelector("h1").textContent = product.title;
  copy.querySelector("img").alt = product.title;
  // ^^^Tilføjet alt til alle galleribilleder fra databasen

  const parent = document.querySelector("section");
  parent.appendChild(copy);
}
