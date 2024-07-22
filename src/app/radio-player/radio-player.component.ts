import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-player',
  templateUrl: './radio-player.component.html',
  styleUrls: ['./radio-player.component.scss']
})
export class RadioPlayerComponent {
  @Input() station: any;
  audio: HTMLAudioElement | undefined;

  playStation() {
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio(this.station.url_resolved);
    this.audio.play();
  }
}
