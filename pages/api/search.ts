// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { comicSearchServiceInstance } from '@/services/comicSearch.service'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const query = req.query.q as string;
  const hits = await comicSearchServiceInstance.search(query)
  res.status(200).json(hits)
}
