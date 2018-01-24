import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = images.slice(0);
  }

  getImage(id: number) {
    return images.slice(0).find(image => image.id === id);

  }

  constructor() { }

}

const images = [
  {'id': 1, 'category': 'projects', 'caption': 'Reddit Resume', 'url': 'assets/img/projects_01.png'},
  {'id': 2, 'category': 'projects', 'caption': 'Crowdart', 'url': 'assets/img/projects_02.png'}
];
