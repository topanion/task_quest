import React, { useState, useEffect } from "react";
import { todoService } from "@/services/client/todo-service";
import ToDoButton from "../custom/ToDoButton";
import { supabaseClient } from "@/utils/supabase-client";

export default function Setup({ userInfo }) {
  const [appTodos, setAppTodos] = useState(null);
  const [userTodos, setUserTodos] = useState(null);

  useEffect(() => {
    const realtimeChangeSubscription = supabaseClient
      .channel("realtime change on todos user when adding through setup")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "todo_user",
          condition: `user_id.eq.${userInfo.id}`,
        },
        (payload) => {
          todoService.getNonLinkedAppTodos(userInfo.id).then((e) => {
            setAppTodos(e);
          });
          todoService.getAllTodos(userInfo).then((e) => {
            setUserTodos(e);
          });
        }
      )
      .subscribe();

    if (!appTodos) {
      todoService.getNonLinkedAppTodos(userInfo.id).then((e) => {
        setAppTodos(e);
      });
      todoService.getAllTodos(userInfo).then((e) => {
        setUserTodos(e);
      });
    }

    return () => {
      // Unsubscribe from the channel when the component unmounts
      realtimeChangeSubscription.unsubscribe();
    };
  }, [userInfo.id, userTodos]);

  const onClickAddUserTodo = (todo_id) => {
    todoService.addUserTodo(userInfo.id, todo_id);
  };

  return (
    <>
      {appTodos && (
        <>
          <h3 className="text-lg font-bold mb-1">
            Add some tasks to your to-do list!
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {appTodos.map((todo) => (
              <ToDoButton
                key={todo.id}
                text={todo.text}
                disappear={true}
                onClick={() => onClickAddUserTodo(todo.id)}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
