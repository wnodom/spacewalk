import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { spaceImagesData } from './space-images-data';

export interface SpaceImage {
  label: string;
  description: string;
  infoUrl: string;
  imageFilename: string;
  imageUrl?: string;
  imageThumbnailUrl?: string;
}

const imageBaseUrl = '/assets/space';

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

    // Only add the image URLs if there's an image filename.
    //
    if (itemInfo.imageFilename) {

      const newItemInfo = { ...itemInfo };

      newItemInfo.imageUrl = imageBaseUrl
        + '/' + endpoint
        + '/' + encodedFilename
      ;

      // SVGs are their own thumbnails.
      //
      if (itemInfo.imageFilename.toLowerCase().endsWith('.svg')) {
        newItemInfo.imageThumbnailUrl = newItemInfo.imageUrl;
      } else {
        newItemInfo.imageThumbnailUrl = imageBaseUrl + '-thumbnails'
          + '/' + endpoint
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

  load(endpoint: string): Observable<SpaceImage[]> {
    return of(spaceImagesData[endpoint]).pipe(
      map((allItems: any) => addImageUrls(allItems, endpoint))
    );
  }

}
