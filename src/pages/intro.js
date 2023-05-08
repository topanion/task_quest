import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Head from "next/head";
import { supabase } from "@/utils/supabase-client";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { supabaseService } from "@/services/supabase-service";

export default function Introduction() {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [supaUser, setSupaUser] = useState(null);

  useEffect(() => {
    if (isLoading && !user) return;
    if (user) {
      supabaseService.getUser(user.email).then((e) => {
        if (e.character_created === true) router.push("/main");
        setSupaUser(e);
      });
    }
  }, [isLoading, user]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { error } = await supabase
      .from("users")
      .update({
        character_name: data.name,
        character_class: data.characterClass,
        character_created: true,
      })
      .eq("email", user.email);

    if (error) {
      console.error(error);
    } else {
      console.log("User data updated successfully");
    }
    router.push("/main");
  };

  const classDescriptions = {
    mage: "The Mage class specializes in casting spells and manipulating elements to defeat enemies.",
    warrior:
      "The Warrior class specializes in melee combat and can withstand more damage than other classes.",
    archer:
      "The Archer class specializes in ranged combat and can deal damage from a distance.",
  };

  return (
    <>
      {supaUser && (
        <>
          <Head>
            <title>Introduction - LifeQuester</title>
          </Head>
          <div className="max-w-[85vw] mx-auto mt-12 px-4 py-8 border border-gray-300 shadow-sm rounded-md">
            <h1 className="text-center text-2xl font-bold">
              Welcome to LifeQuester !
            </h1>

            <div className="max-w-[80vw] mx-auto mt-12 px-4 py-8 ">
              <p className="mt-2 text-gray-600">
                Welcome to our RPG-inspired productivity app! With this app, you
                can create your very own character and embark on an epic journey
                to level up by completing real-life tasks and challenges. Your
                character will gain Energy by completing tasks and use it to
                explore dangerous dungeons and earn valuable loot. As you
                progress, your character will also earn experience points (EXP)
                and level up, unlocking new abilities and becoming even
                stronger.
              </p>
              <p className="mt-4 text-gray-600">
                Here are some examples of real-life tasks you can add to your
                to-do list:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Do 50 push-ups</li>
                <li>Read a chapter of a book</li>
                <li>Practice a new language for 30 minutes</li>
                <li>Clean your room for 20 minutes</li>
                <li>Take a 10-minute walk outside</li>
              </ul>
              <p className="mt-4 text-gray-600 mb-10">
                The more tasks you complete, the more Energy your character will
                earn. Use this Energy to explore new areas and defeat tough
                enemies in the dungeons. Are you ready to embark on this epic
                journey and become the ultimate productivity warrior? Create
                your character now and start leveling up today!
              </p>

              <p className="mt-2 text-gray-600 ">Create your character:</p>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md${
                      errors.name ? " border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      Name is required
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="characterClass"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Class
                  </label>
                  <select
                    {...register("characterClass", { required: true })}
                    id="characterClass"
                    name="characterClass"
                    autoComplete="off"
                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md${
                      errors.characterClass ? " border-red-500" : ""
                    }`}
                  >
                    <option value="">-- Select a class --</option>
                    <option value="mage">Mage</option>
                    <option value="warrior">Warrior</option>
                    <option value="archer">Archer</option>
                  </select>
                  {errors.characterClass && (
                    <p className="mt-1 text-sm text-red-500">
                      Class is required
                    </p>
                  )}

                  <p className="mt-1 text-sm text-gray-500">
                    {classDescriptions[watch("characterClass")]}
                  </p>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Create Character
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
