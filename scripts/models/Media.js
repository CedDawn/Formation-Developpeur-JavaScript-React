export class Media {
    id;
    photographerId;
    title;
    image;
    video;
    likes;
    isLiked;
    date;
    price;
    isVideo;

    constructor(props) {
        this.id = props.id;
        this.photographerId = props.photographerId;
        this.title = props.title;
        this.image = props.image;
        this.video = props.video;
        this.likes = props.likes;
        this.isLiked = false;
        this.date = new Date(props.date);
        this.price = props.price;
        this.isVideo = !!props.video;
    }
}