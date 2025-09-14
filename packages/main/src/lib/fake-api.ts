import projects from './data.json';
interface Project {
  id: number;
  name: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  has_pages: boolean;
  description?: string;
}

export const getProjects = (): { data: Project[] } => {
  return { data: projects as Project[] };
};
