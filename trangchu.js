//Product Slider
const sliderProductLists = document.querySelector('.product__slider-list');
const firstProduct = document.querySelectorAll('.home__product')[0];
const sliderProductControlButtons = document.querySelectorAll('.product_slider-button');
//Cart
const cartList = document.querySelector('.nav_cart-list');
const cartAddBtn = document.querySelectorAll('.cart__add-button');
const cartListItem = document.querySelector('.cart_list-item');//Tbody
let totalPriceText = document.querySelector('.total__price--price');
let quantityCartNumber = document.querySelector('.cart_quantity--number');
let quantityCartCount = 0;//biến đếm để đếm số lượng sản phẩm trong giỏ hàng khi thêm và xóa sản phẩm
//Quantity in cart
let quantityInputs = document.querySelectorAll('.cell_quantity--input')
//handle image slider
function productSlider() {
    sliderProductControlButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            let firstProductWidth = firstProduct.clientWidth;
            if (btn.id == 'next_btn') {
                sliderProductLists.scrollLeft += firstProductWidth;
            } else {
                sliderProductLists.scrollLeft -= firstProductWidth;
            }
        });
    });

}
productSlider();
//handle cart
cartAddBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        var addBtn = event.target;
        var product = addBtn.parentElement.parentElement;
        var productImage = product.querySelector('.home__product-item__img--img').src;
        var productName = product.querySelector('.home__product-item__name').innerText;
        var productPrice = product.querySelector('.product-item__price--new').innerText;
        var productDataPrice = product.querySelector('.product-item__price--new').getAttribute('price');
        console.log(productDataPrice)
        addProduct(productImage, productName, productPrice, productDataPrice);
        removeProduct();
    })

})
//Thêm sản phẩm 
function addProduct(productImage, productName, productPrice, productDataPrice) {
    let addRow = document.createElement('tr');
    addRow.classList.add("cart_list-item_row")
    let addProductContent = ` 
    <td class="cart_list-item_cell"><img src="${productImage}" alt="" class="cart_cell-product--image"></td>
    <td class="cart_list-item_cell"><span class="cart_cell-product--name">${productName}</span></td>
    <td class="cart_list-item_cell">
       <div class="cart_list-item_cell-quantity">
        <button id="minus_btn" class="cell_quantity--btn">-</button>
        <input id="quantity_count" type="number" class="cell_quantity--input" value="1">
        <button id="plus_btn" class="cell_quantity--btn" onclick = "plus();">+</button>
       </div>
    </td>
    <td class="cart_list-item_cell"><span class="cart_cell-product--price" price = "${productDataPrice}">${productPrice}<sup class="price_unit" style="color: red">đ</sup></span></td>
    <td class="cart_list-item_cell"><button class="cart_cell-product--delete-btn">Xóa</button></td> `;
    addRow.innerHTML = addProductContent;
    cartListItem.appendChild(addRow);
    quantityCartCount++;//tăng biến đếm khi thêm sản phẩm vào giỏ hàng
    displayCartQuantity();
    alert("Đã Thêm Sản Phẩm Vào Giỏ Hàng!!!");
    totalPrice();
   
}
//Xóa sản phẩm
function removeProduct() {
    let removeCartBtn = document.querySelectorAll('.cart_cell-product--delete-btn');
    removeCartBtn.forEach((button) => {
        button.addEventListener('click', (event) => {
            let delBtn = event.target;
            let productItem = delBtn.parentElement.parentElement;
            cartListItem.removeChild(productItem);
            quantityCartCount--;//giảm biến dếm khi xóa sản phẩm khỏi giỏ hàng
            displayCartQuantity();
            totalPrice();
        })

    })

}
//Hiển thị số lượng sản phẩm có trong giỏ hàng
function displayCartQuantity(){
    quantityCartNumber.innerText = quantityCartCount;
}
//Tính tổng tiền
function totalPrice() {
    let priceCells = cartListItem.querySelectorAll('.cart_cell-product--price');
    let totalPrice = 0;
    for (var i = 0; i < priceCells.length; i++) {
        let price = priceCells[i].getAttribute('price');
        totalPrice += parseInt(price);
    }
    totalPriceText.innerText = totalPrice.toLocaleString('de-DE');
    changeBackgroundCart(priceCells.length)
    
}
function changeBackgroundCart(product){
    if(product == 0){
        cartList.style.backgroundImage = "url('./image/gioHangTrong.png')";
    }else{
        cartList.style.backgroundImage = "none";
    }
}
//Tăng giảm số lượng ngay trong giỏ hàng
// function renderQuantity(amount){//Render số lượng ra ô input
//     quantityCount.value = parseInt(amount);
  
// }

// function plusQuantity(){//tăng số lượng thêm 1 khi nhấn nút tăng
//    quantityCount.value++;
//    renderQuantity(quantityCount.value);

// }

// function minusQuantity(){//giảm số lượng xuống khi nhấn nút giảm
//    quantityCount.value--;
//    if(quantityCount.value < 1) quantityCount.value = 1; renderQuantity(quantityCount.value);
// }  
// quantityCount.addEventListener('input',() =>{
//    if(quantityCount.value < 1) quantityCount.value = 1; renderQuantity(quantityCount.value);
    
// })
