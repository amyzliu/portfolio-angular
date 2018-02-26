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
  {'id': 1, 'category': 'activities', 'caption': 'Reddit Resume', 'url': 'assets/img/projects_01.png'},
  {'id': 2, 'category': 'projects', 'caption': 'Crowdart', 'url': 'assets/img/projects_02.png'},
  {'id': 3, 'category': 'projects', 'caption': 'Kitty Paint', 'url': 'assets/img/projects_03.png'},
  {'id': 4, 'category': 'projects', 'caption': 'SPFT', 'url': 'assets/img/projects_04.png'},
  {'id': 5, 'category': 'activities', 'caption': 'Painting: Stars in My Eyes', 'url': 'assets/img/activities_01.png'}
];
