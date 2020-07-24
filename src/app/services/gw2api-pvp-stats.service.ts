import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gw2ApiService } from './gw2api.service';
import { Gw2ApiConfig } from '../models/gw2api-config';
import { Observable } from 'rxjs';
import { Gw2ApiPvpStatsResults } from '../models/gw2api-pvp-stats-result';

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
    
    getData(): Observable<Gw2ApiPvpStatsResults> {
        const url = this.getUrl(this.version, this.endpoint);
        return this.http.get<Gw2ApiPvpStatsResults>(url);
    }
}