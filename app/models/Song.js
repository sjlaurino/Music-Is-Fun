export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    getTemplate(i) {
        return `
    <div class="carousel-item ${!i ? 'active' : ''}">
        <div class=" card d-flex flex-column align-items-center justify-content-center w-100 wrap-text">        
            <img class="card-img-top" src="${this.albumArt}" alt="First slide">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.artist}</p>
            <audio controls src="${this.preview}">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
            <p class="card-text"><small class="text-muted">${this.price}</small></p>
        </div>
    </div>
    `
    }
}

{/* <div class="card-deck">
    <div class="card">
        <img src="${this.albumArt}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.artist}</p>
                <p class="card-text"><small class="text-muted">${this.price}</small></p>
            </div>
  </div>
        <div class="card">
            <img src="${this.albumArt}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.artist}</p>
                    <p class="card-text"><small class="text-muted">${this.price}</small></p>
                </div>
  </div>
            <div class="card">
                <img src="${this.albumArt}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.artist}</p>
                        <p class="card-text"><small class="text-muted">${this.price}</small></p>
                    </div>
  </div>
            </div> */}