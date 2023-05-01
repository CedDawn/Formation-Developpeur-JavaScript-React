function prepareCarrousel(photographers) {
    const article = document.querySelectorAll(".article");
    const sortedMedias = photographers.sortedMedias
    const div = document.querySelector(".carcontent")
    div.innerHTML = "";
    let currentIndex = 1
    let totalElements = 0

    article.forEach((element) => {
        const imgId = element.getAttribute('data-id');        
        const medias = sortedMedias.find((media) => parseInt(imgId) === media.id)
        totalElements++

        if (!medias.video) {
            const img = document.createElement('img');
            img.classList.add("carrouselcontent", "invisible")
            img.setAttribute('data-index', currentIndex)
            div.appendChild(img);
            img.setAttribute('src', `assets/medias/${medias.image}`)
            img.setAttribute('alt', medias.title)
            currentIndex++
            const media = element.querySelector(".photo")
            media.addEventListener("click", function (){
                if (parseInt(img.getAttribute("data-index")) === 1) {
                    const leftArrow = document.querySelector("#carrouselLeft")
                    leftArrow.classList.add("endcarrousel")
                    leftArrow.setAttribute("Aria-disable", "true")
                }
                if (parseInt(img.getAttribute("data-index")) === totalElements) {
                    const rightArrow = document.querySelector("#carrouselRight")
                    rightArrow.classList.add("endcarrousel")
                    rightArrow.setAttribute("Aria-disable", "true")
                }
                img.classList.remove("invisible")
                const carrousel = document.querySelector('.carrousel')
                carrousel.classList.remove('invisible')
                const divmedias = document.querySelector('.carcontent')
                divmedias.classList.remove('invisible')
                currentIndex = img.getAttribute('data-index')
            })
        } else if (!medias.image) {
            const vid = document.createElement('video');
            vid.classList.add("carrouselcontent", "invisible")
            vid.setAttribute('data-index', currentIndex)
            vid.setAttribute('controls', "")
            div.appendChild(vid);
            vid.setAttribute('src', `assets/medias/${medias.video}`)
            currentIndex++
            const media = element.querySelector(".photo")
            media.addEventListener("click", function (){
                if (parseInt(vid.getAttribute("data-index")) === 1) {
                    const leftArrow = document.querySelector("#carrouselLeft")
                    leftArrow.classList.add("endcarrousel")
                    leftArrow.setAttribute("Aria-disable", "true")
                }
                if (parseInt(vid.getAttribute("data-index")) === totalElements) {
                    const rightArrow = document.querySelector("#carrouselRight")
                    rightArrow.classList.add("endcarrousel")
                    rightArrow.setAttribute("Aria-disable", "true")
                }
                vid.classList.remove("invisible")
                const carrousel = document.querySelector('.carrousel')
                carrousel.classList.remove('invisible')
                const divmedias = document.querySelector('.carcontent')
                divmedias.classList.remove('invisible')
                currentIndex = vid.getAttribute('data-index')
            })
        }
    })
    
}

function prepareCarrouselArrows() {
    const leftArrow = document.querySelector("#carrouselLeft")
    const rightArrow = document.querySelector("#carrouselRight")
    const nbrOfMedias = document.querySelectorAll(".carrouselcontent").length
    
    let leftArrowEventListener;
    let rightArrowEventListener;

    leftArrowEventListener = leftArrow.addEventListener("click", function (){
        leftCarrouselArrow(leftArrow, rightArrow, nbrOfMedias)
    })

    rightArrowEventListener = rightArrow.addEventListener("click", function (){
        rightCarrouselArrow(leftArrow, rightArrow, nbrOfMedias)
    })

    const carrousel = document.querySelector(".carrousel");
    window.addEventListener('keydown', (e) => {
        if (e.key === "ArrowLeft") {
            leftCarrouselArrow(leftArrow, rightArrow, nbrOfMedias)
        }
        if (e.key === "ArrowRight") {
            rightCarrouselArrow(leftArrow, rightArrow, nbrOfMedias)
        }
    })

    
}

function leftCarrouselArrow(leftArrow, rightArrow, nbrOfMedias) {
    const visiblemedia = document.querySelector(".carrouselcontent:not(.invisible)")
    if (visiblemedia) {
        let currentIndex = visiblemedia.getAttribute("data-index")
        if (currentIndex > 1) {
            rightArrow.classList.remove("endcarrousel")
            rightArrow.setAttribute("Aria-disable", "false")
            const actuel = document.querySelector(`.carrouselcontent:nth-child(${currentIndex})`)
            const prevIndex = currentIndex - 1
            const precedent = document.querySelector(`.carrouselcontent:nth-child(${prevIndex})`)
            actuel?.classList.add("invisible")
            precedent?.classList.remove("invisible")
            currentIndex = currentIndex - 1
        }
        if (parseInt(currentIndex) === 1) {
            leftArrow.classList.add("endcarrousel")
            leftArrow.setAttribute("Aria-disable", "true")
        }
    }
}

function rightCarrouselArrow(leftArrow, rightArrow, nbrOfMedias) {
    const visiblemedia = document.querySelector(".carrouselcontent:not(.invisible)")
    if (visiblemedia) {
        let currentIndex = visiblemedia.getAttribute("data-index")
        const nextIndex = parseInt(currentIndex) + 1
        const suivant = document.querySelector(`.carrouselcontent:nth-child(${nextIndex})`)
        if (currentIndex < nbrOfMedias) {
            leftArrow.classList.remove("endcarrousel")
            leftArrow.setAttribute("Aria-disable", "false")
            const actuel = document.querySelector(`.carrouselcontent:nth-child(${currentIndex})`)
            actuel?.classList.add("invisible")
            suivant?.classList.remove("invisible")
            currentIndex++
        } 
        if (parseInt(currentIndex) === nbrOfMedias) {
            rightArrow.classList.add("endcarrousel")
            rightArrow.setAttribute("Aria-disable", "true")
        }
    }
}

function closeCarrousel() {
    const carrousel = document.querySelector('.carrousel')
    const medias = document.querySelectorAll('.carrouselcontent')
    const divmedias = document.querySelector('.carcontent')
    carrousel.classList.add('invisible')
    divmedias.classList.add('invisible')
    medias.forEach((media) => {
        media.classList.add('invisible')
    })

    document.querySelector("#carrouselLeft").classList.remove("endcarrousel")
    document.querySelector("#carrouselRight").classList.remove("endcarrousel")
}