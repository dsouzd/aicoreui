export interface EvaluationResult {
    evaluatedCompany: string;
    logo: string;
    overallEvaluationResult: boolean;
    aboutCompany: string;
    evaluationSections: EvaluationSection[];
  }
  
  export interface EvaluationSection {
    sectionName: string;
    logo: string;
    content: SectionContent[];
  }
  
  export interface SectionContent {
    description: string;
    result: string;
    graphData?: GraphData;
  }
  
  export interface GraphData {
    xAxis?: string[];
    yAxis?: number[];
    categories?: string[];
    values?: number[];
    labels?: string[];
    emissionValues?: number[];
    offsetValues?: number[];
    years?: string[];
    graphType: string;
  }
  