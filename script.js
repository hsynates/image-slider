const images = [{
    image: 'img/hsyn.jpg'
}, {
    image: 'img/hsyn1.jpg'
}, {
    image: 'img/hsyn2.jpg'
}, {
    image: 'img/hsyn3.jpg'
}, {
    image: 'img/hsyn4.jpg'
}, {
    image: 'img/hsyn5.jpg'
}];

let index = 0;

const sliderImage = document.querySelector('.slider-img');
const iconControl = document.querySelectorAll('.icon-slider-control');
const sliderPreviewControl = document.querySelector('.slider-preview-control');
// const btnSliderPreview = document.querySelectorAll('.btn-slider-preview');

mainEvenetListener();
createBtnSliderPreview();

function mainEvenetListener() {
    iconControl.forEach(function (item) {
        item.addEventListener('click', sliderControl);
    });

    // btnSliderPreview.forEach(function (item, i) {
    //     item.addEventListener('click', function () {
    //         sliderPreviewControl(i);
    //     });
    // });
}

function slider(indis) {
    indis = index;
    sliderImage.setAttribute('src', images[indis].image);
}

function sliderControl(e) {
    if (e.target.id === 'caret-prev') {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        console.log(index);
    } else if (e.target.id === 'caret-next') {
        index++;
        if (index > images.length - 1) {
            index = 0;
        }
        console.log(index);
    }
    slider(index);
}

function createBtnSliderPreview() {
    for (let i = 0; i < images.length; i++) {
        const btnSliderPreview = document.createElement('button');
        btnSliderPreview.setAttribute('type', 'button');
        btnSliderPreview.className = 'btn-slider-preview';

        const imgBtnPreview = document.createElement('img');
        imgBtnPreview.setAttribute('src', images[i].image);
        btnSliderPreview.appendChild(imgBtnPreview);

        sliderPreviewControl.appendChild(btnSliderPreview);

        btnSliderPreview.addEventListener('click', function () {
            slider(index = i);
        });
    }
}

// function sliderPreviewControl(i) {
//     slider(index = i);
// }