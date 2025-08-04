import db from "../../lib/db";

export default async function handler(req, res) {
  try {
    await db.connect();
    res.status(200).json({ message: "DB Connected Successfully" }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}