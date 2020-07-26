import { Component, Input } from '@angular/core';
import { Gw2ApiWinLossStats } from '../../models/gw2api/gw2api-pvp-winloss-stats';

@Component({
    selector: 'win-loss-stats',
    templateUrl: 'win-loss-stats.component.html'
})
export class WinLossStatsComponent {

    @Input() stats: Gw2ApiWinLossStats;
    @Input() title: string;
}