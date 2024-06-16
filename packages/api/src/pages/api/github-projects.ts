import { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

const projects = [
  'motorsports-app',
  'hdbscan-cpp',
  'torchswarm',
  'kafka-table',
  'flexi-events',
  'simple-pascal-compiler',
  'adaswarm',
  'docassist.io',
  'hadoop-hive-docker',
  'selfieless-acts-microservice',
  'scale-invariant-cnn',
  'springfield-inforetrieve',
  'souloride',
  'aatmatrisha18',
  'dockerized-databases'
];

type Project = {
  id: number;
  name: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  has_pages: boolean;
  description?: string;
};

export const config = {
  maxDuration: 30
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const accessToken = process.env.GITHUB_ACCESSTOKEN;

  const response = await axios.get(
    'https://api.github.com/user/repos?per_page=100',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.github+json'
      }
    }
  );
  let data: Project[] = response.data;
  data = data.filter((project) => projects.includes(project.name));

  if (response.status === 200) {
    return res.status(200).json(data);
  }
  return res.status(400);
}
