const userLogin = async (user) => {
  console.log("received user as ", user);
  if (!user) {
    throw new Error("User is undefined");
  }

  try {
    const request = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        table: "users",
        key: "email",
        user: {
          picture: user.picture,
          email: user.email,
        },
      }),
    });
    const response = await request.json();

    return response;
  } catch (error) {
    return error.status;
  }
};

export const userService = {
  userLogin,
};
