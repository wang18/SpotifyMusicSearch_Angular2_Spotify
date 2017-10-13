import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Http, Headers} from '@angular/http';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private authToken = 'BQAqtZqN0umuBkzBz6BI2e2f2rkfSZXhbTS2kS8XTT9UOVmT_lxyWe9FEVD4SEWW8QC9T1UDiflljIBSjAY-'+
    'rOO1dvY3-OcfKdhG8C6PAXDr0BB6x4cFx9MGd3FWRgBRKJqWwlbORMGl9UBnyzluk0K3Pb4rzAUn6Y-niYAyWfGZm-w';
  //https://developer.spotify.com/web-api/console/get-search-item/
  constructor(private _http: Http) { }

 searchMusic(str: string, type = 'artist'): Observable<any> {
    //const authToken = 'BQBHwqkNJYh84P7vLz56RqUolP9KYTDhcFcbhHqylsQcc03kfMTPslZwE_YsFftuyEnkXS4M6_8bbIC6_Gzn4aYLaPBViBpkECR65qr' +
    //  '2F4EcSpRk1eJXKESzhSIlg3yM4RmgysTJAsV5IQBypy2KWsIxDMarquYmAzMLtLm56xlvzHw';
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl, { headers })
      .map(res => res.json());
  }
  getArtist(id: string): Observable<any> {
    //const authToken = 'BQBHwqkNJYh84P7vLz56RqUolP9KYTDhcFcbhHqylsQcc03kfMTPslZwE_YsFftuyEnkXS4M6_8bbIC6_Gzn4aYLaPBViBpkECR65qr' +
   //   '2F4EcSpRk1eJXKESzhSIlg3yM4RmgysTJAsV5IQBypy2KWsIxDMarquYmAzMLtLm56xlvzHw';
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl, { headers })
      .map(res => res.json());
  }
  getAlbums(id: string): Observable<any> {
    //const authToken = 'BQBHwqkNJYh84P7vLz56RqUolP9KYTDhcFcbhHqylsQcc03kfMTPslZwE_YsFftuyEnkXS4M6_8bbIC6_Gzn4aYLaPBViBpkECR65qr' +
    //  '2F4EcSpRk1eJXKESzhSIlg3yM4RmgysTJAsV5IQBypy2KWsIxDMarquYmAzMLtLm56xlvzHw';
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums';
    return this._http.get(this.albumsUrl, { headers })
      .map(res => res.json());
  }
  getAlbum(id: string): Observable<any> {
    //const authToken = 'BQBHwqkNJYh84P7vLz56RqUolP9KYTDhcFcbhHqylsQcc03kfMTPslZwE_YsFftuyEnkXS4M6_8bbIC6_Gzn4aYLaPBViBpkECR65qr' +
    //  '2F4EcSpRk1eJXKESzhSIlg3yM4RmgysTJAsV5IQBypy2KWsIxDMarquYmAzMLtLm56xlvzHw';
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authToken);
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
    return this._http.get(this.albumUrl, { headers })
      .map(res => res.json());
  }
}
