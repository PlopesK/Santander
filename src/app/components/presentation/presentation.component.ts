import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'app-presentation',
	templateUrl: './presentation.component.html',
	styleUrls: ['./presentation.component.scss'],
	animations: [
		trigger('carouselAnimation', [
			transition('void => *', [
				style({ opacity: 0 }),
				animate('300ms', style({ opacity: 1 })),
			]),
			transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
		]),
	],
})
export class PresentationComponent {
	public slides = [
		{
			src: 'https://images.unsplash.com/photo-1565622871630-8e453c4b6ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
		},
		{
			src: 'https://images.unsplash.com/photo-1565622871630-8e453c4b6ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
		},
		{ src: 'https://image3.com' },
		{
			src: 'https://images.unsplash.com/photo-1565622871630-8e453c4b6ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
		},
	];
	currentSlide = 0;

	onPreviousClick() {
		const previous = this.currentSlide - 1;
		this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
		console.log('previous clicked, new current slide is: ', this.currentSlide);
	}

	onNextClick() {
		const next = this.currentSlide + 1;
		this.currentSlide = next === this.slides.length ? 0 : next;
		console.log('next clicked, new current slide is: ', this.currentSlide);
	}
}
