import React from "react";
import Image from "next/image";
import Typography from "./global/Typography";
import Grid from "./global/Grid";
import { FadeIn } from "./animation/FadeIn";

export default function About() {
  return (
    <>
      <div className="flex min-h-screen w-screen ">
        <Grid
          sizes={["2", "1", "1"]}
          className={"m-auto sm:min-h-max w-[80vw] lg:h-[100vh] h-[80vh] px-3"}
        >
          <div className="flex">
            <div className="my-auto ml-[10%]">
              <h1 className="text-center text-2xl font-bold">
                Welcome to LifeQuester !
              </h1>

              <div className="max-w-[80vw] mx-auto mt-12 px-4 py-8 ">
                <p className="mt-2 text-gray-600">
                  Welcome to our RPG-inspired productivity app! With this app,
                  you can create your very own character and embark on an epic
                  journey to level up by completing real-life tasks and
                  challenges. Your character will gain Energy by completing
                  tasks and use it to explore dangerous dungeons and earn
                  valuable loot. As you progress, your character will also earn
                  experience points (EXP) and level up, unlocking new abilities
                  and becoming even stronger.
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
                  The more tasks you complete, the more Energy your character
                  will earn. Use this Energy to explore new areas and defeat
                  tough enemies in the dungeons. Are you ready to embark on this
                  epic journey and become the ultimate productivity warrior?
                  Create your character now and start leveling up today!
                </p>
              </div>
            </div>
          </div>
          {/*  <div className="relative min-h-[50vh]">
            <FadeIn animationClass="fade-in">
              <Image
                priority
                alt="drawing of a developer sitting behind computer"
                src="developer.ef097afb.svg"
                fill
              />
            </FadeIn>
  </div>*/}
        </Grid>
      </div>
    </>
  );
}
