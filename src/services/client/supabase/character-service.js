const characterCreated = async (user, data) => {
  try {
    const request = await fetch("api/supabase", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        table: "users",
        key: "email",
        value: user.email,
        updatedData: {
          character_name: data.name,
          character_class: data.characterClass,
          character_created: true,
        },
      }),
    });
    const response = await request.json();

    return response;
  } catch (error) {
    return error.status;
  }
};

const addEnergy = async (user, value) => {
  try {
    const request = await fetch("api/supabase", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        table: "users",
        key: "email",
        value: user.email,
        updatedData: {
          energy: user.energy + value,
        },
      }),
    });
    const response = await request.json();

    return response;
  } catch (error) {
    return error.status;
  }
};

const setCharacterCreatedFalse = async (user) => {
  try {
    const request = await fetch("api/supabase", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        table: "users",
        key: "email",
        value: user.email,
        updatedData: {
          character_created: false,
        },
      }),
    });
    const response = await request.json();

    return response;
  } catch (error) {
    return error.status;
  }
};

export const characterService = {
  characterCreated,
  setCharacterCreatedFalse,
  addEnergy,
};
