import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { EvaluationResult } from 'src/shared/ui.interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})


export class ResultsComponent implements AfterViewInit {
  
  @ViewChild('chart') chartElement!: ElementRef;
  private chartInstance: any;

  constructor(
    protected cd: ChangeDetectorRef
  ){}
  payload : EvaluationResult = {
    "evaluatedCompany": "Meta Platforms, Inc.",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
    "overallEvaluationResult": true,
    "aboutCompany": "Meta committed to be net zero neutral by 2030, however this commitment is at risk due to the difficulty to reach such objectives: too high emissions to offset (unrealistic), the fast-growing tendency of emissions increase in the past years, the vague plan to reach the net zero objective and proximity of the deadline (2030).",
    "evaluationSections": [
      {
        "sectionName": "Commitment",
        "logo": "../assets/Commitment.svg",
        "content": [
          {
            "description": "To align with the Paris Agreement, Meta Platforms, Inc. have set a goal to reach net zero emissions across our value chain in 2030.",
            "result": "fail",
            "graphData": {
              "xAxis": ["2020", "2025", "2030"],
              "yAxis": [500, 550, 600],
              "graphType": "line"
            }
          }
        ]
      },
      {
        "sectionName": "Emissions Evaluation",
        "logo": "../assets/Emissions.svg",
        "content": [
          {
            "description": "Meta provides a detail analysis of their emissions including all relevant categories of Scope 3 for the current year and historical years.",
            "result": "fail",
            "graphData": {
              "categories": ["Scope 1", "Scope 2", "Scope 3"],
              "values": [30, 50, 70],
              "graphType": "bar"
            }
          },
          {
            "description": "First dummy description for emissions evaluation.",
            "result": "pass",
            "graphData": {
              "categories": ["Category A", "Category B", "Category C"],
              "values": [20, 40, 60],
              "graphType": "line"
            }
          },
          {
            "description": "Second dummy description for emissions evaluation.",
            "result": "fail",
          }
        ]
      },
      {
        "sectionName": "Detail Plan to Reach Net Zero Objective",
        "logo": "../assets/Plan.svg",
        "content": [
          {
            "description": "Detail plan to reach the net zero commitment is vague without specific emission reductions by action. For the Scope 3 Cat 1 & 2 (currently 93% of their emissions), it is only mentioned a target of 40% reduction in the embodied carbon of workplace construction. Any residual emissions are planned to be eliminated through carbon removal projects.",
            "result": "pass",
            "graphData": {
              "labels": ["Renewable Energy", "Energy Efficiency", "Carbon Removal Projects"],
              "values": [40, 30, 30],
              "graphType": "pie"
            }
          }
        ]
      },
      {
        "sectionName": "Offsets Plan",
        "logo": "../assets/Offsets.svg",
        "content": [
          {
            "description": "Based on current emissions tendency, expected emissions by 2030 will be 20MtCO2e. Even if a 40% of the emissions are being reduced from their major categories (1&2), it is still required to offset 11MtCO2e, equivalent to 4 times Luxembourg country area of rainforest to be planted a year. Meta claims that the have booked 6,75 million tones CO2e carbon credits, but even with those credits there would be needed 4,3 million tones of extra offset projects.",
            "result": "fail",
            "graphData": {
              "years": ["2020", "2025", "2030"],
              "emissionValues": [25, 30, 35],
              "offsetValues": [15, 20, 25],
              "graphType": "line"
            }
          }
        ]
      }
    ]
  } 
  ngAfterViewInit(): void {
    if (!this.chartInstance) {
      this.chartInstance = echarts.init(this.chartElement.nativeElement);
    }

    this.payload.evaluationSections.forEach(section => {
      section.content.forEach(item => {
        if (item.graphData) {
          this.updateChart(item.graphData);
        }
      });
    });
  }

  updateChart(graphData: any): void {
    const options = this.getChartOptions(graphData);
    this.chartInstance.setOption(options);
    console.log(this.chartInstance);
  }

  getChartOptions(graphData: any): any {
    let options;
    switch (graphData.graphType) {
      case 'line':
        options = {
          xAxis: {
            type: 'category',
            data: graphData.xAxis
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: graphData.yAxis,
            type: 'line'
          }]
        };
        break;
      case 'bar':
        options = {
          xAxis: {
            type: 'category',
            data: graphData.categories
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: graphData.values,
            type: 'bar'
          }]
        };
        break;
      case 'pie':
        options = {
          series: [{
            data: graphData.values.map((value: any, index: number) => ({
              name: graphData.labels[index],
              value
            })),
            type: 'pie'
          }]
        };
        break;
      default:
        options = {};
    }
    return options;
  }
}
