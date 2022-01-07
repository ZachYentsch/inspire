export class Quote {
    constructor(data) {
        this.quote = data.content
        this.author = data.author
        this.id = data.id
    }

    // get QTemplate() {
    //     return `
    //     <p>${this.quote}</p>
    //     <p><small>${this.author}</small></p>
    //     `
    // }
}