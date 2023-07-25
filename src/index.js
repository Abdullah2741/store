
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