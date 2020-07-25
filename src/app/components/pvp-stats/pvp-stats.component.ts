import { Component, OnInit } from '@angular/core';
import { Gw2ApiPvpStatsService } from '../../services/gw2api-pvp-stats.service';
import { Gw2ApiPvpStatsResults, WinLossStats } from '../../models/gw2api-pvp-stats-result';

@Component({
    selector: 'pvp-stats',
    styleUrls: ['pvp-stats.component.css'],
    templateUrl: 'pvp-stats.component.html'
})
export class PvpStatsComponent {

    pvpStats: Gw2ApiPvpStatsResults;
    elementalistStats: WinLossStats;
    engineerStats: WinLossStats;
    guardianStats: WinLossStats;
    mesmerStats: WinLossStats;
    necromancerStats: WinLossStats;
    rangerStats: WinLossStats;
    thiefStats: WinLossStats;
    warriorStats: WinLossStats;

    constructor(private gw2apiPvpStatsService: Gw2ApiPvpStatsService) {
    }
    
    ngOnInit() {
        this.gw2apiPvpStatsService
            .getData()
            .subscribe(results => {
                this.pvpStats = results;

                const professions = results.professions;

                this.elementalistStats = professions && professions.elementalist;
                this.engineerStats = professions && professions.engineer;
                this.guardianStats = professions && professions.guardian;
                this.mesmerStats = professions && professions.mesmer;
                this.necromancerStats = professions && professions.necromancer;
                this.rangerStats = professions && professions.ranger;
                this.thiefStats = professions && professions.thief;
                this.warriorStats = professions && professions.warrior;
            });
    }
}