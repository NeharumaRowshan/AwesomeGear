import db from '../../lib/db';

export default async function handler(req, res) {
  try {
    await db.connect();
    res.status(200).json({ message: 'DB connected successfully' });
  } catch (error) {
    res.status(500).json({ error: 'DB connection failed', details: error.message });
  }
}