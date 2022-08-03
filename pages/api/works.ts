import type {NextApiRequest, NextApiResponse} from 'next'
import {client} from "../../lib/sanity/config";
import {queries} from "../../constants";

type Data = SanityDoc.Works

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        let works = await client(process.env.SANITY_TOKEN).fetch(queries.sanity.works)
        res.status(200).json(works)
        res.end()
    } catch (error) {
        res.status(500).json(JSON.parse(JSON.stringify(error)))
        res.end()
    }
}

export default handler