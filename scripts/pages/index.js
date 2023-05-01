import { Media } from '../models/Media.js';
import { Photograph } from '../models/Photograph.js';

async function loadPhotographers() {
    const response = await fetch("../data/photographers.json");
    const photographerAndMediasObject = await response.json();
    
    const mediasJson = photographerAndMediasObject.media;
    const medias = [];
    for (const mediaJson of mediasJson) {
        const media = new Media(mediaJson);
        medias.push(media);
    };

    const photographersJson = photographerAndMediasObject.photographers;
    const photographers = [];
    for (const photographJson of photographersJson) {
        const photographerMedias = medias.filter(media => media.photographerId === photographJson.id);

        const photograph = new Photograph(photographJson, photographerMedias);
        photographers.push(photograph);
    };

    return photographers;
}

function displayPhotographers(photographers) {
    const photographersSection = document.querySelector('.photographer_section');
    const template = document.querySelector('#photograph');

    for (const photographer of photographers) {
        const clone = document.importNode(template.content, true);
        clone.querySelector('.name').textContent = photographer.name;
        clone.querySelector('.city').textContent = photographer.city;
        clone.querySelector('.country').textContent = photographer.country;
        clone.querySelector('.portrait').setAttribute('src', `assets/photographers/${photographer.portrait}`);
        clone.querySelector('.portrait').setAttribute('alt', photographer.name);
        clone.querySelector('.redirect').setAttribute('href', 'photographer.html?id=' + photographer.id);
        clone.querySelector('.price').textContent = photographer.price + "€/jour";
        clone.querySelector('.tagline').textContent = photographer.tagline;
        photographersSection.appendChild(clone);
    };
};

async function init() {
    const photographers = await loadPhotographers();
    displayPhotographers(photographers);
};

init();
