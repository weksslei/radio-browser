import { Component, ElementRef ,Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private renderer: Renderer2, private element: ElementRef) {}
  selectedStation: any;
  categories = [
    'MPB', 'Sertanejo Brasil', 'Rádio FM', 'Radio Sertanejo Só Modão',
    'Bossa Nova Brasil', 'Gaúcha', 'Sertanejo Brasil', 'Rádio Jovem Pan', 'Novo Tempo'
  ];
  stations = [
    { name: 'CNR-1 中国之声', country: 'China, news' },
    { name: 'Sertanejo Brasil', country: 'Brasil, RJ' },
    { name: 'Rádio FM', country: 'Brasil, FM' },
    { name: 'Radio Sertanejo Só Modão', country: 'moda, moda de viola, modao, sertanejo' },
    { name: 'France Inter', country: 'France' }
  ];

  isMenuVisible = false;



  onStationSelected(station: any) {
    this.selectedStation = station;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;

    const sidebar = this.element.nativeElement.querySelector('.sidebar');
    const mainContent = this.element.nativeElement.querySelector('.main-content');

    if (sidebar && mainContent) {
      if (!this.isMenuVisible) {
        this.renderer.removeClass(sidebar, 'col-md-3');
        this.renderer.addClass(sidebar, 'col-1')
        this.renderer.removeClass(mainContent, 'col-md-9');
        this.renderer.addClass(mainContent, 'col-11');
        this.renderer.removeClass(sidebar, 'mobile-hide');
      } else {
        this.renderer.removeClass(sidebar, 'col-1')
        this.renderer.addClass(sidebar, 'col-md-3');
        this.renderer.removeClass(mainContent, 'col-11');
        this.renderer.addClass(mainContent, 'col-md-9');
        this.renderer.addClass(sidebar, 'mobile-hide');
      }

    } else {
      console.log('Não achou os elementos');
    }
  }
}
