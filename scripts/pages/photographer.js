import { Media } from '../models/Media.js';
import { Photograph } from '../models/Photograph.js';

var param = new URLSearchParams(window.location.search);
var id = param.get("id");

if (!id) {
    window.location="http://127.0.0.1:5500/index.html";
}

async function loadPhotographer() {
    const response = await fetch("../data/photographers.json");
    const photographerAndMediasObject = await response.json();
    
    const mediasJson = photographerAndMediasObject.media;
    const medias = [];
    for (const mediaJson of mediasJson) {
        const media = new Media(mediaJson);
        medias.push(media);
    };

    const photographersJson = photographerAndMediasObject.photographers;
    let photographers;
    for (const photographJson of photographersJson) {
        if (photographJson.id == id) {
            const photographerMedias = medias.filter(media => media.photographerId === photographJson.id);

            const photograph = new Photograph(photographJson, photographerMedias);
            photographers = photograph;
        }
    };
    return photographers;
}

function displayPhotographer(photographers) {
    const photographersSection = document.querySelector(".tri").parentNode
    const firstchild = document.querySelector(".tri")
    const template = document.querySelector('#photographer');
    const clone = document.importNode(template.content, true);
    clone.querySelector('.name').textContent = photographers.name;
    clone.querySelector('.city').textContent = photographers.city;
    clone.querySelector('.country').textContent = photographers.country;
    clone.querySelector('.portrait').setAttribute('src', `../assets/photographers/${photographers.portrait}`);
    clone.querySelector('.portrait').setAttribute('alt', photographers.name);
    clone.querySelector('.tagline').textContent = photographers.tagline;
    clone.querySelector('.photographername').textContent = photographers.name
    photographersSection.insertBefore(clone, firstchild);
};

function displayMedias(photographers, sortOrder) {
    const mediasSection = document.querySelector('.medias_section');
    mediasSection.innerHTML = '';
    const sortedMedias = [...photographers.medias].sort(function (a, b) {
        if (a[sortOrder] === undefined && b[sortOrder] === undefined) {
            return 0;
        } else if (a[sortOrder] === undefined) {
            return 1;
        } else if (b[sortOrder] === undefined) {
            return -1;
        }
        if (typeof a[sortOrder] === 'string' && typeof b[sortOrder] === 'string') {
            return a[sortOrder].localeCompare(b[sortOrder]);
        } else {
            return b[sortOrder]-a[sortOrder];
        };
    });
    const template = document.querySelector('#media');
    var index = 0
    for (const media of sortedMedias) {
        const clone = document.importNode(template.content,true);
        clone.querySelector(".article").setAttribute('data-id', media.id)
        clone.querySelector(".article").setAttribute('data-index', index)
        if (!media.video) {
            clone.querySelector('.photo img').setAttribute('src', `assets/medias/min/min_${media.image}`);
            clone.querySelector('.photo img').setAttribute('alt', media.title);
            clone.querySelector('.title').textContent = media.title;
        } else if (!media.image) {
            clone.querySelector('.photo img').setAttribute('src', `assets/medias/min/min_${media.video}.jpg`);
            clone.querySelector('.photo img').setAttribute('alt', "video");
            clone.querySelector('.title').textContent = "Vidéo";
        }
        const likes = clone.querySelector('.likes')
        const likesimg = clone.querySelector('.imglikes img')
        const likesbtn = clone.querySelector('.imglikes')
        likes.innerHTML = media.likes;
        if (media.isLiked) {
            likesimg.setAttribute('src', 'assets/icons/fillheart.svg')
        }
        likesbtn.addEventListener('click', function () {
            addLike(likes, media, photographers);
        })
        mediasSection.appendChild(clone);
        index++
    }
    photographers.sortedMedias = sortedMedias
    displayLikePrice(photographers)
}

function displayLikePrice(photographers) {
    const likeSection = document.querySelector('.likes_section');
    likeSection.innerHTML = ""
    const template = document.querySelector('#likesprice');
    let totalLikes = 0;
    for (const media of photographers.medias) {
        totalLikes = totalLikes + media.likes;
    }
    const clone = document.importNode(template.content,true);
    clone.querySelector('.totalLikes').textContent = totalLikes;
    clone.querySelector('.price').textContent = photographers.price + "€/jour";
    likeSection.appendChild(clone);
}

const photographers = await loadPhotographer();
const actual = document.querySelector('#actualOrder');
const orderLikes = document.querySelector('#orderLikes');
const orderDate = document.querySelector('#orderDate');
const orderTitle = document.querySelector('#orderTitle');
const select = document.querySelector('.select');
const arrow = document.querySelector('.arrow');
const btnarrow = document.querySelector('.btnarrow');
let clicked = false;
const separator1 = document.querySelector('#separator1');
const separator2 = document.querySelector('#separator2');
const separator3 = document.querySelector('#separator3');
let triactuel = "likes"

orderLikes.addEventListener('click', async function () {
    displayMedias(photographers, 'likes');
    prepareCarrousel(photographers)
    actual.innerHTML = "Popularité";
    orderLikes.classList.add("invisible");
    orderDate.classList.add("invisible");
    orderTitle.classList.add("invisible");
    separator1.classList.add("invisible");
    separator2.classList.add("invisible");
    separator3.classList.add("invisible");
    clicked = false
    select.classList.remove("selecttwo");
    triactuel = "likes"
})

orderDate.addEventListener('click', async function () {
    displayMedias(photographers, 'date');
    prepareCarrousel(photographers)
    actual.innerHTML = "Date";
    orderLikes.classList.add("invisible");
    orderDate.classList.add("invisible");
    orderTitle.classList.add("invisible");
    separator1.classList.add("invisible");
    separator2.classList.add("invisible");
    separator3.classList.add("invisible");
    clicked = false
    select.classList.remove("selecttwo");
    triactuel = "date"
})

orderTitle.addEventListener('click', async function () {
    displayMedias(photographers, 'title');
    prepareCarrousel(photographers)
    actual.innerHTML = "Titre";
    orderLikes.classList.add("invisible");
    orderDate.classList.add("invisible");
    orderTitle.classList.add("invisible");
    separator1.classList.add("invisible");
    separator2.classList.add("invisible");
    separator3.classList.add("invisible");
    clicked = false
    select.classList.remove("selecttwo");
    triactuel = "title"
})

btnarrow.addEventListener('click', async function () {
    if (clicked === true) {
        arrow.classList.remove("arrowfocus")
        if (actual.innerHTML === "Popularité") {
            orderDate.classList.add("invisible");
            orderTitle.classList.add("invisible");
            separator1.classList.add("invisible");
            separator2.classList.add("invisible");
            separator3.classList.add("invisible");
        } else if (actual.innerHTML === "Date") {
            orderLikes.classList.add("invisible");
            orderTitle.classList.add("invisible");
            separator1.classList.add("invisible");
            separator2.classList.add("invisible");
            separator3.classList.add("invisible");
        } else {
            orderLikes.classList.add("invisible");
            orderDate.classList.add("invisible");
            separator1.classList.add("invisible");
            separator2.classList.add("invisible");
            separator3.classList.add("invisible");
        }
        select.classList.remove("selecttwo");
        arrow.setAttribute("aria-expanded", "false");
        clicked = false;
    } else {
        arrow.classList.add("arrowfocus")
        if (actual.innerHTML === "Popularité") {
            orderDate.classList.remove("invisible");
            orderTitle.classList.remove("invisible");
            separator2.classList.remove("invisible");
            separator3.classList.remove("invisible");
        } else if (actual.innerHTML === "Date") {
            orderLikes.classList.remove("invisible");
            orderTitle.classList.remove("invisible");
            separator1.classList.remove("invisible");
            separator3.classList.remove("invisible");
        } else {
            orderLikes.classList.remove("invisible");
            orderDate.classList.remove("invisible");
            separator1.classList.remove("invisible");
            separator2.classList.remove("invisible");
        }
        select.classList.add("selecttwo");
        arrow.setAttribute("aria-expanded", "true");
        clicked = true;
    }
})

function addLike(likes, media, photographer){
    const totalLikes = document.querySelector('.totalLikes')
    const nbrOfLikes = parseInt(totalLikes.innerHTML)

    if (media.isLiked) {
        media.likes = media.likes - 1
        likes.innerHTML = media.likes
        totalLikes.innerHTML = nbrOfLikes - 1
        console.log('déliké')
        if (triactuel === 'likes') {
            displayMedias(photographer, 'likes')
        }
        document.querySelector(`[data-id="${media.id}"] .imglikes img`).setAttribute("src", "assets/icons/heart.svg")
    } else {
        media.likes++
        likes.innerHTML = media.likes
        totalLikes.innerHTML = nbrOfLikes + 1
        console.log('liké')
        if (triactuel === 'likes') {
            displayMedias(photographer, 'likes')
        }
        document.querySelector(`[data-id="${media.id}"] .imglikes img`).setAttribute("src", "assets/icons/fillheart.svg")
    }
    

    media.isLiked = !media.isLiked
}


async function init() {
    const photographers = await loadPhotographer();
    displayPhotographer(photographers);
    displayMedias(photographers, 'likes');
    prepareCarrousel(photographers);
    prepareCarrouselArrows();
};


init();