function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const cardContainer = document.createElement('article');
        const redirection = document.createElement('a');
        redirection.classList.add('redirect');
        const artistPicture = document.createElement('img');
        artistPicture.classList.add('portrait');
        artistPicture.setAttribute("src", picture);
        artistPicture.setAttribute("alt", name);
        const artistName = document.createElement('h2');
        artistName.classList.add('name');
        artistName.textContent = name;
        redirection.appendChild(artistPicture);
        redirection.appendChild(artistName);
        const localization = document.createElement('div');
        localization.classList.add('localization');
        const artistCity = document.createElement('span');
        artistCity.classList.add('city');
        artistCity.textContent = city + ", ";
        const artistCountry = document.createElement('span');
        artistCountry.classList.add('country');
        artistCountry.textContent = country;
        localization.appendChild(artistCity);
        localization.appendChild(artistCountry);
        const artistTagline = document.createElement('span');
        artistTagline.classList.add('tagline');
        artistTagline.textContent = tagline;
        const artistPrice = document.createElement('span');
        artistPrice.classList.add('price');
        artistPrice.textContent = price + "€/jour";
        cardContainer.appendChild(redirection);
        cardContainer.appendChild(localization);
        cardContainer.appendChild(artistTagline);
        cardContainer.appendChild(artistPrice);
        return (cardContainer);
    }

    function getUserBannerDOM() {
        const banner = document.createElement('section');
        banner.classList.add('main');
        const infoContainer = document.createElement('div');
        const artistName = document.createElement('h1');
        artistName.classList.add('name');
        artistName.textContent = name;
        const artistInfos = document.createElement('div');
        artistInfos.classList.add('infos');
        const localization = document.createElement('h2');
        localization.classList.add('localization');
        localization.textContent = city + ", " + country;
        const artistTagline = document.createElement('span');
        artistTagline.classList.add('tagline');
        artistTagline.textContent = tagline;
        artistInfos.appendChild(localization);
        artistInfos.appendChild(artistTagline);
        infoContainer.appendChild(artistName);
        infoContainer.appendChild(artistInfos);
        const contactBtn = document.createElement('button');
        contactBtn.classList.add('contact_button');
        contactBtn.setAttribute('name', "Contact Me");
        contactBtn.setAttribute('onClick', "displayModal()");
        contactBtn.textContent = "Contactez-moi";
        const artistPicture = document.createElement('img');
        artistPicture.classList.add('portrait');
        artistPicture.setAttribute("src", picture);
        artistPicture.setAttribute("alt", name);      
        banner.appendChild(infoContainer);
        banner.appendChild(contactBtn);
        banner.appendChild(artistPicture);
        return (banner);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM, getUserBannerDOM }
}