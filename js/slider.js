// Random Images For Slider
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

// Random Titles For Slider
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

// Random Descriptions For Slider
const description = [
    'This is my content for the first slide.',
    'This is my content for the second slide.',
    'This is my content for the third slide.',
    'This is my content for the forth slide.',
    'This is my content for the fifth slide.',
    'This is my content for the sixth slide.',
    'This is my content for the seventh slide.',
    'This is my content for the eighth slide.',
    'This is my content for the ninth slide.'
]

let imgIndex = 0;
const imgEl = document.getElementById("slider-img");
const titleEl = document.getElementById("slider-title");
const descEl = document.getElementById("slider-deccription");

setInterval(() => {
    if ((imgIndex === images.length) && (imgIndex === titles.length) && (imgIndex === description.length)) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    const titleUrl = titles[imgIndex];
    const descUrl = description[imgIndex];
    imgEl.setAttribute("src", imgUrl);
    titleEl.innerText = titleUrl;
    descEl.innerText = descUrl;
    imgIndex++;
}, 2000)