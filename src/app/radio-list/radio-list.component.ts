import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RadioService } from '../radio.service';

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent implements OnInit {
  stations: any[] = [];
  @Output() stationSelected = new EventEmitter<any>();

  constructor(private radioService: RadioService) { }

  ngOnInit(): void {
    this.radioService.getStations().subscribe(data => {
      this.stations = data;
    });
  }

  selectStation(station: any) {
    this.stationSelected.emit(station);
  }
}
