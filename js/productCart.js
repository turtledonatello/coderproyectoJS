//Contenedor del carrito
var $containerCart = document.querySelector('#containerCart');
var $totalCart = document.querySelector('#totalCart');

//Agregar al carrito
function addOnCart(product) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1400,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: `Producto ${product.name} agregado al carrito`,
  });
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
