// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { comicSearchServiceInstance } from '@/services/comicSearch.service'
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const hits = await comicSearchServiceInstance.search(req.query.q as string)
  res.status(200).json(hits)
}
