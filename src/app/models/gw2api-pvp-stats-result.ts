// https://wiki.guildwars2.com/wiki/API:2/pvp/stats
export interface Gw2ApiPvpStatsResults {
    pvp_rank: number;
    pvp_rank_points: number;
    pvp_rank_rollovers: number;
    aggregate: WinLossStats;
    professions: {
        elementalist: WinLossStats,
        engineer: WinLossStats,
        guardian: WinLossStats,
        mesmer: WinLossStats,
        necromancer: WinLossStats,
        ranger: WinLossStats,
        thief: WinLossStats,
        warrior: WinLossStats,
    },
    ladders: {
        none: WinLossStats,
        ranked: WinLossStats,
        soloarenarated: WinLossStats,
        teamarenarated: WinLossStats,
        unranked: WinLossStats
    }
}

export interface WinLossStats {
    wins: number;
    losses: number;
    desertions: number;
    byes: number;
    forfeits: number;
}