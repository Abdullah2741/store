
window.bootstrap = require ("bootstrap/dist/js/bootstrap.bundle.js")
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import "@fortawesome/fontawesome-free/js/all.min.js"


//   شفرة العنوان المنبثق اسفل عربة الشراء 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//  شفرة عند الضغط على الزر تظهر رسالة 
document.querySelectorAll(".add-to-card-btn").forEach(item => {
    item.addEventListener("click",() =>{
        alert("اضيف المنتج لعربة الشراء")
    })
})



  //  شفرة الالوان والمقاسات المتاحة 
  document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
  item.addEventListener('change', () => {
      document.querySelectorAll('.color-option').forEach(i => {
          i.classList.remove('active')
      })
      item.parentNode.parentNode.classList.add('active')
  })
})

// شفرة التحديث التلقائى للسعر الاجمالي 
//حساب سعر اجمالي المنتج

document.querySelectorAll("[data-product-quantity]").forEach(item =>{
  item.addEventListener("change", () => {
    const newQuantity = item.value;
    const parent = item.closest('[data-product-info]');
    const pricePerUnit = parent.getAttribute('data-product-price');
    const totalPriceForProduct = newQuantity * pricePerUnit
    parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$"

    calculateTotalPrice()
  })
 })

//  حذف المنتجات من عربة الشراء
document.querySelectorAll("[data-remove-card]").forEach(item => {
  item.addEventListener("click", () =>{
    item.closest("[data-product-info]").remove();
          calculateTotalPrice()

  })
})

function calculateTotalPrice(){
  let totalPriceForAllProduct = 0;
  document.querySelectorAll("[data-product-info]").forEach(product =>{
    const pricePerUnite = product.getAttribute("data-product-price");
    const quantity = product.querySelector("[data-product-quantity]").value 
    const totalPriceForProduct = pricePerUnite * quantity
    totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct
  })
  document.getElementById("total-price-for-all-product").innerHTML = totalPriceForAllProduct + "$"
}
 



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
 
  //  شفرة الالوان والمقاسات المتاحة 
    document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
      item.addEventListener('change', () => {
          document.querySelectorAll('.size-option').forEach(i => {
              i.classList.remove('active')
          })
          item.parentNode.parentNode.classList.add('active')
      })
  })

  document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})








// شفرة التاريخ في ذيل الصفحة
document.getElementById("fullyear").innerHTML = new Date().getFullYear();