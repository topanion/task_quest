import { db } from "@/utils/db";
import { supabaseClient } from "@/utils/supabase-client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const links = await db.get("todo_user", "user_id", req.body.id);
      if (!links)
        return res.status(201).json({ message: "User is linked to no todo !" });

      const all_items = await Promise.all(
        links.map(async (e) => {
          const todo = await db.get("todos", "id", e.todo_id);
          const return_value = {
            id: e.id,
            completed: e.completed,
            text: todo[0].text,
            origin: todo[0].origin,
          };
          return return_value;
        })
      );

      res.status(201).json({ all_items });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "DELETE") {
    try {
      await supabaseClient.from("todo_user").delete().eq("id", req.query.id);

      res.status(201).json(true);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
