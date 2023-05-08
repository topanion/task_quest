import { supabaseClient } from "@/utils/supabase-client";

export default async function handler(req, res) {
  const { userId } = req.query;

  if (req.method === "GET") {
    try {
      // Fetch linked todos' IDs for the user
      const { data: linkedTodoIds, error: linkedTodoIdsError } =
        await supabaseClient
          .from("todo_user")
          .select("todo_id")
          .eq("user_id", userId);

      if (linkedTodoIdsError) {
        throw new Error(linkedTodoIdsError.message);
      }

      const linkedIds = linkedTodoIds.map((row) => row.todo_id);

      // Fetch todos with origin "app" that the user is not already linked to
      const { data: todos, error: todosError } = await supabaseClient
        .from("todos")
        .select("*")
        .eq("origin", "app");

      if (todosError) {
        throw new Error(todosError.message);
      }

      const filteredTodos = todos.filter(
        (todo) => !linkedIds.includes(todo.id)
      );

      res.status(200).json(filteredTodos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
