import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {

  }

  public getArtistById(id: number) {
    return this.httpClient.get<any>("http://localhost:8888/info/artist/" + id);
  }

  public getPlaylistById(id: number) {
    return this.httpClient.get<any>("http://localhost:8888/playlist/" + id);
  }
  public getSongById(id: number) {
    return this.httpClient.get<any>("http://localhost:8888/info/song" + id);
  }
  public getAlbumById(id: number) {
    return this.httpClient.get<any>("http://localhost:8888/info/album" + id);
  }

  public getUserLikedTracksPlaylist() {
    return this.httpClient.get<any>("http://localhost:8888/me/playlists/liked")
  }
}
