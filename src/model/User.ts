export interface User {
  id: string;
  name: string;
  email: string;
  description: string;
  profileUrl: string;
  userActivities: any[];
  userCareers: {
    companyName: string;
    description: string;
    startDate: string;
    endDate: string;
    orderIndex: number;
  }[];
  userCertificates: {
    name: string;
    description: string;
    acquisitionDate: string;
    orderIndex: number;
  }[];
}
