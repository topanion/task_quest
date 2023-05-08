import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { userService } from "@/services/client/supabase/user-service";
import MainDisplay from "@/components/main/MainDisplay";
import { supabaseClient } from "@/utils/supabase-client";
import { createUpdateSubscription } from "@/utils/supaSubcription";

function Main() {
  const { user, isLoading } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  let listeningUpdateToUser; // Declare the variable outside the if statement

  useEffect(() => {
    const defineUserInfo = () => {
      console.log("user given by useUser is ", user);

      userService.userLogin(user).then((e) => {
        console.log(e);
        if (e.data) setUserInfo(e.data[0]);
      });
    };

    if (isLoading && !user) return;

    if (user && !userInfo) defineUserInfo();

    if (userInfo) {
      listeningUpdateToUser = createUpdateSubscription(
        "listening to update to user",
        "UPDATE",
        "users",
        `id.eq.${userInfo.id}`,
        () => defineUserInfo()
      );
    }

    return () => {
      if (listeningUpdateToUser) listeningUpdateToUser.unsubscribe();
    };
  }, [isLoading, user, userInfo, supabaseClient]);

  return (
    <>
      {userInfo && (
        <div className=" text-gray-600 w-[100vw] h-[100vh] overflow-scroll">
          <MainDisplay userInfo={userInfo} />
        </div>
      )}
    </>
  );
}

export default withPageAuthRequired(Main);
