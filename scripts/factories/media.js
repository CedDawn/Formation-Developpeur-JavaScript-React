function mediaFactory(data) {
    const { id, title, image, video, likes } = data;
    const picture = "";

    if (!video) {
        picture = `assets/media/min_` + image;
    } else if (!image) {
        picture = `assets/media/min_` + video + ".jpg";
    }    

    function getMediaCardDOM() {
        const allContainer = document.createElement('article');
        allContainer.classList.add('article');
        allContainer.setAttribute('data-id', id)
        const mediaImgContainer = document.createElement('button');
        mediaImgContainer.classList.add('nodecobtn');
        mediaImgContainer.classList.add('photo');
        const mediaMiniature = document.createElement('img');
        mediaMiniature.classList.add('minphoto');
        mediaMiniature.setAttribute("src", picture);
        mediaMiniature.setAttribute("alt", title);
        mediaImgContainer.appendChild(mediaMiniature)
        const underImagePart = document.createElement('div1');
        underImagePart.classList.add('underimage');
        const mediaTitle = document.createElement('h3');
        mediaTitle.classList.add('title');
        mediaTitle.textContent = title;
        const likesPart = document.createElement('div');
        likesPart.classList.add('flex'); 
        const likesNbr = document.createElement('h32');
        likesNbr.classList.add('likes')
        likesNbr.textContent = likes;
        const likeBtn = document.createElement('button');
        likeBtn.classList.add('nodecobtn');
        likeBtn.classList.add('imglikes');
        const heart = document.createElement('img');
        heart.setAttribute('src', 'assets/icons/heart.svg');
        heart.setAttribute('alt', "likes");
        likeBtn.appendChild(heart)
        likesPart.appendChild(likesNbr)
        likesPart.appendChild(likeBtn)
        underImagePart.appendChild(mediaTitle)
        underImagePart.appendChild(likesPart)
        allContainer.appendChild(mediaImgContainer);
        allContainer.appendChild(underImagePart);
        return (allContainer);
    }

    return { id, title, image, video, getMediaCardDOM }
}