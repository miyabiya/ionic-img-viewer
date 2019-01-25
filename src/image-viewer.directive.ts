import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { ImageViewerComponent } from './image-viewer.component';
import { ImageViewer } from './image-viewer';
import { ImageViewerController } from './image-viewer.controller';

@Directive({
	selector: '[imageViewer]'
})
export class ImageViewerDirective {

	@Input('imageViewer') src: string;
	@Input('imageViewer') el_ref: ElementRef;
	@Output() close = new EventEmitter();

	constructor(
		private _el: ElementRef,
		private imageViewerCtrl: ImageViewerController
	) { }

	@HostListener('click', ['$event']) onClick(event: Event): void {
		event.stopPropagation();
		console.log('on click');
		console.log(this.el_ref);

		const element = this._el.nativeElement;
		const onCloseCallback = () => this.close.emit();
		let src_ref: string;
		let isSlides:boolean = false;
		if(element && imageElement.hasOwnProperty('length')){
			isSlides = true;
		}else{
			src_ref = this.src;
		}

		const imageViewer = this.imageViewerCtrl.create(element, { fullResImage: src_ref, onCloseCallback, isSlides: isSlides });
		imageViewer.present();
	}
}
