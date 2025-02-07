export interface ProjectDetail {
  id: number;
  userId: number;
  name: string;
  description?: string;
  personnel?: number;
  startDate?: Date;
  endDate?: Date;
  projectTypes: { id: number; name: string }[];
  techs: { id: number; name: string }[];
  projectImages?: {
    id: number;
    imageUrl: string;
    thumbnail: boolean;
  }[];
  projectTaskHistories: {
    id: number;
    content: string;
    orderIndex: number;
  }[];
  projectPerformances: {
    id: number;
    content: string;
    orderIndex: number;
  }[];
  projectTroubleshootings: {
    id: number;
    content: string;
    orderIndex: number;
  }[];
}
