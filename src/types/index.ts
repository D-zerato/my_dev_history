export interface Theme {
  isDark: boolean;
}

export interface Project {
  title: string;
  description: string;
  image: string;
}

export interface TimelineItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Skill {
  category: string;
  items: string[];
}
