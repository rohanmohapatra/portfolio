export type Project = {
  id: string;
  name: string;
  description: string;
  primaryLanguage: { name: string } | null;
  stargazerCount: number;
  forkCount: number;
  url: string;
  has_pages?: boolean;
};

export const getProjects = async (): Promise<Project[]> => {
  const projects = await import('../data/projects.json');
  return projects.default;
};

export const processProjects = async (): Promise<Project[]> => {
  const nameFilter = [
    'motorsports-app',
    'hdbscan-cpp',
    'torchswarm',
    'kafka-table',
    'flexi-events',
    'simple-pascal-compiler',
    'adaswarm',
    'docassist.io',
    // 'hadoop-hive-docker',
    // 'selfieless-acts-microservice',
    'scale-invariant-cnn',
    // 'springfield-inforetrieve',
    'souloride',
    'aatmatrisha18',
    'dockerized-databases'
  ];

  const projects = await getProjects();
  return projects
    .filter((project) => nameFilter.includes(project.name))
    .sort((a, b) => b.stargazerCount - a.stargazerCount);
};
