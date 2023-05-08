import { db } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // get will return an array of object matching (usually only one)
      const data = await db.get("users", "sub", req.body.user.sub);

      // when the length is zero, get will return null which means that, since user succeed, we have to
      // create the user
      if (!data) {
        try {
          const newUser = await db.create("users", req.body.user);

          res.status(201).json({ data: newUser });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
