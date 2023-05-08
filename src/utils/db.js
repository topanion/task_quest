import { supabaseClient } from "./supabase-client";

const get = async (table, key, value) => {
  let query;
  if (key !== null && value !== null) {
    query = supabaseClient.from(table).select("*").eq(key, value);
  } else {
    query = supabaseClient.from(table).select("*");
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  if (data.length === 0) {
    return null;
  } else return data;
};

const create = async (table, newElement) => {
  const { data, error } = await supabaseClient
    .from(table)
    .insert(newElement)
    .select();

  if (error) throw new Error(error.message);
  // returns the inserted row
  return data;
};

const update = async (table, key, value, updateData) => {
  if (!key || !value || !updateData) return false;

  const { data, error } = await supabaseClient
    .from(table)
    .update(updateData)
    .eq(key, value)
    .select();

  if (error) throw new Error(error.message);
  // returns the updated row
  return data;
};

const remove = async (table, key, value) => {
  const { error } = await supabaseClient
    .from(table)
    .delete()
    .eq(key, value)
    .select();

  if (error) throw new Error(error.message);
  return true;
};

export const db = {
  get,
  create,
  update,
  remove,
};
