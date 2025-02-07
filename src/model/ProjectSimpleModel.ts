export interface ProjectSimpleModel {
  id: number;
  userId: number;
  name: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  thumbnailUrl?: string;
  projectTypes: { id: number; name: string }[];
  techs: { id: number; name: string }[];
}
