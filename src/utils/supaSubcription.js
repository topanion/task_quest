import { supabaseClient } from "./supabase-client";

export const createUpdateSubscription = (
  channelName,
  event,
  table,
  condition = "",
  onChange
) => {
  return supabaseClient
    .channel(channelName)
    .on(
      "postgres_changes",
      {
        event: event,
        schema: "public",
        table: table,
        condition: condition,
      },
      () => {
        onChange();
      }
    )
    .subscribe();
};
