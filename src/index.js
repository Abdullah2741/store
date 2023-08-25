window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "./sass/custom.scss";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min";
import './sass/style.scss';

//   شفرة العنوان المنبثق اسفل عربة الشراء
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//  شفرة عند الضغط على الزر تظهر رسالة
document.querySelectorAll(".add-to-card-btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("اضيف المنتج لعربة الشراء");
  });
});



//  شفرة الالوان والمقاسات المتاحة
document
  .querySelectorAll('.size-option input[type="radio"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".size-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });

document
  .querySelectorAll('.color-option input[type="radio"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".color-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });





// شفرة التحديث التلقائى للسعر الاجمالي
//حساب سعر اجمالي المنتج

document.querySelectorAll("[data-product-quantity]").forEach((item) => {
  item.addEventListener("change", () => {
    const newQuantity = item.value;
    const parent = item.closest("[data-product-info]");
    const pricePerUnit = parent.getAttribute("data-product-price");
    const totalPriceForProduct = newQuantity * pricePerUnit;
    parent.querySelector(".total-price-for-product").innerHTML =
      totalPriceForProduct + "$";

    calculateTotalPrice();
  });
});

//  حذف المنتجات من عربة الشراء
document.querySelectorAll("[data-remove-card]").forEach((item) => {
  item.addEventListener("click", () => {
    item.closest("[data-product-info]").remove();
    calculateTotalPrice();
  });
});

function calculateTotalPrice() {
  let totalPriceForAllProduct = 0;
  document.querySelectorAll("[data-product-info]").forEach((product) => {
    const pricePerUnite = product.getAttribute("data-product-price");
    const quantity = product.querySelector("[data-product-quantity]").value;
    const totalPriceForProduct = pricePerUnite * quantity;
    totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
  });
  document.getElementById("total-price-for-all-product").innerHTML =
    totalPriceForAllProduct + "$";
}



//  شفرة لاضافة المدن الخاصة بكل دولة عند تحديدها
const cititesByCountry = {
  sa: ["الرياض", "جدة", "مكة", "المدينة", "الدمام"],
  eg: ["القاهرة", "الاسكندرية", "الزقازيق", "منيا القمح", "بنها"],
  Qt: ["الدوحة", "العريش", "الدوحة الجديدة", "عين سنان", "ابو ثايلة"],
  Or: ["عمان", "الزرقا", "مرج الحمام", "العقبة"],
  Im: ["دبي", "ابوظبي", "عجمان", "جبل علي", "مدينة زايد", "الرمس", "المدام"],
};
document.querySelectorAll('select[name="country"]').forEach((item) => {
  item.addEventListener("change", () => {
    const country = item.value;
    const cities = cititesByCountry[country];

    document
      .querySelectorAll("#paymentcities option")
      .forEach((option) => option.remove());

    const firstoption = document.createElement("option");
    const optiontext = document.createTextNode("اختر مدينة");
    firstoption.appendChild(optiontext);
    firstoption.setAttribute("value", "");
    firstoption.setAttribute("selected", "true");
    firstoption.setAttribute("disabled", "true");

    const city_options = document.getElementById("paymentcities");
    city_options.appendChild(firstoption);

    cities.forEach((city) => {
      const newoption = document.createElement("option");
      const optiontext = document.createTextNode(city);
      newoption.appendChild(optiontext);
      newoption.setAttribute("value", city);
      city_options.appendChild(newoption);
    });
  });
})
 
document.querySelectorAll("#form-checkout input[name='payment-method']").forEach(item =>{
  item.addEventListener('change',()=>{
    const paymentmethod = item.value;
    const criditcardinputs = document.querySelectorAll("#cridit_card_info input")

    if(paymentmethod === 'on_delivery'){
      criditcardinputs.forEach(input =>{
        input.style.display="none"
      })
    }else{
      criditcardinputs.forEach(input =>{
        input.style.display="block"
      })
    }
  })
})




//  شفرة الالوان والمقاسات المتاحة
document
  .querySelectorAll('.size-option input[type="radio"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".size-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });

document
  .querySelectorAll('.color-option input[type="radio"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".color-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });


(
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  () => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }
)();

// شفرة التاريخ في ذيل الصفحة
document.getElementById("fullyear").innerHTML = new Date().getFullYear();
