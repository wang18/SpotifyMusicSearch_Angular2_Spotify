import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../service/spotify.service';
import {Artist} from "../../../Artist";
import {Album} from "../../../Album";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];
  constructor(private _spotifyService: SpotifyService, private _activetedRout: ActivatedRoute) { }

  ngOnInit() {
    const aId = this._activetedRout.snapshot.params['id'];
    this._spotifyService.getArtist(aId).subscribe(artist => {
        this.artist = artist;
    });
    this._spotifyService.getAlbums(aId).subscribe(album => {
      this.albums = album.items;
      console.log(album);
    });
  }

}
