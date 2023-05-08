import About from "@/components/About";
import { ModalButton, Modal } from "@/components/global/Modal";
import NavButton from "@/components/global/NavButton";
import Navbar from "@/components/global/Navbar";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import TestForm from "@/components/custom/TestForm";
import { userService } from "@/services/client/supabase/user-service";

export default function Home() {
  const [hireModalOpen, setHireModalOpen] = useState(false);
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
      <Modal isOpen={hireModalOpen} onClose={() => setHireModalOpen(false)}>
        <TestForm />
      </Modal>
      <Navbar title={<NavButton name="TofuMasque" hover={false} />}>
        <NavButton name="Se connecter" link="/api/auth/login" />
      </Navbar>

      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <About />
      </main>
    </>
  );
}
