import React from "react";
import { useForm } from "react-hook-form";

export default function HireForm() {
  const { handleSubmit, register, formState, getValues } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => console.log(getValues());

  return (
    <div className="">
      <h1 className="p-4 pb-4 border-b mb-5">
        What project are you looking for ?
      </h1>
      <form
        className="flex flex-col gap-2 m-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border px-2"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className="border px-2"
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <select className="border px-2" {...register("project")}>
          <option value="showcase">Site vitrine</option>
          <option value="web_app">Application Web</option>
        </select>
        <div className="text-center">
          <button
            className="p-3 w-fit rounded-xl bg-blue-600 text-white relative bottom-0"
            type="submit"
            disabled={!formState.isValid}
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
