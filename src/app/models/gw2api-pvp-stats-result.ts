// https://wiki.guildwars2.com/wiki/API:2/pvp/stats
export interface Gw2ApiPvpStatsResults {
    pvp_rank: number;
    pvp_rank_points: number;
    pvp_rank_rollovers: number;
    aggregate: WinLossStats;
}

export interface WinLossStats {
    wins: number;
    losses: number;
    desertions: number;
    byes: number;
    forfeits: number;
}