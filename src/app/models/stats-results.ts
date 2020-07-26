import { Gw2ApiPvpStatsResults } from './gw2api//gw2api-pvp-stats-result';
import { Gw2ApiWinLossStats } from './gw2api/gw2api-pvp-winloss-stats';
import { ProfessionStats } from './profession-stats';

export interface StatsResults {
    pvp_rank: number;
    pvp_rank_points: number;
    pvp_rank_rollovers: number;
    aggregate: Gw2ApiWinLossStats;
    ladders: {
        none: Gw2ApiWinLossStats,
        ranked: Gw2ApiWinLossStats,
        soloarenarated: Gw2ApiWinLossStats,
        teamarenarated: Gw2ApiWinLossStats,
        unranked: Gw2ApiWinLossStats
    }

    getProfessionsStats(): ProfessionStats[];
}