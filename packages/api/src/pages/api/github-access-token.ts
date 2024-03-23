import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  accessToken: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (process.env.GITHUB_ACCESSTOKEN) {
    res.status(200).json({ accessToken: process.env.GITHUB_ACCESSTOKEN });
  } else {
    res.status(400);
  }
}
