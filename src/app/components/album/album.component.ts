import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SpotifyService} from '../../service/spotify.service';
import {Album} from "../../../Album";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];
  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  ngOnInit() {
    const aId = this._activatedRoute.snapshot.params['aId'];
    this._spotifyService.getAlbum(aId).subscribe(album => {
      this.album = album;
    });

  }

}
