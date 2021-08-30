let url = `https://api.mercadolibre.com/sites/MLA/search?q=celulares&limit=10`;

function template(product) {
  let template = `
    <div class="card">
        <div class="card__top">
        <img src=${product.url} alt=${product.name} />
        </div>
        <div class="card__info">
        <h3 id="name">${product.name}</h3>
        <h4 id="price">$${product.price}</h4>
        </div>
        <div class="card__buttons">
        <button class="card__buttons--buy" id="buyProduct" onclick='buyProduct(${JSON.stringify(
          product
        )})'>
        Comprar Ahora
        </button>
      </div>
    </div>
  `;
  return template;
}
//Pedido a Mercadolibre por ajax
$.ajax({
  method: 'GET',
  url: url,
  success: (res) => {
    let container = document.querySelector('#containerProductsMeli');

    res.results.map((product) => {
      const { title, price, thumbnail } = product;

      let prod = {
        name: title,
        price,
        url: thumbnail,
        qty: 1,
      };
      container.innerHTML += template(prod);
    });
  },
});
