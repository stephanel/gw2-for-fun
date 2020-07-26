import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gw2ApiService } from './gw2api.service';
import { Gw2ApiConfig } from '../models/gw2api/gw2api-config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatsResults } from '../models/stats-results';
import { Gw2ApiPvpStatsResults } from '../models/gw2api/gw2api-pvp-stats-result';

export const GW2APICONFIG = new InjectionToken<Gw2ApiConfig>('GW2APICONFIG');

@Injectable({
    providedIn: 'root'
})
export class Gw2ApiPvpStatsService extends Gw2ApiService {
    version: string = 'v2';
    endpoint: string = 'pvp/stats';

    constructor(@Inject(GW2APICONFIG) private config: Gw2ApiConfig, 
        private http: HttpClient) {
        super(config);
    }
    
    getData(): Observable<StatsResults> {
        const url = this.getUrl(this.version, this.endpoint);
        return this.http.get<Gw2ApiPvpStatsResults>(url)
            .pipe(map(this.convert));
    }

    convert(results: Gw2ApiPvpStatsResults): StatsResults {
        return {
            pvp_rank: results.pvp_rank,
            pvp_rank_points: results.pvp_rank_points,
            pvp_rank_rollovers: results.pvp_rank_rollovers,
            ladders: results.ladders,
            aggregate: results.aggregate,
            getProfessionsStats: () => {
                return [
                    { stats: results.professions.elementalist, professionKey: 'Elementalist' },
                    { stats: results.professions.engineer, professionKey: 'Engineer' },
                    { stats: results.professions.guardian, professionKey: 'Guardian' },
                    { stats: results.professions.mesmer, professionKey: 'Mesmer' },
                    { stats: results.professions.necromancer, professionKey: 'Necromancer' },
                    { stats: results.professions.ranger, professionKey: 'Ranger' },
                    { stats: results.professions.revenant, professionKey: 'Revenant' },
                    { stats: results.professions.thief, professionKey: 'Thief' },
                    { stats: results.professions.warrior, professionKey: 'Warrior' },
                ]
            } 
        };
    }
 }