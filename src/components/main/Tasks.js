import React, { useState, useEffect } from "react";
import { todoService } from "@/services/client/todo-service";
import { characterService } from "@/services/client/supabase/character-service";
import { createUpdateSubscription } from "@/utils/supaSubcription";
import ToDoUser from "./task/ToDoUser";
import DoneToDos from "./task/DoneToDos";
import RadioButtons from "../custom/RadioButtons";
import ToDoList from "./task/ToDoList";
import ToDoButton from "../custom/ToDoButton";

export default function Tasks({ userInfo }) {
  const [todos, setTodos] = useState(null);
  const [appTodos, setAppTodos] = useState(null);
  const [mode, setMode] = useState("todouser");

  // whole setup with listeners to any changes to the links user/to-do items
  useEffect(() => {
    const functionSetTodos = () => {
      todoService.getAllTodos(userInfo).then((e) => {
        if (!e) {
          setTodos([]);
        } else setTodos(e);
      });
      todoService.getNonLinkedAppTodos(userInfo.id).then((e) => {
        setAppTodos(e);
      });
    };

    const updateSubscription = createUpdateSubscription(
      "realtime changes on todo_user",
      "*",
      "todo_user",
      `user_id.eq.${userInfo.id}`,
      () => functionSetTodos()
    );

    if (!todos && !appTodos) {
      functionSetTodos();
    }

    return () => {
      // Unsubscribe from the channel when the component unmounts
      updateSubscription.unsubscribe();
    };
  }, [todos, appTodos, userInfo]);

  // function to complete task
  const taskDone = (todo_id) => {
    todoService.setTodoCompleted(todo_id, true);
    characterService.addEnergy(userInfo, 2);
  };

  // function for when the user clicked on one by mistake and it has to cancel the completed state
  const undoTask = (todo_id) => {
    todoService.setTodoCompleted(todo_id, false);
    characterService.addEnergy(userInfo, -2);
  };

  // function for adding new task
  const onClickAddUserTodo = (todo_id) => {
    todoService.addUserTodo(userInfo.id, todo_id);
  };

  // function to delete link
  const undoUserTodo = (id) => {
    todoService.unlinkTodo(id);
  };

  const possibleModes = {
    todouser: <ToDoUser todos={todos} onClick={taskDone} />,
    donetodos: <DoneToDos todos={todos} onClick={undoTask} />,
    apptodos: (
      <>
        <ToDoButton text={"Write your own task... ✎ (not implemented yet)"} />
        <ToDoList todos={appTodos} onClick={onClickAddUserTodo} />{" "}
      </>
    ),
    alltodos: <ToDoList todos={todos} onClick={undoUserTodo} alert={true} />,
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const radioOptions = [
    { value: "todouser", label: "Tasks" },
    { value: "donetodos", label: "Completed" },
    { value: "apptodos", label: "New tasks" },
    { value: "alltodos", label: "Delete" },
  ];

  return (
    <div className="p-2 min-h-[85]">
      {todos && appTodos ? (
        <>
          <div className="flex justify-between items-center mb-3">
            <RadioButtons
              mode={mode}
              options={radioOptions}
              handleModeChange={handleModeChange}
            />
          </div>

          <div className="grid gap-1 lg:grid-cols-3 md:grid-cols-2">
            {possibleModes[mode]}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {/*
      <button
        type="button"
        className="mt-5 rounded-md bg-slate-600 text-white hover:bg-slate-800"
        onClick={() => todoService.resetTodosCompletedForUser(userInfo.id)}
      >
        Reset all tasks done today
      </button>
    */}
    </div>
  );
}
