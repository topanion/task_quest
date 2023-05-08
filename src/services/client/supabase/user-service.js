const userLogin = async (user) => {
  if (!user) {
    throw new Error("User is undefined");
  }

  try {
    const request = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          picture: user.picture,
          sub: user.sub,
          name: user.name,
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
