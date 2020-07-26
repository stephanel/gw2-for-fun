import { Component, OnInit } from '@angular/core';
import { Gw2ApiPvpStatsService } from '../../services/gw2api-pvp-stats.service';
import { ProfessionStats } from '../../models/profession-stats';
import { StatsResults } from '../../models/stats-results';

@Component({
    selector: 'pvp-stats',
    styleUrls: ['pvp-stats.component.css'],
    templateUrl: 'pvp-stats.component.html'
})
export class PvpStatsComponent {

    pvpStats: StatsResults;

    statsBlocks: ProfessionStats[];

    constructor(private gw2apiPvpStatsService: Gw2ApiPvpStatsService) {
    }
    
    ngOnInit() {
        this.gw2apiPvpStatsService
            .getData()
            .subscribe(results => {
                this.pvpStats = results;
                this.statsBlocks = results.getProfessionsStats();

                // const professions = results.professions;

                // if(professions)
                // {
                //     this.statsBlocks = [
                //         { stats: professions.elementalist, professionKey: 'Elementalist' },
                //         { stats: professions.engineer, professionKey: 'Engineer' },
                //         { stats: professions.guardian, professionKey: 'Guardian' },
                //         { stats: professions.mesmer, professionKey: 'Mesmer' },
                //         { stats: professions.necromancer, professionKey: 'Necromancer' },
                //         { stats: professions.ranger, professionKey: 'Ranger' },
                //         { stats: professions.revenant, professionKey: 'Revenant' },
                //         { stats: professions.thief, professionKey: 'Thief' },
                //         { stats: professions.warrior, professionKey: 'Warrior' },
                //     ];
                // }
            });
    }
}