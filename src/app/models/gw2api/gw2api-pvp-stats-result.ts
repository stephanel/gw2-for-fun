import { Gw2ApiWinLossStats } from './gw2api-pvp-winloss-stats';

// https://wiki.guildwars2.com/wiki/API:2/pvp/stats
export interface Gw2ApiPvpStatsResults {
    pvp_rank: number;
    pvp_rank_points: number;
    pvp_rank_rollovers: number;
    aggregate: Gw2ApiWinLossStats;
    professions: {
        elementalist: Gw2ApiWinLossStats,
        engineer: Gw2ApiWinLossStats,
        guardian: Gw2ApiWinLossStats,
        mesmer: Gw2ApiWinLossStats,
        necromancer: Gw2ApiWinLossStats,
        ranger: Gw2ApiWinLossStats,
        revenant: Gw2ApiWinLossStats,
        thief: Gw2ApiWinLossStats,
        warrior: Gw2ApiWinLossStats,
    },
    ladders: {
        none: Gw2ApiWinLossStats,
        ranked: Gw2ApiWinLossStats,
        soloarenarated: Gw2ApiWinLossStats,
        teamarenarated: Gw2ApiWinLossStats,
        unranked: Gw2ApiWinLossStats
    }
}