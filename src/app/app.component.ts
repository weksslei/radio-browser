import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { RadioService } from './radio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedStation: any;
  categories = [
    'MPB', 'Sertanejo Brasil', 'Rádio FM', 'Radio Sertanejo Só Modão',
    'Bossa Nova Brasil', 'Gaúcha', 'Sertanejo Brasil', 'Rádio Jovem Pan', 'Novo Tempo'
  ];
  stations: any[] = [];
  searchQuery: string = '';
  newCategory: string = '';
  isMenuVisible = false;
  isAddCategoryVisible: boolean = false;

  constructor(private renderer: Renderer2, private element: ElementRef, private radioService: RadioService) {}

  ngOnInit() {
    this.getStations();
  }

  getStations() {
    this.radioService.getStations().subscribe(data => {
      this.stations = data;
    });
  }
  getStationsBrazil() {
    this.radioService.getStationsBrazil().subscribe(data => {
      this.stations = data;
    });
  }

  filterStationsByCategory(category: string) {
    this.radioService.getStationsByCategory(category).subscribe(data => {
      this.stations = data;
    });
  }

  searchStations() {
    if (this.searchQuery.trim()) {
      this.radioService.searchStations(this.searchQuery.trim()).subscribe(data => {
        this.stations = data;
      });
    } else {
      this.getStations();
    }
  }

  addCategory() {
    if (this.newCategory.trim() && !this.categories.includes(this.newCategory)) {
      this.categories.push(this.newCategory.trim());
      this.newCategory = '';
    }
  }
  
  onStationSelected(station: any) {
    this.selectedStation = station;
  }

  toggleAddCategory() {
    this.isAddCategoryVisible = !this.isAddCategoryVisible;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;

    const sidebar = this.element.nativeElement.querySelector('.sidebar');
    const mainContent = this.element.nativeElement.querySelector('.main-content');

    if (sidebar && mainContent) {
      if (!this.isMenuVisible) {
        this.renderer.removeClass(sidebar, 'col-md-3');
        this.renderer.addClass(sidebar, 'col-1');
        this.renderer.removeClass(mainContent, 'col-md-9');
        this.renderer.addClass(mainContent, 'col-11');
        this.renderer.removeClass(sidebar, 'mobile-hide');
      } else {
        this.renderer.removeClass(sidebar, 'col-1');
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
