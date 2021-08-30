//Acá uso jquery
$(document).ready(() => {
  let productsInCart = JSON.parse(localStorage.getItem('cart'));
  let suma = totalCartDetail(productsInCart);
  //Recorro productos en localStorage
  productsInCart.map((product) => {
    $('#tableCart').append(`
    <tr>
        <td>${product.name}</td>
        <td>
            <img src=${product.url} alt=${product.name} />
        </td>
        <td>${product.qty}</td>
        <td>$${product.price}</td>
    </tr>
  `);
  });
  //Pongo el precio total en la tabla
  $('#priceFinal').append(suma);
});
