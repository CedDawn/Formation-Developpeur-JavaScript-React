export class Photograph {
    name;
    id;
    city;
    country;
    tagline;
    price;
    portrait;
    medias;

    constructor(props, medias) {
        this.name = props.name;
        this.id = props.id;
        this.city = props.city;
        this.country = props.country;
        this.tagline = props.tagline;
        this.price = props.price;
        this.portrait = props.portrait;
        this.medias = medias;
    }
}
