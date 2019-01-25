import { Injectable } from '@angular/core';
import { App, Config, DeepLinker } from 'ionic-angular';

import { ImageViewerOptions, ImageViewer } from './image-viewer';
import { ImageViewerComponent } from './image-viewer.component';

@Injectable()
export class ImageViewerController {

  constructor(private _app: App, public config: Config, private deepLinker: DeepLinker) { }

  /**
   * Create a image-viewer instance to display. See below for options.
   *
   * @param {object} imageElement The image element
   * @param {object} opts ImageViewer options
   */
  create(imageElement:any,  opts: ImageViewerOptions = {}) {
    let image = '';
    /*
    let el: ElementRef;

    if(imageElement){
      if(imageElement.hasOwnProperty('src')){
        // an image was passed in
        image = imageElement.src;
      }else if(imageElement.hasOwnProperty('length')){
        el = imageElement;
      }
    }else{
      return;
    }
    let options = { image, position, ...opts };
    if(el){
      options = { image, position, ...opts,  };
    }*/

    const position = imageElement.getBoundingClientRect();
    if(opts){
      if(opts.hasOwnProperty('isSlides') && opts['isSlides'] == true){
        console.log('passed in some slides!');
        console.log(imageElement);
      }else if(imageElement && imageElement.hasOwnProperty('src')){
        image = imageElement['src'];
      }
    }
    let options:any = {};
    options = { image, position, ...opts };

    return new ImageViewer(this._app, ImageViewerComponent, options, this.config, this.deepLinker);
  }
}
