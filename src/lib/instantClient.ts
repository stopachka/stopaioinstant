import { init } from "@instantdb/react";
import { Schema } from "@/lib/types";

const clientDB = init<Schema, { pages: { presence: {} } }>({
  appId: process.env.NEXT_PUBLIC_INSTANT_APP_ID!,
});

export default clientDB
