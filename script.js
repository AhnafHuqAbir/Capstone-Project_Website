const sliderImg = document.getElementById("imageSlider");
const imgs = [
    '/img_1.jpg',
    '/img_2.jpg',
    '/img_3.jpg'

];

let index = 0;
setInterval(function () {
    sliderImg.classList.add("fade-out")
    setTimeout(function () {
        index = (index + 1) % imgs.length;
        sliderImg.src = imgs[index];
        sliderImg.classList.remove('fade-out');
    }, 500);
}, 4000);