const images = [{
    image: 'img/ubuntu-notebook.jpg',
    title: 'Ubuntu',
    text: 'Ubuntu is a Linux distribution based on Debian mostly composed of free and open-source software.',
    link: 'https://www.ubuntu.com'
}, {
    image: 'img/linuxmint-notebook.jpg',
    title: 'Linux Mint',
    text: 'Linux Mint is a community-driven Linux distribution based on Ubuntu.',
    link: 'https://linuxmint.com/'
}, {
    image: 'img/manjaro.jpg',
    title: 'Manjaro Linux',
    text: 'Manjaro is a free and open-source Linux distribution based on the Arch Linux operating system. ',
    link: 'https://manjaro.org/'
}, {
    image: 'img/fedora.jpg',
    title: 'Fedora',
    text: 'Fedora is a Linux distribution developed by the community-supported Fedora Project.',
    link: 'https://getfedora.org/'
}, {
    image: 'img/elemantary.jpeg',
    title: 'ElementaryOS',
    text: 'elementary OS is a Linux distribution based on Ubuntu LTS.',
    link: 'https://elementary.io/'
}, {
    image: 'img/kali.jpg',
    title: 'Kali Linux',
    text: 'Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing.',
    link: 'https://www.kali.org/'
}];

let index = 0;

const sliderImage = document.querySelector('.slider-img');
const iconControl = document.querySelectorAll('.icon-slider-control');
const sliderPreviewControl = document.querySelector('.slider-preview-control');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');
const cardLink = document.querySelector('.card-link');
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
    cardTitle.textContent = images[indis].title;
    cardText.textContent = images[indis].text;
    cardLink.setAttribute('href', images[indis].link);
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
        btnSliderPreview.id = `btn-slider-preview-${i}`;

        const imgBtnPreview = document.createElement('img');
        imgBtnPreview.setAttribute('src', images[i].image);
        btnSliderPreview.appendChild(imgBtnPreview);
        console.log(btnSliderPreview);

        sliderPreviewControl.appendChild(btnSliderPreview);

        btnSliderPreview.addEventListener('click', function () {
            slider(index = i);
        });
    }
}

// function sliderPreviewControl(i) {
//     slider(index = i);
// }