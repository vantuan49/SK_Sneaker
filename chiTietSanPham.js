//small image slider
const sliderImageLists = document.querySelector('.slider_list');
const firstImage = sliderImageLists.querySelectorAll('.slider_list-item')[0];
const sliderControlButtons = document.querySelectorAll('.product_image-slider-button');
//choose color of product
const sizeListItems = document.querySelectorAll('.size-list_item');
//Quantity Form
const quantityMinusBtn = document.querySelector('#minus_btn');
const quantityPlusBtn = document.querySelector('#plus_btn');
let quantityCount = document.querySelector('#quantity_count');
//change image form small image to large image
const smallImageList = document.querySelectorAll('.slider_list-item--img');//danh sách các ảnh nhỏ 
let largeImage = document.querySelector('.image_primary--img');//ảnh lớn(ảnh chính)
//handle image slider
function imageSlider() {
    sliderControlButtons.forEach(item => {
        item.addEventListener('click', () => {
            let firstImgHeight = firstImage.clientHeight;
            if (item.id == "next_btn") {
                sliderImageLists.scrollTop += firstImgHeight;
            } else {
                sliderImageLists.scrollTop -= firstImgHeight;
            }
        }); 
    });

}
imageSlider();
//handle choose color active  
let sizeActived;
function activeChooseSize() {
    sizeListItems.forEach((sizeItem, sizeItemIndex) => {
        sizeItem.addEventListener('click', () => {
          if(!sizeActived){
             sizeItem.classList.add('size_actived');
             sizeActived = true;
          }
          else{
            sizeItem.classList.remove('size_actived');
            sizeActived = false;
          }
        });

    });
}
activeChooseSize();
//Handle Quantity Form
function renderQuantity(amount){//Render số lượng ra ô input
     quantityCount.value = parseInt(amount);
   
}

function plusQuantity(){//tăng số lượng thêm 1 khi nhấn nút tăng
    quantityCount.value++;
    renderQuantity(quantityCount.value);

}

function minusQuantity(){//giảm số lượng xuống khi nhấn nút giảm
    quantityCount.value--;
    if(quantityCount.value < 1) quantityCount.value = 1; renderQuantity(quantityCount.value);
}  
 quantityCount.addEventListener('input',() =>{
    if(quantityCount.value < 1) quantityCount.value = 1; renderQuantity(quantityCount.value);
     
 })
//handle change image form small to large
function handleChangeImage(){
    smallImageList.forEach((smallImage)=>{
        smallImage.addEventListener('mouseover',() => {
            largeImage.src = smallImage.src;
        })

    })
}
handleChangeImage();

















