//Elementos HTML
var $cartWidget = document.querySelectorAll('#cart');
var $cartClose = document.querySelector('#close');
var $widgetCart = document.querySelector('#widget');

//Template Cart
function templateCart(name, price, id, qty) {
  let template = `
    <div class="widget__product">
      <div>
        <p>${name}</p>
        <p>$${price}</p>
        <p>Cantidad: ${qty}</p>
      </div>
      <div>
      <button class="widget__product--btn" id="deleteCart" onclick="deleteProductOnCart(${id})">
        <i  class="fas fa-trash-alt" ></i>
      </button>
      </div>
  </div>
    `;
  return template;
}

//Widget Cart Contenedor
var $containerWidgetProducts = document.querySelector(
  '#containerWidgetProducts'
);

//Funcion para comprar todo lo del carrito
function buyAllBtn() {
  let $btnBuyContainer = document.querySelector('#widgetBuy');
  let btnBuy = `
  <input type="submit" class="widget__cart--delete" id="deleteAll" value="Borrar todo">
  <input type="submit" class="widget__cart--buyAll" id="buyAll" value="Comprar todo">
  `;
  let productInCart = JSON.parse(localStorage.getItem('cart'));
  $btnBuyContainer.innerHTML = btnBuy;
  if (productInCart === null) {
    return ($btnBuyContainer.innerHTML = '');
  }
  $('#buyAll').click(() => {
    window.location.href = 'cartdetail.html';
  });
  $('#deleteAll').click(() => {
    localStorage.clear();
    window.location.reload();
  });
}

//Toggle para cerrar widget
for (const widget of $cartWidget) {
  widget.addEventListener('click', () => {
    $widgetCart.classList.toggle('widget__open');
  });
}
