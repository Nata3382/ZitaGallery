const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea21-ed2b.restdb.io/rest/paintings/" + id, {
  method: "GET",
  headers: {
    "x-apikey": "6284e471e8128861fcf3d3fc",
  },
})
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(
    "p.title"
  ) .textContent = product.title

  document.querySelector(
    "p.size"
  ) .textContent = product.size

  document.querySelector(
    "p.materials"
  ) .textContent = product.materials

  document.querySelector(
    "p.info"
  ) .textContent = product.info

  document.querySelector(
    "p.price"
  ) .textContent = product.prize + " kr."

}

