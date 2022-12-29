
// Cart menu 
let cartMenu = document.querySelector('nav .cartMenu i');
let sideCart = document.querySelector('.sideCart');
let leaveCart = document.querySelector('.sideCart .back i');


let isCartOn = false

cartMenu.addEventListener('click', function () {



    sideCart.style.transform = 'translateX(0%)'

    isClicked = false


})

leaveCart.addEventListener('click', function () {
    sideCart.style.transform = 'translateX(110%)';




})










let getProductInfo = async () => {
    try {

        let res = await axios.get('Products.json');
        let result = res.data;
        localStorage.setItem("products", JSON.stringify(result))

        if (!localStorage.getItem("cart")) {
            localStorage.setItem('cart', "[]")
        }

    }
    catch (e) {
        console.log("error ! ", e);
    }
}

getProductInfo()





// add product to cart


let addedProducts = document.querySelector('.addedProducts')

let buy_Items_In_Cart = document.querySelector('.buy_Items_In_Cart')

buy_Items_In_Cart.style.display = 'none';

//   GLOBAL VARIABLES

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

let add_To_Cart_btn = document.querySelector('.AddCartBtn button')

addedProducts.innerHTML = ''
add_To_Cart_btn.disabled  = false

for (let i = 0; i < JSON.parse(localStorage.getItem("cart")).length; i++) {

    let oneProduct_InLocal = JSON.parse(localStorage.getItem('cart'))[i]

    addProduct(oneProduct_InLocal, i)



}

if (addedProducts.innerHTML === '') {
    buy_Items_In_Cart.style.display = 'none';

    let emptyDIV = document.createElement('DIV')
    emptyDIV.innerHTML = 'Cart is empty';
    emptyDIV.classList.add('emptyDIV')
    addedProducts.append(emptyDIV)

} else {
    buy_Items_In_Cart.style.display = 'flex';


}


add_To_Cart_btn.addEventListener('click', function () {
    showAlertMessage("item has been added succesfully", '#002652')

    addedProducts.innerHTML = ''
    add_To_Cart_btn.disabled  = true

    for (let i = 0; i < JSON.parse(localStorage.getItem('cart')).length; i++) {


        let oneProduct_InLocal = JSON.parse(localStorage.getItem('cart'))[i]


        addProduct(oneProduct_InLocal, i)

    }






})

// ADDING PRODUCT IN THE CART 

function addItemToCart(productID) {




    let product = products.find(function (product) {
        return product.id == productID;
    })

    if (cart.length == 0) {
        cart.push(product)
    } else {
        let res = cart.find(element => element.id == productID)
        if (res === undefined) {
            cart.push(product)
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart))








}




function changeQTY(productID) {
    let product = products.find(function (product) {
        return product.id == productID;
    })

    if (document.querySelector('#qty').value <= 15) {
        product.qty = document.querySelector('#qty').value

    } else {
        showAlertMessage("you can't order more than 15 pieces !", '#2F2F2F')
        product.qty = 15

    }

}

function changeSIZE(productID) {
    let product = products.find(function (product) {
        return product.id == productID;
    })

    product.size = document.querySelector('#Size').value

}

function addProduct(oneProduct_InLocal, i) {


    let product_name = oneProduct_InLocal.name
    let product_price = oneProduct_InLocal.price

    let product_image = oneProduct_InLocal.image

    let product_in_cart = document.createElement('DIV')
    product_in_cart.classList.add('product_in_cart');

    let image_cart = document.createElement('DIV')
    image_cart.classList.add('image_cart');

    let img = document.createElement('IMG')

    img.src = product_image

    let info_product_cart = document.createElement('DIV')
    info_product_cart.classList.add('info-product_cart');


    qty = oneProduct_InLocal.qty
    let size = oneProduct_InLocal.size




    let h3 = document.createElement('H3')
    h3.innerText = qty + ' x ' + product_name

    let b = document.createElement('B');
    b.innerText = product_price * qty + ' $  ';

    let bSize = document.createElement('P');
    bSize.innerText = 'size : ' + size


    let delete_from_Cart = document.createElement('SMALL')
    delete_from_Cart.innerText = 'DELETE'
    delete_from_Cart.id = i + 1

    delete_from_Cart.addEventListener('click', function () {

        removeItemCart(JSON.parse(localStorage.getItem('cart'))[i].id)


    })

    let bigTotal = 0
    for(let p = 0; p<cart.length; p++){
       bigTotal = bigTotal + cart[p].price * cart[p].qty
    }
    
    console.log(bigTotal)
    
    let totalPrice = document.querySelector('.TOTAL')
    totalPrice.innerText = bigTotal


    if (qty <= 15) {

        image_cart.append(img)

        info_product_cart.append(h3)
        info_product_cart.append(b)
        info_product_cart.append(bSize)
        info_product_cart.append(delete_from_Cart)

        product_in_cart.append(image_cart)
        product_in_cart.append(info_product_cart)


        addedProducts.append(product_in_cart)


        buy_Items_In_Cart.style.display = 'flex'
    } else {

        // add_To_Cart_btn.disabled = true;



    }


}


// REMOVING PRODUCT FROM THE CART 

function removeItemCart(productID) {

    let product = cart.find(function (product) {
        return product.id == productID;
    })

    let indexOfProduct = cart.indexOf(product)
    cart.splice(indexOfProduct, 1)


    localStorage.setItem('cart', JSON.stringify(cart))

    location.reload()


}




function showAlertMessage(message, color) {

    let alertMessage = document.querySelector('.alertMessage');
    alertMessage.style.backgroundColor = color
    alertMessage.style.display = 'flex'
    alertMessage.children[0].innerText = message


    setTimeout(() => {
        alertMessage.style.opacity = 1
    }, 50);


    setTimeout(function () {
        alertMessage.style.opacity = 0

        setTimeout(() => {
            alertMessage.style.display = 'none'

        }, 250);

    }, 2500)

}




