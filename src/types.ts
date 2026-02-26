export type ProjectCategory = '微电影' | '剧本' | '综艺' | '平面设计' | '策展成果';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  concept?: string;
  awards?: string;
  imageUrl: string;
  detailImages?: string[];
  groupedImages?: { title: string; images: string[] }[];
  videoUrl?: string;
  iframeUrl?: string;
  role: string;
  link?: string;
  extraLinks?: { label: string; url: string }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
