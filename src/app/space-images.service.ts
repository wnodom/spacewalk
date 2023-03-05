import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface SpaceImage {
  label: string;
  description: string;
  infoUrl: string;
  imageFilename: string;
  imageUrl?: string;
  imageThumbnailUrl?: string;
}

const imageBaseUrl = '/assets/space';
const imageDetailsFilename = '_image-details.json';
const imageThumbnailsDirName = '_thumbnails';

// Generate an imageUrl property for any item that contains an imageFilename
// property. The imageUrl is the base image URL plus the endpoint and the
// filename. The image filename is also encoded, in case it contains any
// URL-unfriendly characters.
//
function addImageUrls(items: SpaceImage[], endpoint: string): SpaceImage[] {

  return items.map((itemInfo: SpaceImage) => {

    if (!itemInfo.imageFilename) {
      return itemInfo;
    }

    const encodedFilename: string = encodeURIComponent(itemInfo.imageFilename);
    const encodedEndpoint: string = encodeURIComponent(endpoint);

    // Only add the image URLs if there's an image filename.
    //
    if (itemInfo.imageFilename) {

      const newItemInfo = { ...itemInfo };

      newItemInfo.imageUrl = imageBaseUrl
        + '/' + encodedEndpoint
        + '/' + encodedFilename
      ;

      // SVGs are their own thumbnails.
      //
      if (itemInfo.imageFilename.toLowerCase().endsWith('.svg')) {
        newItemInfo.imageThumbnailUrl = newItemInfo.imageUrl;
      } else {
        newItemInfo.imageThumbnailUrl = imageBaseUrl
          + '/' + encodedEndpoint
          + '/' + imageThumbnailsDirName
          + '/' + encodedFilename
        ;
      }
      return newItemInfo;
    } else {
      // There's no image filename, so don't add the image URLs.
      return itemInfo;
    }
  });
}

@Injectable({
  providedIn: 'root'
})
export class SpaceImagesService {

  constructor(private http: HttpClient) { }

  load(endpoint: string): Observable<SpaceImage[]> {

    const url: string = imageBaseUrl
      + '/' + encodeURIComponent(endpoint)
      + '/' + imageDetailsFilename
    ;

    return this.http.get<SpaceImage[]>(url)
      .pipe(
        map(allItems => addImageUrls(allItems, endpoint))
      );
  }
}
