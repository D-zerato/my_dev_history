export interface User {
  id: string;
  name: string;
  email: string;
  description: string;
  profileUrl: string;
  userActivities: any[];
  userCareers: {
    id: number;
    companyName: string;
    description: string;
    startDate: string;
    endDate: string;
    orderIndex: number;
  }[];
  userCertificates: {
    id: number;
    name: string;
    description: string;
    acquisitionDate: string;
    orderIndex: number;
  }[];
}
