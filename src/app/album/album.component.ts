import { Output, Component } from '@angular/core';

@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent {

    @Output()
    tracklist: any = [
        {
            num: 1,
            name: 'Flood Watch',
            time: '3:44',
            featuring_artists: {
                id: 1820,
                name: 'Offset'
            },
            producer: 'Murda Beatz',
            isSingle: true
        },
        {
            num: 2,
            name: 'No English',
            time: '4:02',
            featuring_artists: {
                id: 1416,
                name: 'Travis Scott'
            },
            producer: 'Juicy J',
            isSingle: true
        },
        {
            num: 3,
            name: 'Buckets',
            time: '3:15',
            featuring_artists: {},
            producer: 'Juicy J',
            isSingle: false
        },
        {
            num: 4,
            name: 'Feed The Streets',
            time: '4:21',
            featuring_artists: [
                {
                    id: 793,
                    name: 'Project Pat'
                },
                {
                    id: 948,
                    name: 'ASAP Rocky'
                }
            ],
            producer: 'Mike Will Made It',
            isSingle: true
        }
    ]


}