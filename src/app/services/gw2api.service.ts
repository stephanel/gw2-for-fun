import { Gw2ApiConfig } from '../models/gw2api/gw2api-config';

export class Gw2ApiService
{
    constructor(private apiConfig: Gw2ApiConfig)
    { }

    protected getUrl(version: string, endpoint: string): string {
        return `${this.apiConfig.baseUrl}/${version}/${endpoint}?access_token=${this.apiConfig.apiKey}`;
    }
}