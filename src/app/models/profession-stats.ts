import { Gw2ApiWinLossStats } from './gw2api/gw2api-pvp-winloss-stats';

export interface ProfessionStats {
    stats: Gw2ApiWinLossStats;
    professionKey: string;
}