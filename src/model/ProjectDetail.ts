export interface ProjectDetail {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  workDetails: {
    tasks: Array<{ title: string; description: string }>;
  };
  achievements: Array<{ title: string; description: string }>;
  issues: Array<{
    problem: string;
    solution: string;
    review: string;
  }>;
}
