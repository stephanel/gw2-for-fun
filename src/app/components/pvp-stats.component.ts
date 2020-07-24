import { Component, OnInit } from '@angular/core';
import { Gw2ApiPvpStatsService } from '../services/gw2api-pvp-stats.service';
import { Gw2ApiPvpStatsResults } from '../models/gw2api-pvp-stats-result';

@Component({
    selector: 'pvp-stats',
    styleUrls: ['pvp-stats.component.css'],
    templateUrl: 'pvp-stats.component.html'
})
export class PvpStatsComponent {

    pvpStats: Gw2ApiPvpStatsResults;

    constructor(private gw2apiPvpStatsService: Gw2ApiPvpStatsService) {
    }
    
    ngOnInit() {
        this.gw2apiPvpStatsService
            .getData()
            .subscribe(results => this.pvpStats = results);
    }
}