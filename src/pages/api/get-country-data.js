import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export default async function handler (req, res) {
  const { country } = req.query

  // only support spain for now
  if (country !== 'es') {
    res.status(400).json({ error: 'Invalid country' })
    return
  }

  const path = join(process.cwd(), `./data/${country}.json`)
  const content = await readFile(path)

  res.status(200).json({ content: JSON.parse(content) })
}
