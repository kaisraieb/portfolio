export interface Project {
  title: string;
  subtitle: string;
  rotate: number;
  image: string;
  description: string;
  demoLink: string;
}

export interface ProjectPreviewProps {
  project: Project | null;
  onClose: () => void;
}
