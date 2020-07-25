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
            animationEnabled: true,
            
            title:{
                text:"Fortune 500 Companies by Country"
            },
            axisX:{
                interval: 1
            },
            axisY2:{
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: "Number of Companies"
            },
            data: [{
                type: "bar",
                name: "companies",
                axisYType: "secondary",
                color: "#014D65",
                dataPoints: [
                    { y: 3, label: "Wins" },
                    { y: 7, label: "Losses" },
                    { y: 5, label: "Desertions" },
                    { y: 9, label: "Byes" },
                    { y: 7, label: "Forfeits" }
                ]
            }]
        });

        // let chart = new CanvasJS.Chart("chartContainer", {
        //     theme: "light2",
        //     animationEnabled: true,
        //     exportEnabled: false,
        //     // title:{
        //     //     text: "Monthly Expense"
        //     // },
        //     data: [{
        //         type: "pie",
        //         showInLegend: false,
        //         toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        //         indexLabel: "{name} - #percent%",
        //         dataPoints: [
        //             { y: 300, name: "Wins" },
        //             { y: 120, name: "Losses" },
        //             { y: 300, name: "Desertions" },
        //             { y: 800, name: "Byes" },
        //             { y: 150, name: "Forfeits" },
        //         ]
        //     }]
        // });
            
        chart.render();
    }

}