import { Component, Input, OnInit } from '@angular/core';
import { WinLossStats } from 'src/app/models/gw2api-pvp-stats-result';

declare const CanvasJS: any;

@Component({
    selector: 'pie-chart',
    styleUrls: ['pie-chart.component.css'],
    templateUrl: 'pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

    @Input() stats: WinLossStats;
    
        // [
        //     // this.stats.wins,
        //     // this.stats.losses,
        //     // this.stats.desertions,
        //     // this.stats.byes,
        //     // this.stats.forfeits
        //     20, 20, 20, 20, 20
        // ],
        // labels: ['Wins', 'Losses', 'Desertions', 'Byes', 'Forfeits'],

    ngOnInit() {
        // https://canvasjs.com/angular-charts/
        let chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title:{
                text: "Monthly Expense"
            },
            data: [{
                type: "pie",
                showInLegend: true,
                toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints: [
                    { y: 450, name: "Food" },
                    { y: 120, name: "Insurance" },
                    { y: 300, name: "Traveling" },
                    { y: 800, name: "Housing" },
                    { y: 150, name: "Education" },
                    { y: 150, name: "Shopping"},
                    { y: 250, name: "Others" }
                ]
            }]
        });
            
        chart.render();
    }

}