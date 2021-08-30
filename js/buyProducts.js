let templateBuy = `
    <h2>Gracias por tu compra</h2>
    <div class="success-checkmark">
    <div class="check-icon">
    <span class="icon-line line-tip"></span>
    <span class="icon-line line-long"></span>
    <div class="icon-circle"></div>
    <div class="icon-fix"></div>
    </div>
    </div>
`;

//Boton comprar
$('#btnBuy').click(() => {
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let address = document.querySelector('#address').value;
  let $buyContainer = document.querySelector('#error__form');
  $buyContainer.innerHTML = '';
  if (!name.trim() || !email.trim() || !address.trim()) {
    $buyContainer.innerHTML += `
    <div class="buy__error">
      <p>Todos los campos son obligatorios</p>
    </div>
  `;
    setTimeout(() => {
      $buyContainer.innerHTML = '';
    }, 1500);
  } else {
    $('.buy__product').append(templateBuy);
    $('#buy__form').css('display', 'none');
    setTimeout(() => {
      localStorage.clear();
      window.location.href = 'index.html';
    }, 2000);
  }
});

//Redirecciona con los productos a checkout
function buyProduct(product) {
  localStorage.setItem('comprar', JSON.stringify(product));
  window.location.href = 'checkout.html';
}

//Muestro los productos y agrego a la tabla.
function showProduct() {
  let product = JSON.parse(localStorage.getItem('comprar'));
  let table = document.querySelector('#table');
  $(document).ready(() => {
    if (table !== null) {
      let templateTable = `
        <table class="buy__table">
        <tr>
        <th>Nombre del producto a comprar</th>
        <th>Imagen</th>
        <th>Precio</th>
        </tr>
        <tr>
        <td>${product.name}</td>
        <td>
            <img src=${product.url} alt=${product.name} />
        </td>
        <td>$${product.price}</td>
        </tr>
        </table>
    `;
      $('#table').append(templateTable);
    }
  });
}
showProduct();
