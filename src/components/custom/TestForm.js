import React from "react";
import { useForm } from "react-hook-form";
import { db } from "@/utils/db";
import { clientSupaUser } from "@/services/client/supabase/user-service";

export default function TestForm() {
  const { handleSubmit, register, formState, getValues } = useForm({
    mode: "onChange",
  });

  const onTest = async () => {
    let values = getValues();
    const result = await clientSupaUser.userLogin({
      email: "caillou@outlook.fr",
    });
  };

  const onInsert = async () => {
    let values = getValues();
    console.log("trying to create", values);
    const result = await db.create("users", {
      name: values.name,
      email: values.email,
    });
    console.log(result);
  };

  const onUpdate = async () => {
    let values = getValues();
    const result = await db.update(values.table, values.key, values.value, {
      name: values.name,
      email: values.email,
    });
    console.log(result);
  };

  const onDelete = async () => {
    let values = getValues();
    const result = await db.remove("users", values.key, values.value);
    console.log(result);
  };

  return (
    <div className="">
      <form className="flex flex-col gap-2 m-5">
        <input
          className="border px-2"
          type="text"
          placeholder="table"
          {...register("table", { required: true })}
        />
        <input
          className="border px-2"
          type="text"
          placeholder="key"
          {...register("key")}
        />
        <input
          className="border px-2"
          type="text"
          placeholder="value"
          {...register("value")}
        />

        <input
          className="border px-2"
          type="text"
          placeholder="name"
          {...register("name")}
        />

        <input
          className="border px-2"
          type="text"
          placeholder="email"
          {...register("email")}
        />

        <div className="text-center">
          <button
            type="button"
            className="p-3 w-fit rounded-xl bg-blue-600 text-white relative bottom-0"
            onClick={() => onTest()}
          >
            Test
          </button>
          <button
            type="button"
            className="p-3 w-fit rounded-xl bg-blue-600 text-white relative bottom-0"
            onClick={() => onInsert()}
          >
            Add
          </button>
          <button
            type="button"
            className="p-3 w-fit rounded-xl bg-blue-600 text-white relative bottom-0"
            onClick={() => onUpdate()}
          >
            Update
          </button>
          <button
            type="button"
            className="p-3 w-fit rounded-xl bg-blue-600 text-white relative bottom-0"
            onClick={() => onDelete()}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
