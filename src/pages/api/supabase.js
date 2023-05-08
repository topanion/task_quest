import { db } from "@/utils/db";

export default async function handler(req, res) {
  const request = req.body;

  if (req.method === "GET") {
    try {
      const data = await db.get(
        req.query.table,
        req.query.key,
        req.query.value
      );
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const createdData = await db.create(request.table, request.newData);
      res.status(201).json(createdData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "PUT") {
    try {
      const updatedData = await db.update(
        request.table,
        request.key,
        request.value,
        request.updatedData
      );
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const deleted = await db.remove(
        request.table,
        request.key,
        request.value
      );
      res.status(200).json({ success: deleted });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
