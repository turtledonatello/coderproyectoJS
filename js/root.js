//Array de productos
var products = [
  {
    id: 1,
    name: 'Auricular Logitech G733',
    qty: 1,
    price: 5000,
    url: 'img/products/logitech.jpg',
  },
  {
    id: 2,
    name: 'Auricular Sony G3',
    qty: 1,
    price: 3000,
    url: 'img/products/sony.jpg',
  },
  {
    id: 3,
    name: 'Auricular Motorola G',
    qty: 1,
    price: 5000,
    url: 'img/products/motorola.jpg',
  },
  {
    id: 4,
    name: 'Auricular Razer',
    qty: 1,
    price: 4200,
    url: 'img/products/razer.jpg',
  },
  {
    id: 5,
    name: 'Auricular Redragon',
    qty: 1,
    price: 3100,
    url: 'img/products/redragon.jpg',
  },
  {
    id: 6,
    name: 'Auricular Redragon RGBA',
    qty: 1,
    price: 6000,
    url: 'img/products/redragonrgba.jpg',
  },
  {
    id: 7,
    name: 'Auricular HyperX',
    qty: 1,
    price: 7000,
    url: 'img/products/hyperx.jpg',
  },
  {
    id: 8,
    name: 'Auricular HyperX 2',
    qty: 1,
    price: 800,
    url: 'img/products/hyperx2.jpg',
  },
  {
    id: 9,
    name: 'Auricular Corsair',
    qty: 1,
    price: 7000,
    url: 'img/products/corsair.jpg',
  },
  {
    id: 10,
    name: 'Auricular Edifier',
    qty: 1,
    price: 2300,
    url: 'img/products/edifier.jpg',
  },
];

//Array Cart
var cart = [];

//Container de productos
var $containerProducts = document.querySelector('#containerProducts');

//Template Card
function templateCard(product) {
  let template = ($containerProducts.innerHTML += `
      <div class="card">
          <div class="card__top">
          <img src="${product.url}" alt="${product.name}" />
          </div>
          <div class="card__info">
          <h3 id="name">${product.name}</h3>
          <h4 id="price">$${product.price}</h4>
          </div>
          <div class="card__buttons">
          <button class="card__buttons--cart" id="addToCart" onclick='addOnCart(${JSON.stringify(
            product
          )})'>
          Agregar al carrito <i class="fas fa-cart-plus"></i>
          </button>
          
          <button class="card__buttons--buy" id="buyProduct" onclick='buyProduct(${JSON.stringify(
            product
          )})'>
          Comprar Ahora
          </button>
        </div>
      </div>
    `);
  return template;
}

//Función para recargar los productos
function reloadProducts() {
  let cartProductInLocalStorage = JSON.parse(localStorage.getItem('cart'));
  let noProductsInCart = document.createElement('p');
  noProductsInCart.innerText = 'No tenes productos en el carrito';
  //Me fijo si tengo productos en LocalStorage
  if (cartProductInLocalStorage) {
    cart = cartProductInLocalStorage;
    $containerWidgetProducts.innerHTML = '';
    cart.map(({ name, price, id, qty }) => {
      $containerWidgetProducts.innerHTML += templateCart(name, price, id, qty);
    });
    noProductsInCart = '';
    containerProducts.innerHTML = '';
  }
  products.map((product) => {
    templateCard(product);
  });
  $containerWidgetProducts.append(noProductsInCart);

  if (
    cartProductInLocalStorage == null ||
    cartProductInLocalStorage.length === 0
  ) {
    localStorage.removeItem('cart');
  }
  $containerCart.innerHTML = `${cart.length}`;
  $containerWidgetProducts.append(noProductsInCart);
  showProduct();
  buyAllBtn();
}
//Recargo los productos apenas inicia la web
window.onload = reloadProducts();
