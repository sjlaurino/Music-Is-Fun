import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";
//Private
let itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  //step 2 finish this function
  let songs = itunesService.Songs
  let template = `
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
    <div class="carousel-inner">
  `
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i]
    template += song.getTemplate(i)
  }
  template += `
  </div">
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  `
  document.querySelector('#songs').innerHTML = template
}



//PUBLIC
export default class ItunesController {
  constructor() {
    itunesService.addSubscriber('songs', drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}

