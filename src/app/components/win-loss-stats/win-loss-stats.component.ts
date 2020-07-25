import { Component, Input } from '@angular/core';
import { WinLossStats } from '../../models/gw2api-pvp-stats-result';

@Component({
    selector: 'win-loss-stats',
    templateUrl: 'win-loss-stats.component.html'
})
export class WinLossStatsComponent {

    @Input() stats: WinLossStats;
    @Input() title: string;
}