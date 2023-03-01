import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { spaceVideosData } from './space-videos-data';

export interface SpaceVideo {
  title: string;
  author: string;
  id: string;
  videoUrl?: string;
}

const videoBaseUrl = 'https://www.youtube.com/embed';

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

  load(endpoint: string): Observable<SpaceVideo[]> {

    // Coerce the raw data into a SpaceVideo array.
    let spaceVideos =
      (spaceVideosData as Record<string, unknown>)[endpoint] as SpaceVideo[];

    return of(spaceVideos).pipe(map(addVideoUrl));
  }

}
