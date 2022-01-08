
export class Image {
    constructor(data) {
        this.img = data.largeImgUrl
        this.author = data.author
    }

    // ANCHOR injected into form 
    // get ITemplate() {
    //     return `
    //     $('<img class="fade-in" src="${this.Image}' + ${this.Image}[Math.floor(Math.random() * ${this.Image}.length)] + '">').appendTo('#banner-load')
    //     `
    // }
}