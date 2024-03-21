import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  projects: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    projects: [
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
    ]
  });
}
