import { supabaseClient } from "@/utils/supabase-client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { id, energy } = req.body;

      // Fetch the user from the "users" table
      const { data: user, error } = await supabaseClient
        .from("users")
        .select("energy")
        .eq("id", id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      // Add the energy value to the existing energy column
      const updatedEnergy = (user.energy || 0) + energy;

      // Update the energy value in the user record
      const { data: updatedUser, error: updateError } = await supabaseClient
        .from("users")
        .update({ energy: updatedEnergy })
        .eq("id", id)
        .single();

      if (updateError) {
        throw new Error(updateError.message);
      }

      res.status(201).json({ user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
