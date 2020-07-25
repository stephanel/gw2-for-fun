import { Component, Input, OnInit } from '@angular/core';
import { WinLossStats } from 'src/app/models/gw2api-pvp-stats-result';

import * as d3pie from '../../../assets/js/d3pie.min';

@Component({
    selector: 'pie-chart',
    styleUrls: ['pie-chart.component.css'],
    templateUrl: 'pie-chart.component.html'
})
export class PieChartComponent implements OnInit {
    
    @Input() id: number;

    _stats: WinLossStats;
    @Input() set stats(value: WinLossStats) {
        if(value) {
            this._stats = value;
            this.drawPie();
        }
    }

    // [
    //     // this.stats.wins,
    //     // this.stats.losses,
    //     // this.stats.desertions,
    //     // this.stats.byes,
    //     // this.stats.forfeits
    //     20, 20, 20, 20, 20
    // ],
    // labels: ['Wins', 'Losses', 'Desertions', 'Byes', 'Forfeits'],

    constructor() {
    }

    ngOnInit() { }

    drawPie() {
        if(!this._stats || !this.id) {
            return;
        }
        // http://d3pie.org/
        var pie = new d3pie(`pieChart${this.id}`, {
            "header": {
                "title": {
                    "fontSize": 24,
                    "font": "open sans"
                },
                "subtitle": {
                    "color": "#999999",
                    "fontSize": 12,
                    "font": "open sans"
                },
                "titleSubtitlePadding": 0
            },
            "footer": {
                "color": "#999999",
                "fontSize": 10,
                "font": "open sans",
                "location": "bottom-left"
            },
            "size": {
                "canvasHeight": 150,
                "canvasWidth": 280,
                "pieOuterRadius": "87%"
            },
            "data": {
                "sortOrder": "value-desc",
                "content": [
                    {
                        "label": "Wins",
                        "value": this._stats.wins,
                        "color": "#86f71a"
                    },
                    {
                        "label": "Losses",
                        "value": this._stats.losses,
                        "color": "#d1c87f"
                    },
                    {
                        "label": "Desertions",
                        "value": this._stats.desertions,
                        "color": "#7d9058"
                    },
                    {
                        "label": "Byes",
                        "value": this._stats.byes,
                        "color": "#44b9b0"
                    },
                    {
                        "label": "Forfeits",
                        "value": this._stats.forfeits,
                        "color": "#7c37c0"
                    }
                ]
            },
            "labels": {
                "outer": {
                    "format": "none",
                    "pieDistance": 20
                },
                "mainLabel": {
                    "fontSize": 11
                },
                percentage: {
                    color: "#ffffff",
                    decimalPlaces: 0
                },
                value: {
                    color: "#adadad",
                    fontSize: 11
                },
                lines: {
                    enabled: true
                },
                truncation: {
                    enabled: true
                }
            },
            "tooltips": {
                "enabled": true,
                "type": "placeholder",
                "string": "{label}: {value}",
                "styles": {
                    "backgroundOpacity": 0.64,
                    "borderRadius": 3,
                    "font": "open sans",
                    "fontSize": 11,
                    "padding": 6
                }
            },
            "effects": {
                "pullOutSegmentOnClick": {
                    "effect": "linear",
                    "speed": 400,
                    "size": 8
                }
            },
            "misc": {
                "gradient": {
                    "enabled": true,
                    "percentage": 100
                }
            }
        });
    }
}