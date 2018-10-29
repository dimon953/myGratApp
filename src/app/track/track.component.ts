import { Input, Component } from '@angular/core';

@Component({
    selector: 'single-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css'],
    inputs: ['trackInfo']
})
export class TrackComponent {

    trackInfo: number = 0;

}