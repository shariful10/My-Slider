const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
]

const titles = [
    'First Slide Label',
    'Second Slide Label',
    'Third Slide Label',
    'Forth Slide Label',
    'Fifth Slide Label',
    'Sixth Slide Label',
    'Seventh Slide Label',
    'Eighth Slide Label',
    'Ninth Slide Label'
]

let imgIndex = 0;
const imgEl = document.getElementById("slider-img");
const titleEl = document.getElementById("slider-title");

setInterval(() => {
    if ((imgIndex === images.length) && (imgIndex === titles.length)) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgEl.setAttribute("src", imgUrl);
    const titleUrl = titles[imgIndex];
    titleEl.innerText = titleUrl;
    imgIndex++;
}, 2000)