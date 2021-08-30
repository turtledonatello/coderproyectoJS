//Productos ordenados por menor precio
function orderLowProducts(prod = products) {
  $containerProducts.innerHTML = '';
  var orderProduct = prod.sort((product1, product2) => {
    return product1.price - product2.price;
  });
  return orderProduct;
}

//Productos ordenados por mayor precio
function orderHightProducts(prod = products) {
  $containerProducts.innerHTML = '';
  var orderProduct = products.sort((product1, product2) => {
    return product2.price - product1.price;
  });
  return orderProduct;
}

//FILTRO PRODUCTOS
function filterProduct() {
  let $select = document.querySelector('#filter');
  switch ($select.value) {
    case 'low':
      //Recorro los productos para ver el orden de menor a mayor por precio
      const filter = orderLowProducts().map((product) => {
        templateCard(product);
      });
      return filter;

    case 'hight':
      //Recorro los productos para ver el orden de menor a mayor por precio
      const filterHight = orderHightProducts().map((product) => {
        templateCard(product);
      });
      return filterHight;
  }
}

//EVENTO PARA FILTRAR
let $select = document.querySelector('#filter');
$select.addEventListener('click', () => {
  filterProduct();
});
