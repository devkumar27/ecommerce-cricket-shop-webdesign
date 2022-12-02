const qty = document.getElementById("quantity");
const dec = document.getElementById("decrement");
const inc = document.getElementById("increment");

inc.onclick = function() {
    qty.stepUp(1);
} 
dec.onclick = function() {
    qty.stepDown(1);
} 

const mainImg = document.querySelector("#mainImg");
const smallImgDivs = document.querySelectorAll(".smallImgDiv");
smallImgDivs[0].addEventListener("click", function () {
    smallImgDivs[0].classList.add("active");
    mainImg.src = `http://127.0.0.1:5501/cricket_shop_project/image_resources/p1_0.png`;
    smallImgDivs[1].classList.remove("active");
    smallImgDivs[2].classList.remove("active");
    smallImgDivs[3].classList.remove("active");
});
smallImgDivs[1].addEventListener("click", function () {
    smallImgDivs[1].classList.add("active");
    mainImg.src = `http://127.0.0.1:5501/cricket_shop_project/image_resources/p1_1.png`;
    smallImgDivs[0].classList.remove("active");
    smallImgDivs[2].classList.remove("active");
    smallImgDivs[3].classList.remove("active");
});
smallImgDivs[2].addEventListener("click", function () {
    smallImgDivs[2].classList.add("active");
    mainImg.src = `http://127.0.0.1:5501/cricket_shop_project/image_resources/p1_2.png`;
    smallImgDivs[1].classList.remove("active");
    smallImgDivs[0].classList.remove("active");
    smallImgDivs[3].classList.remove("active");
});
smallImgDivs[3].addEventListener("click", function () {
    smallImgDivs[3].classList.add("active");
    mainImg.src = `http://127.0.0.1:5501/cricket_shop_project/image_resources/p1_3.png`;
    smallImgDivs[1].classList.remove("active");
    smallImgDivs[2].classList.remove("active");
    smallImgDivs[0].classList.remove("active");
});




