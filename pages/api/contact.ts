// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {sanity} from "../../lib";

const {client} = sanity

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {name, email, message} = await JSON.parse(req.body)
        const newContact = {_type: 'contact', name, email, message,}

        let data = await client(process.env.SANITY_TOKEN).create(newContact)
        console.log('********************** New contact success **********************')
        res.status(200).json(JSON.stringify(data))
        res.end()
    } catch (error) {
        console.error('********************** New contact creation unsuccessful **********************')
        console.error(JSON.stringify(error))
        res.status(500).json(JSON.parse(JSON.stringify(error)))
        res.end()
    }

}

export default handler;