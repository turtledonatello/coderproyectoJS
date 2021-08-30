//Contenedor del carrito
var $containerCart = document.querySelector('#containerCart');
var $totalCart = document.querySelector('#totalCart');

//Agregar al carrito
function addOnCart(product) {
  $containerWidgetProducts.innerHTML = '';
  //Acá uso jquery
  $('body').append(`
  <div class="cart__notification">
    <p><i class="fas fa-check-square"></i> Producto agregado</p>
  </div>  
  `);
  //Acá uso jquery
  $('.cart__notification').animate({
    top: '30px',
    right: '20px',
    transition: '.1s',
  });
  setTimeout(() => {
    $('.cart__notification').css('transform', 'translateY(-100px)');
  }, 2000);
  let exist = cart.some((prod) => prod.id === product.id);
  if (!exist) {
    cart.push(product);
  } else {
    cart.map((prod) => {
      if (prod.id === product.id) {
        prod.qty++;
      }
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  $totalCart.innerHTML = `
    <p>Total: <span>$${totalCart()}</span></p>
 `;
  reloadProducts();
  buyAllBtn();
}
//Eliminar del carrito
function deleteProductOnCart(id) {
  Swal.fire({
    title: 'Seguro que querés eliminar este producto?',
    text: 'No podras volver atras!!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#9044d8',
    cancelButtonColor: 'rgb(125, 125, 125)',
    confirmButtonText: 'Si, Borrar ahora!',
  }).then((result) => {
    if (result.isConfirmed) {
      cart = cart.filter((product) => product.id !== id);
      localStorage.setItem('cart', JSON.stringify(cart));
      reloadProducts();
      $totalCart.innerHTML = `
      <p>Total: <span>$${totalCart()}</span></p>
   `;
      if (cart.length == 0) {
        let noProductsInCart = document.createElement('p');
        noProductsInCart.innerText = 'No tenes productos en el carrito';
        $totalCart.innerHTML = '';
        $containerWidgetProducts.append(noProductsInCart);
        buyAllBtn();
      }
    }
  });
}
//Funcion para calcular el total del carrito
function totalCart() {
  let suma = cart.reduce(
    (acumulador, product) => acumulador + product.price * product.qty,
    0
  );
  return suma;
}

//Funcion para calcular el total del carrito
function totalCartDetail(cart) {
  let suma = cart.reduce(
    (acumulador, product) => acumulador + product.price * product.qty,
    0
  );
  return suma;
}
