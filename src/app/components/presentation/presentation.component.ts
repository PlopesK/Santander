import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut, scaleIn, scaleOut } from './presentation.anim';

@Component({
	selector: 'app-presentation',
	templateUrl: './presentation.component.html',
	styleUrls: ['./presentation.component.scss'],
	animations: [
		trigger('carouselAnimation', [
			transition('void => *', [
				useAnimation(fadeIn, { params: { time: '1300ms' } }),
			]),
			transition('* => void', [
				useAnimation(fadeOut, { params: { time: '1300ms' } }),
			]),
		]),
		trigger('slideAnimation', [
			/* scale */
			transition('void => *', [
				useAnimation(scaleIn, { params: { time: '500ms' } }),
			]),
			transition('* => void', [
				useAnimation(scaleOut, { params: { time: '500ms' } }),
			]),
		]),
	],
})
export class PresentationComponent {
	public slides = [
		{
			src: 'https://cdn.wallpapersafari.com/24/98/PwS8MU.jpg',
		},
		{
			src: 'https://www.pny.com/image%20library/gaming/wallpapers/wallpaper%202/wallpaper-2-3840x2160.jpg',
		},
		{
			src: 'https://www.pixelstalk.net/wp-content/uploads/images5/4K-Red-Wallpaper-HD-Free-download.jpg',
		},
		{
			src: 'https://www.pixelstalk.net/wp-content/uploads/images6/Red-Desktop-Wallpaper-4K-City-Night.jpg',
		},
	];
	currentSlide = 0;

	ngOnInit() {
		this.preloadImages();
	}

	preloadImages() {
		for (const slide of this.slides) {
			new Image().src = slide.src;
		}
	}

	onPreviousClick() {
		const previous = this.currentSlide - 1;
		this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
	}

	onNextClick() {
		const next = this.currentSlide + 1;
		this.currentSlide = next === this.slides.length ? 0 : next;
	}
}
