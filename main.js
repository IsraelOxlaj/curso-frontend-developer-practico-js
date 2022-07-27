const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuCarritoIco = document.querySelector(".navbar-shopping-cart")

const menuBurguer = document.querySelector(".menu")
const menuMobil = document.querySelector(".mobile-menu")
const menuMyOrder = document.querySelector(".product-detail")

const productDetailContainer = document.querySelector('.product-detail2')
const productDetailContainerClose = document.querySelector('.product-detail2-close')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuBurguer.addEventListener('click', toggleMobilMenu)
menuCarritoIco.addEventListener('click', toggleMyOrderMenu)
productDetailContainerClose.addEventListener('click', closeProductDetailAside)

/**abrir cerrar menu de email */
function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive')
  if(!menuMyOrder.classList.contains('inactive')){
    menuMyOrder.classList.add('inactive')
  }
}
/*cerrar o abrir menu amburguesa*/
function toggleMobilMenu(){
  menuMobil.classList.toggle('inactive')
  menuMyOrder.classList.add('inactive')
  productDetailContainer.classList.add('inactive')
}
/**funcion para cerrar abrir carrito de compras */
function toggleMyOrderMenu(){
  menuMyOrder.classList.toggle('inactive')
  menuMobil.classList.add('inactive')
  productDetailContainer.classList.add('inactive')
}
/*abrir detalle produto */
function openProductDetailAside(){
  productDetailContainer.classList.remove('inactive')
  menuMyOrder.classList.add('inactive')
  menuMobil.classList.add('inactive')
}
/*cerrar detalle producto */
function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

const productList =[]

productList.push({
  name: 'ball',
  price: 300,
  image: 'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    const img = document.createElement('img')
    img.setAttribute('src', product.image)
    img.addEventListener('click', openProductDetailAside)
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div')
  
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p')
    productName.innerText= product.name
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productImgCart)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(img)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList)