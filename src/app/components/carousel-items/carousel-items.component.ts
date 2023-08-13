import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'app-carousel-items',
	templateUrl: './carousel-items.component.html',
	styleUrls: ['./carousel-items.component.css', './carousel.scss'],
	animations: [
		trigger('carouselAnimation', [
			transition(':increment, :decrement', [
				style({ transform: 'translateX({{ i * 100 }}%)' }),
				animate(
					'300ms ease-out',
					style({ transform: 'translateX({{ (i - activeIndex) * 100 }}%)' })
				),
			]),
		]),
	],
})
export class CarouselItemsComponent {
	visibleItems: { text: string; icon: string }[] = [];
	items = [
		{
			text: 'Home',
			icon: 'https://www.santander.com.br/sites/WPC_CMS/imagem/22-08-16_181417_M_icon-compre-sua-casa.svg',
		},
		{
			text: 'Conta Corrente',
			icon: 'https://www.santander.com.br/sites/WPC_CMS/imagem/22-08-24_171817_M_icon-abra-sua-conta.svg',
		},
		{
			text: 'Transferências',
			icon: 'https://www.santander.com.br/sites/WPC_CMS/imagem/22-08-16_181316_M_icon-portabilidade-santander.svg',
		},
		{
			text: 'Pagamentos',
			icon: 'https://www.santander.com.br/sites/WPC_CMS/imagem/22-08-24_171509_M_icon-renegocie-sua-divida.svg',
		},
		{
			text: 'Cartões',
			icon: 'https://www.santander.com.br/sites/WPC_CMS/imagem/22-08-24_171937_M_icon-peca-seu-cartao.svg',
		},
		{
			text: 'Empréstimos',
			icon: 'https://www.santander.com.br/sites/WPC_CMS/imagem/22-08-16_180926_M_icon-emprestimo-para-voce.svg',
		},
		{
			text: 'Outros',
			icon: 'https://www.santander.com.br/sites/WPC_CMS/imagem/21-06-11_134956_M_ic-id-santander.svg',
		},
	];
	activeIndex = 0;
	initialOffset = 0;
	finalOffset = 0;

	ngOnInit() {
		this.updateVisibleItems();
	}

	updateVisibleItems() {
		this.visibleItems = this.items.slice(
			this.activeIndex,
			this.activeIndex + 3
		);
	}

	moveLeft() {
		if (this.activeIndex > 0) {
			this.activeIndex--;
			this.updateVisibleItems();
		} else if (this.activeIndex == 0) {
			this.activeIndex = this.items.length - 3;
			this.updateVisibleItems();
		}
	}

	moveRight() {
		if (this.activeIndex < this.items.length - 3) {
			this.activeIndex++;
			this.updateVisibleItems();
		} else if (this.activeIndex == this.items.length - 3) {
			this.activeIndex = 0;
			this.updateVisibleItems();
		}
	}
}
