import About from "@/components/About";
import NavButton from "@/components/global/NavButton";
import Navbar from "@/components/global/Navbar";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (error) console.log(error);
    if (!isLoading && !user) {
      console.log("Not connected yet");
    } else if (user) {
      router.push("/main");
    }
  }, [isLoading, user]);

  return (
    <>
      <Navbar title={<NavButton name="TofuMasque" hover={false} />}>
        <NavButton name="Se connecter" link="/api/auth/login" />
        <NavButton name="Se déconnecter" link="/api/auth/logout" />
      </Navbar>

      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <About />
      </main>
    </>
  );
}
