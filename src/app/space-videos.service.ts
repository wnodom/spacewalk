import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface SpaceVideo {
  title: string;
  author: string;
  id: string;
  videoUrl?: string;
}

const videoBaseUrl = 'https://www.youtube.com/embed';
const videoDetailsUrl = '/assets/_video-details.json';

// Generate a videoUrl property for each item
// by combining the base URL with the video ID.
//
function addVideoUrl(items: SpaceVideo[]): SpaceVideo[] {
  return items.map((itemInfo: SpaceVideo) => ({
    ...itemInfo,
    videoUrl: videoBaseUrl + '/' + itemInfo.id
  }));
}

@Injectable({
  providedIn: 'root'
})
export class SpaceVideosService {

  constructor(private http: HttpClient) { }
  
  load(): Observable<SpaceVideo[]> {

    return this.http.get<SpaceVideo[]>(videoDetailsUrl)
      .pipe(map(addVideoUrl))
    ;
  }

}
