const getAllTodos = async (user) => {
  try {
    const request = await fetch("api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: user.id }),
    });
    const response = await request.json();

    if (!response) return null;
    return response.all_items;
  } catch (error) {
    return error.status;
  }
};

const setTodoCompleted = async (id, value) => {
  try {
    const request = await fetch("api/supabase", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        table: "todo_user",
        key: "id",
        value: id,
        updatedData: {
          completed: value,
        },
      }),
    });
    const response = await request.json();

    return response;
  } catch (error) {
    return error.status;
  }
};

const resetTodosCompletedForUser = async (user_id) => {
  try {
    const request = await fetch("api/supabase", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        table: "todo_user",
        key: "user_id",
        value: user_id,
        updatedData: {
          completed: false,
        },
      }),
    });
    const response = await request.json();

    return response;
  } catch (error) {
    return error.status;
  }
};

const getAllAppTodos = async () => {
  try {
    const request = await fetch(
      "api/supabase?table=todos&key=origin&value=app",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const response = await request.json();

    return response;
  } catch (error) {
    return error.status;
  }
};

const unlinkTodo = async (link_id) => {
  try {
    const url = `api/todos?id=${link_id}`;

    const request = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const response = await request.json();
    return response;
  } catch (error) {
    return error.status;
  }
};

const getNonLinkedAppTodos = async (user_id) => {
  const response = await fetch(`/api/setup?userId=${user_id}`);
  const todos = await response.json();
  return todos;
};

const addUserTodo = async (user_id, todo_id) => {
  try {
    const request = await fetch("api/supabase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        table: "todo_user",
        newData: {
          user_id: user_id,
          todo_id: todo_id,
        },
      }),
    });
    const response = await request.json();

    return response;
  } catch (error) {
    return error.status;
  }
};

export const todoService = {
  getAllTodos,
  setTodoCompleted,
  getAllAppTodos,
  addUserTodo,
  resetTodosCompletedForUser,
  getNonLinkedAppTodos,
  unlinkTodo,
};
