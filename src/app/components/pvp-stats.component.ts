import { Component, OnInit } from '@angular/core';
import { Gw2ApiPvpStatsService } from '../services/gw2api-pvp-stats.service';

@Component({
    selector: 'pvp-stats',
    templateUrl: 'pvp-stats.component.html'
})
export class PvpStatsComponent {

    constructor(private gw2apiPvpStatsService: Gw2ApiPvpStatsService) {
    }
    
    ngOnInit() {
        this.gw2apiPvpStatsService
            .getData()
            .subscribe(results => console.log(results));
    }
}